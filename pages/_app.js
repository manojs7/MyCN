import "../styles/globals.scss";
import "../styles/home/styles.scss";
import "../styles/home/newpage.scss";
import 'bootstrap/dist/css/bootstrap.css';
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
import Zoho from "$lib/bookChef/Zoho";
import Script from 'next/script'
import Google from "$lib/bookChef/Google";
import Float2 from "$lib/Float2";


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Cater Ninja</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></Script>
      <AppMenuProvider>
        <Component {...pageProps} />
        <Google />
        {/* <Zoho /> */}
        {/* <Float /> */}
        {/* <FloatNav /> */}
      </AppMenuProvider>
    </>
  );
}

export default MyApp;
