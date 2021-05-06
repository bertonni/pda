export default function MatchDetailHeader({ match }) {
  let bgHome, bgAway;
  
  if (match.home == "Juventus" || match.home == "Juventus_inverted") bgHome = 'bg-black';
  else if (match.home == "Inter") bgHome = 'bg-inter-blue';
  else if (match.home == "Roma") bgHome = 'bg-roma-red';
  else bgHome = 'bg-milan-red';
  
  if (match.away == "Juventus" || match.away == "Juventus_inverted") bgAway = 'bg-black';
  else if (match.away == "Inter") bgAway = 'bg-inter-blue';
  else if (match.away == "Roma") bgAway = 'bg-roma-red';
  else bgAway = 'bg-milan-red';

  if (match.home === "Juventus") match.home = 'Juventus_inverted';
  if (match.away === "Juventus") match.away = 'Juventus_inverted';
  
  return (
    <div className="flex flex-col items-center">
      <div className="min-h-14 flex flex-col items-center justify-center">
        <span className="font-semibold text-white ">{match.location}</span>
        <span className="font-semibold text-white text-sm">{match.date} - {match.time}</span>
      </div>
      <div
        className="w-full flex item-center justify-around
        xs:justify-evenly min-h-14 max-w-2xl"
      >
        <div className={`flex flex-col items-center ${bgHome} p-3`}>
          <img src={`/images/${match.home}.svg`}
            className="h-16 w-16 sm:h-20 sm:w-20"
          />
          <span className="font-roboto uppercase font-semibold text-white text-2xl">
            {match.home.substr(0, 3)}
          </span>
        </div>
        <div className="flex items-center justify-center flex-grow">
          <span className="font-roboto text-white text-4xl sm:text-6xl min-w-3.5">
            {match.homeScore == '' ? '-' : match.homeScore}
          </span>
          <span className="font-roboto text-white  sm:text-2xl px-3"> x </span>
          <span className="font-roboto text-white text-4xl sm:text-6xl min-w-3.5">
            {match.awayScore == '' ? '-' : match.awayScore}
          </span>
        </div>
        <div className={`flex items-center flex-col ${bgAway} p-3`}>
          <img src={`/images/${match.away}.svg`}
            className="h-16 w-16 sm:h-20 sm:w-20"
          />
          <span className="font-roboto uppercase font-semibold text-white text-2xl">
            {match.away.substr(0, 3)}
          </span>
        </div>
      </div>
    </div>
  )
}
