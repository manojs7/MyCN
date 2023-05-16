import Head from "next/head";
import React from "react";
import { Helmet } from "react-helmet";

class Google extends React.Component {
    render() {
        return (
            <div className="application">
                <Helmet>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
                        }}
                    />
                    <noscript>{
                        `<iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        ></iframe>`}
                    </noscript>
                    {/* End Google Tag Manager */}

                    {/* Global site remarketing tag - Google Ads */}
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"
                    ></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-XXXXXXXXX');
            `,
                        }}
                    />
                    {/* End Global site remarketing tag - Google Ads */}

                    {/* Global site tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X"
                    ></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-XXXXXXXXX-X');
            `,
                        }}
                    />
                    {/* End Global site tag (gtag.js) - Google Analytics */}

                    {/* Facebook Pixel Code */}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'XXXXXXXXXXXXXXX');
              fbq('track', 'PageView');
            `,
                        }}
                    />
                    <noscript>{
                        `<img
                            height="1"
                            width="1"
                            style={{ display: 'none' }}
                            src="https://www.facebook.com/tr?id=XXXXXXXXXXXXXXX&ev=PageView&noscript=1"
                        />`}
                    </noscript>

                    {/* Hotjar Tracking Code for https://www.caterninja.com */}
                    <script
                        async
                        dangerouslySetInnerHTML={{
                            __html: `(function(h, o, t, j, a, r) {
          h.hj = h.hj || function() {
            (h.hj.q = h.hj.q || []).push(arguments)
          };
          h._hjSettings = {
            hjid: 2072324,
            hjsv: 6
          };
          a = o.getElementsByTagName('head')[0];
          r = o.createElement('script');
          r.async = 1;
          r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
          a.appendChild(r);
        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');`,
                        }}
                    />,
                    <noscript>{
                        `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MHL8B4X"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe>`}
                    </noscript>
                </Helmet>
            </div>
        );
    }
};

export default Google