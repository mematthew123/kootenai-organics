import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
     <Html lang="en">
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/canopy.jpg" />
        <link rel="apple-touch-icon" href="/canopy.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Missoula's premier organic cannabis and lifestyle brand, selling organic and sustainable cannabis products."
        />
        <meta property="og:title" content="Kootenai Organics" key="title" />
        <meta property="og:description" content=" Missoula's premier organic cannabis and lifestyle brand" />
        <meta property="og:image" content="/canopy.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kootenaiorganics.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
