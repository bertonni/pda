import Match from "./Match";
import matches from '../utils/matches';
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

export default function Round() {
  const allMatches = matches;
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
    <div className="flex justify-center lg:justify-start pt-8 lg:pt-0 lg:ml-4"
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
        overflow-auto scrollbar-hide max-h-96">
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
  )
}
