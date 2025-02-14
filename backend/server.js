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

let gemini_key = process.env.GEMINI_KEY;

const genAI = new GoogleGenerativeAI(gemini_key);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-002" });

let apiKey = process.env.GEMINI_KEY;

// const openai = new OpenAI({ apiKey });

const app = express();

let frontend_url = process.env.FRONTEND_URL;
app.use(cors({ origin: frontend_url })); // Allow requests from your Next.js frontend

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: frontend_url, // Allow Socket.IO connections from your Next.js frontend
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

      console.log(data, "AUDIO__sTREEAM");

      let transcript = data?.transcript;
      let refIsAvailable = data?.ref ? true : false;

      if (refIsAvailable) {
        const prompt = `Does the text imply a desire to continue reading 
      the subsequent verse of the Bible, immediately following the previous verse?. Answer 'yes' or 'no' Text: ${transcript}`;

        const result = await model.generateContent(prompt);

        let isNextVerse = result.response.text();

        // prompt for the next verse
        if (isNextVerse?.trim() === "yes" || isNextVerse?.trim() === "Yes") {
          const prompt = `go to the next verse in: ${data?.ref}, return ony: "${data?.ref}" and only the next verse without any additional wordings`;

          // get the next verse
          const result = await model.generateContent(prompt);
          let nextVerse = result.response.text();
          console.log(nextVerse, "IS_NEXTT_VERSE");

          // identify the book/chapter/verse
          const versePrompt = `Identify Bible reference in: "${nextVerse}"
                        Return ONLY the book and chapter and verse or ${nextVerse} is not bible verse.`;

          const book = await model.generateContent(versePrompt);

          console.log(book.response.text(), "NEXT_VERSE_BOOK");

          return socket.emit("bibleQuote", {
            reference: book.response.text(),
            text: nextVerse,
          });
        }
      }

      const prompt = `Identify Bible reference in: "${data.transcript}"
                        Return ONLY the book and chapter and verse or not bible verse.`;

      const result = await model.generateContent(prompt);
      previousBook = result.response.text();

      console.log(result.response.text(), "RETRUNN__BOOK");

      let verseee = await getBibleQuote(result.response.text());

      socket.emit("bibleQuote", {
        reference: result.response.text(),
        text: verseee,
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
