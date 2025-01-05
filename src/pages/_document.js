import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="shortcut icon" href="/ece_ascii.svg" />
          <link rel="apple-touch-icon" sizes="180x180" href="/ece_ascii.svg" />
          <meta name="description" content="A webring for ECE students at the University of Waterloo." />
          
          <meta property="og:url" content="https://ece.engineering" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="ECE Webring" />
          <meta property="og:description" content="A webring for ECE students at the University of Waterloo." />
          <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/86e03082-464d-435e-9a70-a057eeb86fed.png?token=umG5hF3uTuFTWCCxiUe_1t-u_MQ6XTuJxTIaRNYCsvk&height=676&width=1200&expires=33272041677" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="ece.engineering" />
          <meta property="twitter:url" content="https://ece.engineering" />
          <meta name="twitter:title" content="ECE Webring" />
          <meta name="twitter:description" content="A webring for ECE students at the University of Waterloo." />
          <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/86e03082-464d-435e-9a70-a057eeb86fed.png?token=umG5hF3uTuFTWCCxiUe_1t-u_MQ6XTuJxTIaRNYCsvk&height=676&width=1200&expires=33272041677" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
