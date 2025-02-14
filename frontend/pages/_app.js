import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main className="main">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
