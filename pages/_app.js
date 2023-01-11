import "../styles/globals.scss";
import "../styles/home/styles.scss";
import "../styles/home/newpage.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import '@fortawesome/fontawesome-svg-core/styles.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { AppMenuProvider } from "$lib/menuContext";
import Float from "$lib/Float";
import FloatNav from "$lib/FloatNav";
import "../styles/home/specials.scss";
import "../styles/instantQuote/InstantQuote.module.scss"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cater Ninja</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AppMenuProvider>
        <Component {...pageProps} />
        <Float />
        <FloatNav/>
      </AppMenuProvider>
    </>
  );
}

export default MyApp;
