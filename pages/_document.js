import Document, { Html, Head, Main, NextScript } from "next/document";
class Site extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/logo.svg" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#000" />
          <meta
            name="google-site-verification"
            content="jGYghdq3AQdS8dNTBrHS4r729QN_u5coQPjY9SeiYcs"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Site;
