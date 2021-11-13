import '../styles/globals.css';
import Head from 'next/head';
import AuthProvider from '../contexts/AuthContext';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('light');
  
  useEffect(() => {
    let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (matched) setMode('dark');
    else setMode('light');
  }, []);
  
  return <>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="shortcut icon" href="favicon/favicon.ico" />
    </Head>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </>
}

export default MyApp
