import NavBar from '../components/NavBar';
import Head from 'next/head';
import Footer from '../components/Footer';
import HomeInfo from '../components/HomeInfo';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>PDA</title>
        <link rel="shortcut icon" href="caminhodoarquivo/favicon.ico" />
      </Head>
      <NavBar page={'home'} />
      <div className="flex-grow flex flex-col">
        <HomeInfo />
      </div>
      <Footer />
    </div>
  )
}
