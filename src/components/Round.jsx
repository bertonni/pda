import Match from "./Match";
import matches from '../utils/matches';
import { useContext, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from '@heroicons/react/solid'
import { AuthContext } from "../contexts/AuthContext";

export default function Round({ setShowAddRoundModal }) {
  const allMatches = matches;
  const { currentUser, managers } = useContext(AuthContext);
  const [currentRound, setCurrentRound] = useState(allMatches[5]);

  const first = currentRound.game1.id === 0 ?
    'text-gray-300 pointer-events-none' : '';
  const last = currentRound.game1.id === allMatches.length - 1 ? 
    'text-gray-300 pointer-events-none' : '';

  function handleCurrentRound(round) {
    if (round < 0) round = 0;
    if (round > allMatches.length - 1) round = allMatches.length - 1;
    
    setCurrentRound(allMatches[round]);
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-center lg:justify-start mb-6 pt-6 lg:pt-0 lg:ml-4 lg:mb-0"
        style={{ marginTop: '2px' }}>
        <div className="w-full max-w-xs min-w-72 sm:min-w-80 border-b-3 border-gray-350">
          <div className="flex items-center justify-between border-b-3 bg-white
          border-gray-350 h-9">
            <ChevronLeftIcon
              onClick={() => {handleCurrentRound(currentRound.game1.id - 1)}}
              className={`cursor-pointer h-8 ${first}`}
            />
            <h2>{currentRound.game1.title}</h2>
            <ChevronRightIcon
              onClick={() => {handleCurrentRound(currentRound.game1.id + 1)}}
              className={`cursor-pointer h-8 ${last}`}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs min-w-72 sm:min-w-80
          overflow-auto scrollbar-hide max-h-96 lg:max-h-120">
            {Object.entries(currentRound).map(([key, { matchId, date, time, location, home,
            away, homeScore, awayScore, status }]) => {
              return <div key={key}>
                <Match
                  date={date}
                  time={time}
                  location={location}
                  home={home}
                  away={away}
                  homeScore={homeScore}
                  awayScore={awayScore}
                  status={status}
                  matchId={matchId}
                />
              </div>
            })}
          </div>
        </div>
      </div>
      {
        currentUser && managers.includes(currentUser.email) &&
        <button className="flex items-center justify-center py-1 px-4 bg-blue-450 text-white
          rounded w-max self-center my-3 sm:hover:bg-blue-500 transition-all"
          onClick={() => setShowAddRoundModal(true)}
        >
          <PlusIcon
            className="h-9 w-9"
          />
          Adicionar Rodada
        </button>
      }
    </div>
  )
}
