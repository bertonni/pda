import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Match() {

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Detalhes</title>
      </Head>
      <NavBar page={'leaderboard'} />
      <div className="w-full flex-grow">
        <div className="flex flex-col w-full pt-4 sm:px-2">
          <h1 className="px-2 sm:px-10 md:px-20 text-xl sm:text-2xl text-gray-550">Match</h1>
        </div>
      </div>
      <Footer />
    </div>
  )
}


export default Match;