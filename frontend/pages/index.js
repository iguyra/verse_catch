import "regenerator-runtime/runtime";

import "aos/dist/aos.css";

import Head from "next/head";

import styles from "./skills.module.css";
import { useState, useRef, useEffect } from "react";
import io from "socket.io-client";

// import baseURL from "../utils/baseURL";

function App() {
  const [isRecording, setIsRecording] = useState(false);

  const socketRef = useRef(null);
  const [quote, setQuote] = useState("");
  const [verseDetected, setVerseDetected] = useState("");

  useEffect(() => {
    socketRef.current = io(process.env.NEXT_PUBLIC_BACKEND_URL);

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

  // Function to start recording
  const startRecording = () => {
    try {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      if (!SpeechRecognition) {
        console.error("Speech recognition is not supported in this browser.");
        alert(
          "Your browser does not support speech recognition. Please use Chrome or another supported browser."
        );
        return;
      }

      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;

      recognitionRef.current.onstart = function () {
        setIsRecording(true);
      };

      recognitionRef.current.onend = function () {
        setIsRecording(false);
      };

      recognitionRef.current.onresult = async function (event) {
        // const transcript = event.results[0][0].transcript;
        const { transcript } = event.results[event.results.length - 1][0];

        console.log(event.results, transcript, "VIAAA__TRANSS");

        socketRef.current.emit("audioStream", {
          transcript: transcript?.trim(),
          ref: quote?.reference?.trim() || "",
        });
      };

      recognitionRef.current.start();
    } catch (Err) {
      console.log(Err, "ERRR");
    }
  };

  // Function to stop recording
  const stopRecording = () => {
    if (recognitionRef.current) {
      // Stop the speech recognition
      recognitionRef.current.stop();

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

  return (
    <main>
      <Head>
        <title>verse catch | say the verse, get the verse</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
