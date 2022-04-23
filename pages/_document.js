import Document, { Head, Html, Main, NextScript } from 'next/document'
import { InitializeColorMode } from 'theme-ui'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js"></script>
          <meta
            name='description'
            content='Hack Club is an initiative for students by students. Hack Club is a place that lets you tinker, break, and rebuild. After all, you can not make an omelet without breaking a few eggs '
          />
          <meta
            property='og:title'
            content="Hack Club SVIT"
          />
          <meta property='og:image' content='/logo.png' />

          <meta
            property='og:description'
            content='hack Club is an initiative for students by students. Hack Club is a place that lets you tinker, break, and rebuild. After all, you can not make an omelet without breaking a few eggs '
          />
          <meta
            property='og:site_name'
            content='hackclubsvit.co'
            key='ogsitename'
          />
          <link rel='shortcut icon' href='/logo.png' type='image/x-icon' />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
