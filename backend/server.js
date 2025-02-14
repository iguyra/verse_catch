const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors"); // Import cors
const { OpenAI } = require("openai");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const fs = require("fs");
const path = require("path");

const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("ffmpeg-static");

const gemini_key = process.env.GEMINI_KEY;

const genAI = new GoogleGenerativeAI(gemini_key);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-002" });

const app = express();

const frontend_url = process.env.FRONTEND_URL;
app.use(cors({ origin: frontend_url })); // Allow requests from  frontend

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: frontend_url, // Allow Socket.IO connections from frontend
    methods: ["GET", "POST"], // Allowed HTTP methods
  },
});

// async function transcriptions(audioData) {
//   const transcription = await openai.audio.transcriptions.create({
//     file: audioData,
//     model: "whisper-1",
//     language: "de",
//   });

//   console.log(transcription);
// }

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("audioStream", async (data) => {
    try {
      // Detect Bible quote

      const transcript = data?.transcript;
      const refIsAvailable = data?.ref ? true : false;

      if (refIsAvailable) {
        const result = await isImpliedNextVerse(transcript);
        const isNextVerse = result.response.text();

        // if the user wants the next verse
        // if (isNextVerse?.trim() === "yes" || isNextVerse?.trim() === "Yes") {
        if (["yes", "Yes"].includes(isNextVerse?.trim())) {
          // // get the next verse of the prev verse
          const result = await getTheNextVerse(data.ref);
          const nextVerse = result.response.text();

          // identify the book/chapter/verse in the next verse
          const book = await getBibleBookChapterAndVerse(nextVerse);

          return socket.emit("bibleQuote", {
            reference: book.response.text(),
            text: nextVerse,
          });
        }

        const prev_result = await isImpliedPreviousVerse(transcript);
        const isPrevVerse = prev_result.response.text();

        console.log(isPrevVerse, "IS__PREVVVV");

        // if the user wants the previous verse

        if (["yes", "Yes"].includes(isPrevVerse?.trim())) {
          // // get the previos verse of the current verse
          const prev_result = await getThePreviousVerse(data.ref);
          const prevVerse = prev_result.response.text();

          // identify the book/chapter/verse in the previous verse
          const book = await getBibleBookChapterAndVerse(prevVerse);

          return socket.emit("bibleQuote", {
            reference: book.response.text(),
            text: prevVerse,
          });
        }
      }

      const result = await getBibleBookChapterAndVerse(data?.transcript);

      const verse = await getBibleQuote(result.response.text());

      socket.emit("bibleQuote", {
        reference: result.response.text(),
        text: verse,
      });

      // console.log(verseee, "VERRRRRR");
    } catch (err) {
      console.error("Processing error:", err);
    }
  });

  socket.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(8000, () => {
  console.log("listening on *:8000");
});

async function getBibleQuote(ref) {
  const response = await fetch(`https://bible-api.com/${ref}`);
  const data = await response.json();
  return data.text;
}

async function getBibleBookChapterAndVerse(verse) {
  // identify the book/chapter/verse in the verse
  const versePrompt = `Identify Bible reference in: "${verse}"
 Return ONLY the book and chapter and verse eg:"John 3:16" or "${verse} is not bible verse" explicitly.`;

  const book = await model.generateContent(versePrompt);
  return book;
}

async function getTheNextVerse(pevVerseRef) {
  // get the next verse
  const prompt = `go to the next verse in: ${pevVerseRef},return only the verse together with the book chapter eg:"John 3:16, I and my father are one" without any additional wordings`;

  const result = await model.generateContent(prompt);
  return result;
}

async function isImpliedNextVerse(transcript) {
  const prompt = `Does the text imply a desire to continue reading 
  the subsequent verse of the Bible, immediately following the previous verse?. Answer 'yes' or 'no' Text: ${transcript}`;

  const result = await model.generateContent(prompt);
  return result;
}

async function getThePreviousVerse(pevVerseRef) {
  // get the next verse
  const prompt = `What is the verse before John ${pevVerseRef},return only the verse together with the book chapter eg:"John 3:16, I and my father are one" without any additional wordings`;

  const result = await model.generateContent(prompt);
  return result;
}

async function isImpliedPreviousVerse(transcript) {
  const prompt = `Does the text imply a desire to go back reading 
  the previous verse of the Bible, immediately before the current verse?. Answer 'yes' or 'no' Text: ${transcript}`;

  const result = await model.generateContent(prompt);
  return result;
}
