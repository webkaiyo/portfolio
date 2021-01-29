import Head from 'next/head'

import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Meu portfólio - Caio Alexandre</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
