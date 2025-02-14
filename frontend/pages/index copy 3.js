import "regenerator-runtime/runtime";

import "aos/dist/aos.css";

import Head from "next/head";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import styles from "./skills.module.css";
import { useState, useRef, useEffect } from "react";
import io from "socket.io-client";

function App() {
  const [isRecording, setIsRecording] = useState(false);
  //  const [transcript, setTranscript] = useState("");

  const socketRef = useRef(null);
  const [quote, setQuote] = useState("");
  const [verseDetected, setVerseDetected] = useState("");

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  console.log(quote, "QUUOOTTEE");

  useEffect(() => {
    socketRef.current = io("http://127.0.0.1:8000");

    socketRef.current.on("bibleQuote", (quote) => {
      setQuote(quote);

      if (quote.reference && quote.text) {
        stopRecording(); // stop recording when bible verse is detected and returned
        setVerseDetected(true);
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  // Reference to store the SpeechRecognition instance
  const recognitionRef = useRef(null);

  // setInterval(() => {
  //   if (transcript) {
  //     // socketRef.current.emit("audioStream", transcript);
  //     console.log("JOHHHNNNN");
  //   }
  // }, 6000);

  useEffect(() => {
    setInterval(() => {
      console.log(transcript, "T 💣💥💣🔥💣💥💣🔥");
      if (transcript) {
        console.log("JOHNNNNNNN 💣💥💣🔥💣💥💣🔥");
        // socketRef.current.emit("audioStream", transcript);
      }
    }, 6000); // 6000 milliseconds = 6 seconds
  }, [useSpeechRecognition, transcript]);

  // Function to start recording
  const startRecording = () => {
    try {
      SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    } catch (Err) {
      console.log(Err, "ERRR");
    }
  };

  // Cleanup effect when the component unmounts
  // useEffect(() => {
  //   return () => {
  //     // Stop the speech recognition if it's active
  //     if (recognitionRef.current) {
  //       recognitionRef.current.stop();
  //     }
  //   };
  // }, []);

  // Function to stop recording
  const stopRecording = () => {
    if (recognitionRef.current) {
      // Stop the speech recognition and mark recording as complete
      recognitionRef.current.stop();
      setRecordingComplete(true);
      setIsRecording(false);
    }
  };

  // Toggle recording state and manage recording actions
  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  console.log(transcript, "LATESTTSS");

  return (
    <main>
      <Head>
        <title>.A. place</title>
        <meta name="description" content="Preston's porfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://prestonxa.vercel.com" rel="canonical" />
      </Head>

      <div className="app">
        <div className={styles.body}>
          <h3 className={styles.title}>VerseCatch</h3>

          <div className={styles.versecontainer}>
            <h3>{quote?.reference}</h3>

            <p>{quote?.text}</p>
          </div>

          <div className={styles.controlcontainer}>
            <img
              className={styles.menu}
              src={"static/toggleicon.png"}
              alt="d"
            />

            <h3>
              {isRecording && (
                <img
                  className={styles.menu}
                  src={"static/listening.png"}
                  alt="d"
                />
              )}

              {!isRecording && verseDetected && (
                <img className={styles.menu} src={"static/stop.png"} alt="d" />
              )}

              {!isRecording && !verseDetected && (
                <img className={styles.menu} src={"static/start.png"} alt="d" />
              )}
            </h3>

            <p>Transcribing and detecting Bible quotations in real time. </p>

            <div
              onClick={handleToggleRecording}
              // className={styles.controlbutton}
              className={`${styles.controlbutton} ${
                isRecording ? styles.controlbuttonIsactive : ""
              }`}
            >
              <p>
                {" "}
                <span>
                  {isRecording && (
                    <img
                      className={styles.menu}
                      src={"static/micoff.png"}
                      alt="d"
                    />
                  )}

                  {!isRecording && (
                    <img
                      className={styles.menu}
                      src={"static/micfill.png"}
                      alt="d"
                    />
                  )}
                </span>{" "}
                {isRecording ? "Stop Listening" : " "}
                {!isRecording && !verseDetected ? "Start Listening" : " "}
                {!isRecording && verseDetected ? "Continue Listening" : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
