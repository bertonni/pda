import Head from "next/head";
import { useRouter } from "next/router";
import { useLayoutEffect, useState } from "react";
import Footer from "../../components/Footer";
import MatchDetailHeader from "../../components/MatchDetailHeader";
import MatchLineup from "../../components/MatchLineup";
import MatchMoreDetails from "../../components/MatchMoreDetails";
import MatchScorers from "../../components/MatchScorers";
import NavBar from "../../components/NavBar";
import matches from "../../utils/matches";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default function Details() {

  const router = useRouter();
  const { id } = router.query;
  const [showLineups, setShowLineups] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showBothLinups, setShowBothLinups] = useState(false);
  const [width] = useWindowSize();

  if (!id) return null;

  function handleClick(value) {
    if (value === 'lineup') {
      setShowLineups(!showLineups);
      setShowDetails(false);
    }
    if (value === 'details') {
      setShowDetails(!showDetails);
      setShowLineups(false);
    }
    return;
  }

  if (width >= 768) {
    
  }

  let match;
  matches.map((round) => {
    Object.entries(round).map(([key, matchData]) => {
      if (matchData.matchId === id) {
        match = { ...matchData };
        return
      }
    })
  })

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title> Detalhes </title>
      </Head>
      <NavBar page={'match'}
        club={'details'}
      />
      <div className="w-full flex-grow" >
        <div className="flex flex-col w-full" >
          {
          match &&
          <>
            <div className="flex flex-col bg-field bg-no-repeat bg-cover relative z-10" >
              <div className={`h-full w-full bg-black absolute opacity-30 top-0 left-0 z-10-`} />
              <MatchDetailHeader
                match={match}
              />
              <MatchScorers
                homeScorers={match.homeScorers}
                awayScorers={match.awayScorers}
              />
              <MatchMoreDetails
                handle={handleClick}
                lineups={showLineups}
                details={showDetails}
              />
            </div>
            {
              showLineups &&

              <MatchLineup
                home={match.home}
                away={match.away}
              />
            }
            {
              showDetails &&
              <div>
                <h1> Match Details </h1>
              </div>
            } </>
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}