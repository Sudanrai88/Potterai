import { Html, Head, Main, NextScript } from 'next/document'
import emailjs from '@emailjs/browser'

export default function Document() {
  return (
    <Html lang="en">
      <Head> 
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk&display=swap" rel="stylesheet"/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
