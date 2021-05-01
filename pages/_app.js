import '../styles/globals.css';
import Head from 'next/head';
// import AuthProvider from '../contexts/AuthContext';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </Head>
    {/* <AuthProvider> */}
    <Component {...pageProps} />
    {/* </AuthProvider> */}
  </>
}

export default MyApp
