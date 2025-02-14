import "aos/dist/aos.css";

import Head from "next/head";

import styles from "./skills.module.css";
import { useState, useRef, useEffect } from "react";
import globalSocket from "../components/Socket";

function App() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef(null);

  const [msg, setMsg] = useState("");
  const [msgReceived, setMsgRecieved] = useState([]);
  const [socket, setSocket] = useState(null);

  const handlePost = useCallback(() => {
    socket.emit("newMessage", {
      message: msg,
      roomId: roomId,
      username,
      userId: user._id,
      chatListSocketId,
    });

    setMsg("");
  }, [msg]);

  useEffect(() => {
    setSocket(globalSocket);
  }, []);

  useEffect(() => {
    if (user && socket) {
      setUsername(user.firstName);

      // Join chatroom
      socket.auth = { username };
      socket.emit("createChannel", {
        username: username,
        userId: user._id,
        room: roomId,
        receiverId: receiverId,
        selectedItemId: selectedItemId,
      });
    }
  }, [user, username, socket]);

  useEffect(() => {
    if (socket) {
      // Join chatroom
      socket.emit("joinChannel", {
        username: username,
        channelID: roomId,
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on("newMessage", (data) => {
        setMsgRecieved([...data]);
        setStateChanged(true);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on("oldMessages", (data) => {
        setMsgRecieved([...data]);
      });
    }
  }, [socket]);

  // Function to start recording
  const startRecording = () => {
    try {
      setIsListening(true);
      // Create a new SpeechRecognition instance and configure it
      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      console.log(recognitionRef.current, "CURRENTT");

      // Event handler for speech recognition results
      recognitionRef.current.onresult = (event) => {
        console.log(event.results, "EVENNTT_RESULTS");

        const { transcript } = event.results[event.results.length - 1][0];

        // Log the recognition results and update the transcript state
        console.log(event.results, "EVENNTT_RESULTS___00");
        setTranscript(transcript);
      };

      // Start the speech recognition
      recognitionRef.current.start();
    } catch (err) {
      console.log(err, "ERRORORO");
    }
  };

  console.log(transcript, "FINALLL__TRANSCRIPT");

  // Cleanup effect when the component unmounts
  useEffect(() => {
    return () => {
      // Stop the speech recognition if it's active
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  // Function to stop recording
  const stopRecording = () => {
    if (recognitionRef.current) {
      // Stop the speech recognition and mark recording as complete
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const handleToggleRecording = () => {
    setIsListening(!isListening);
    if (!isListening) {
      startRecording();
    } else {
      stopRecording();
    }
  };

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
            <h3>John 3.16 (KJV)</h3>

            <p>
              or God so loved the world that he gave his one and only Son, that
              whoever believes in him shall not perish but have eternal life.
            </p>
          </div>

          <div className={styles.controlcontainer}>
            <img
              className={styles.menu}
              src={"static/toggleicon.png"}
              alt="d"
            />

            <h3>
              <img
                className={styles.menu}
                src={"static/startlisteningicon.png"}
                alt="d"
              />
            </h3>

            <p>Transcribing and detecting Bible quotations in real time. </p>

            <div
              onClick={handleToggleRecording}
              className={styles.controlbutton}
            >
              <p> {isListening ? "Stop Listening" : "Start Listening"} </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
