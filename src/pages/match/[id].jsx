import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import MatchDetailHeader from "../../components/MatchDetailHeader";
import MatchDetails from "../../components/MatchDetails";
import MatchLineup from "../../components/MatchLineup";
import MatchMoreDetails from "../../components/MatchMoreDetails";
import MatchScorers from "../../components/MatchScorers";
import NavBar from "../../components/NavBar";
import matches from "../../utils/matches";

export default function Details() {

  const router = useRouter();
  const { id } = router.query;
  const [showLineups, setShowLineups] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  if (!id) return null;

  function handleClick(value) {
    if (value === 'lineup') {
      setShowDetails(false);
      setShowLineups(true);
    }
    if (value === 'details') {
      setShowLineups(false);
      setShowDetails(true);
    }
    return;
  }

  let match;
  matches.map((round) => {
    Object.entries(round).map(([key, matchData]) => {
      if (matchData.matchId === id) {
        match = { ...matchData };
        return;
      }
    })
  })

  return (
    <Layout title="Detalhes" page="match" club="details">
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
              <MatchDetails />
            }
          </>
        }
      </div>
    </Layout>
  );
}