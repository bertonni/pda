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
      <NavBar page={'match'} club={'details'} />
      <div className="w-full flex-grow">
        <div className="flex flex-col w-full relative">
          {/* <div className="w-full absolute grid grid-cols-2 h-full -mt-12 z-100-">
            <div className="h-screen bg-rom-header" />
            <div className="h-screen bg-rom-header" />
          </div> */}
          {
            match &&
            <>
              <div className="flex flex-col">
                <div className="w-full flex item-center justify-around xs:justify-evenly min-h-14 mt-4">
                  <div className="flex flex-col items-center">
                    <img src={`/images/${match.home}.svg`}
                      className="h-16 w-16 sm:h-20 sm:w-20"
                    />
                  </div>
                  <div className="flex items-center mt-3 mb-3">
                    <span className="font-roboto text-4xl ml-3 min-w-3.5">
                      {match.homeScore == '' ? '-' : match.homeScore}
                    </span>
                    <span className="font-roboto mx-3"> x </span>
                    <span className="font-roboto text-4xl mr-3 min-w-3.5">
                      {match.visitorScore == '' ? '-' : match.visitorScore}
                    </span>
                  </div>
                  <div className="flex items-center flex-col">
                    <img src={`/images/${match.visitor}.svg`}
                      className="h-16 w-16 sm:h-20 sm:w-20"
                    />
                  </div>
                </div>
                <div className="flex pt-2">
                  <div className="w-1/2 flex flex-col">
                    <ul>
                      {match.homeScorers.map((scorer, index) => {
                        return (
                          <li
                            key={index}
                            className="flex justify-end items-center">
                            <span className="mr-2 text-sm sm:text-base">{scorer}</span>
                            <img
                              src="/images/ball.svg"
                              height="auto"
                              width="auto"
                              className="h-4 w-4 mr-1" />
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  <div className="w-1/2 flex flex-col">
                    <ul>
                      {match.visitorScorers.map((scorer, index) => {
                        return (
                          <li
                            key={index}
                            className="flex items-center">
                            <img
                              src="/images/ball.svg"
                              height="auto"
                              width="auto"
                              className="h-4 w-4 ml-1"
                            />
                            <span className="ml-2 text-sm sm:text-base">{scorer}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </>
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}