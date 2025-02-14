import "../styles/globals.css";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <main className="main">
      {/* <motion.div
        initial="initial"
        animate="animate"
        // this is a simple animation that fades in the page. You can do all kind of fancy stuff here
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      > */}
      <Component {...pageProps} />
      {/* </motion.div> */}
    </main>
  );
}

export default MyApp;
