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
    round = round < 0 ? 0 : round > allMatches.length - 1 ?
      allMatches.length - 1 : round;
    setCurrentRound(allMatches[round]);
  }

  return (
    <div className="flex justify-center lg:justify-start pt-8 lg:pt-0 lg:ml-4
    border-b-3 border-gray-300"
      style={{ marginTop: '2px' }}>
      <div className="w-full max-w-xs min-w-72 sm:min-w-80 relative">
        <div className="flex items-center justify-between border-b-3
        border-gray-350 h-9">
          <ChevronLeftIcon
            onClick={() => {handleCurrentRound(currentRound.game1.id - 1)}}
            className={`cursor-pointer hover:text-gray-400 h-8 ${first}`}
          />
          <h2>{currentRound.game1.title}</h2>
          <ChevronRightIcon
            onClick={() => {handleCurrentRound(currentRound.game1.id + 1)}}
            className={`cursor-pointer hover:text-gray-400 h-8 ${last}`}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs min-w-72 sm:min-w-80
        overflow-auto scrollbar-hide max-h-96">
          {Object.entries(currentRound).map(([key, { date, time, location, home,
          visitor, homeScore, visitorScore, status }]) => {
            return <div key={key}>
              <Match
                date={date}
                time={time}
                location={location}
                home={home}
                visitor={visitor}
                homeScore={homeScore}
                visitorScore={visitorScore}
                status={status}
              />
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
