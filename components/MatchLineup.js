import { useEffect, useRef, useState } from 'react';
import allPlayers from '../utils/players.json';
import clubs from '../utils/clubs';
import Lineup from './Lineup';

function useIsMountedRef() {
  const isMountedRef = useRef(null);

  useEffect(() => {
    isMountedRef.current = true;
    return () => isMountedRef.current = false;
  });
  return isMountedRef;
}

export default function MatchLineup({ home, away }) {

  const [homeIsActive, setHomeIsActive] = useState(true);
  const [awayIsActive, setAwayIsActive] = useState(false);

  const homeActive = !homeIsActive ? 'opacity-60' : '';
  const awayActive = !awayIsActive ? 'opacity-60' : '';
  const homeTeamPlayers = [];
  const awayTeamPlayers = [];

  const isMountedRef = useIsMountedRef();

  let homeImg = home == "Juventus" ? "Juventus_inverted" : home;
  let awayImg = away == "Juventus" ? "Juventus_inverted" : away;
  let homeFormation;
  let awayFormation;

  let mql = window.matchMedia('(min-width: 768px)');

  mql.addEventListener("change", (e) => {
    if (e.matches) {
      setHomeIsActive(true);
      setAwayIsActive(true);
    } else {
      setAwayIsActive(false);
    }
  })

  Object.entries(clubs).map(([key, { formation }]) => {
    if (key === home.toLowerCase()) { homeFormation = formation; return; }
  });

  Object.entries(clubs).map(([key, { formation }]) => {
    if (key === away.toLowerCase()) { awayFormation = formation; return; }
  });

  Object.entries(allPlayers).map((player) => {
    if (player[1].team.toLowerCase() === home.toLowerCase()) {
      homeTeamPlayers.push(player[1]);
    }
    if (player[1].team.toLowerCase() === away.toLowerCase()) {
      awayTeamPlayers.push(player[1]);
    }
  });

  function handleClick(value) {
    if (value == 'home') {
      setHomeIsActive(true);
      setAwayIsActive(false);
    }
    if (value == 'away') {
      setAwayIsActive(true);
      setHomeIsActive(false);
    }
  }

  let bgHome, bgAway;

  if (home == "Juventus") bgHome = 'bg-black';
  else if (home == "Inter") bgHome = 'bg-inter-blue';
  else if (home == "Roma") bgHome = 'bg-roma-red';
  else bgHome = 'bg-milan-red';

  if (away == "Juventus") bgAway = 'bg-black';
  else if (away == "Inter") bgAway = 'bg-inter-blue';
  else if (away == "Roma") bgAway = 'bg-roma-red';
  else bgAway = 'bg-milan-red';

  return (
    <div className="mt-4">
      <div className="flex items-center justify-center md:hidden">
        <div className={`flex items-center justify-start mr-px py-1 
          pl-2 w-full ${bgHome} ${homeActive} cursor-pointer md:hidden`}
          onClick={() => { handleClick('home') }}
        >
          <img src={`/images/${homeImg}.svg`}
            height="auto"
            width="auto"
            className="h-10 w-10"
          />
          <span className="text-white ml-2">
            {homeFormation}
          </span>
        </div>
        <div className={`flex items-center justify-end ml-px py-1 
          pr-2 w-full ${bgAway} ${awayActive} cursor-pointer md:hidden`}
          onClick={() => { handleClick('away') }}
        >
          <span className="text-white mr-2">
            {awayFormation}
          </span>
          <img src={`/images/${awayImg}.svg`}
            height="auto"
            width="auto"
            className="h-10 w-10"
          />
        </div>
      </div>
      <div className="w-full pt-4 min-h-full min-w-72 flex items-center justify-evenly">
        {
          homeIsActive && isMountedRef &&
          <Lineup
            team={home}
            formation={homeFormation}
            players={homeTeamPlayers}
          />
        }
        {
          awayIsActive && isMountedRef &&
          <Lineup
            team={away}
            formation={awayFormation}
            players={awayTeamPlayers}
          />
        }
      </div>
    </div>
  )
}
