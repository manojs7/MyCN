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
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {


  const [url, setUrl] = useState("");
  // const cookieParser = require("cookie-parser");
  // app.use(cookieParser());
  function getCurrentURL() {
    return window.location.href
  }

  function getCookie(name) {
    let cookieValue;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  useEffect(() => {

    const x = getCurrentURL();
    if (getCookie("f_url")) {
      sessionStorage.setItem("first_url2", getCookie("f_url"));
    }
    else {
      if (sessionStorage.getItem("first_url2") === null) {
        const catch_url = sessionStorage.setItem("first_url2", x);
        setUrl(catch_url)
      } else {
        let url_value = sessionStorage.getItem("first_url2");
        setUrl(url_value)
      }
    }


  }, [])

  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" ></meta>
        <title>Caterninja provides online catering services</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '630003897160862');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=630003897160862&ev=PageView&noscript=1" />
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3418457,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LTMMZTYB0W"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-LTMMZTYB0W');`
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3PQ8CP4BNB"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-3PQ8CP4BNB');`
          }}
        />

        <script dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MHL8B4X');`
          }}>
          </script>
      </Head>

      <body>
      <noscript>{
                        `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MHL8B4X"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe>`}
                    </noscript>
      </body>
      <Script id="bolt" src="https://checkout-static.citruspay.com/bolt/run/bolt.min.js" bolt-color="e34524" bolt-logo="http://boltiswatching.com/wp-content/uploads/2015/09/Bolt-Logo-e14421724859591.png" />

      <Script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></Script>
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
