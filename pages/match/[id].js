import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import matches from "../../utils/matches";

export default function Details() {

  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;

  let match;

  matches.map((round) => {
    Object.entries(round).map(([key, matchData]) => {
      if (matchData.matchId === id) {
        match = matchData;
        return
      }
    })
  })

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Detalhes</title>
      </Head>
      <NavBar page={'leaderboard'} />
      <div className="w-full flex-grow">
        <div className="flex flex-col w-full pt-2 px-2 sm:px-10 md:px-20">
          <h1 className="sm:px-10 md:px-20 text-xl sm:text-2xl text-gray-550">
            Detalhes sobre a partida:
          </h1>
          {
            match &&
            <>
              <h1>Data: {match.date} - {match.time}</h1>
              <h1>Local: {match.location}</h1>
              <h1>Mandante: {match.home}</h1>
              <h1>Visitante: {match.visitor}</h1>
              <h1>Placar: {match.homeScore} x {match.visitorScore}</h1>
            </>
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}