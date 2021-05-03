import { useState } from 'react';
import allPlayers from '../utils/players.json';

export default function MatchLineup({ home, away }) {

  const homeTeamPlayers = []
  const awayTeamPlayers = []

  const [homeIsActive, setHomeIsActive] = useState(true);
  const [awayIsActive, setAwayIsActive] = useState(false);

  const homeActive = !homeIsActive ? 'opacity-60' : '';
  const awayActive = !awayIsActive ? 'opacity-60' : '';

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
  home = home == "Juventus" ? "Juventus_inverted" : home;
  
  if (home == "Juventus_inverted") bgHome = 'bg-black';
  else if (home == "Inter") bgHome = 'bg-inter-blue';
  else if (home == "Roma") bgHome = 'bg-roma-red';
  else bgHome = 'bg-milan-red';
  
  if (away == "Juventus") bgAway = 'bg-black';
  else if (away == "Inter") bgAway = 'bg-inter-blue';
  else if (away == "Roma") bgAway = 'bg-roma-red';
  else bgAway = 'bg-milan-red';

  return (
    <div className="mt-4">
      <div className="flex items-center justify-center">
        <div className={`flex items-center justify-start mr-px py-2 
          pl-4 w-full ${bgHome} ${homeActive} cursor-pointer md:hidden`}
          onClick={() => { handleClick('home') }}
        >
          <img src={`/images/${home}.svg`} 
            height="auto"
            width="auto"
            className="h-10 w-10"
          />
          <span className="text-white">
            {home = home == "Juventus_inverted" ? "Juventus" : home}
          </span>
        </div>
        <div className={`flex items-center justify-end ml-px py-2 
          pr-4 w-full ${bgAway} ${awayActive} cursor-pointer md:hidden`}
          onClick={() => { handleClick('away') }}
        >
          <span className="text-white">
            {away}
          </span>
          <img src={`/images/${away == "Juventus" ? "Juventus_inverted" : away}.svg`} 
            height="auto"
            width="auto"
            className="h-10 w-10"
          />
        </div>
      </div>
    </div>
  )
}
