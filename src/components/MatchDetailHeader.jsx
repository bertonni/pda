export default function MatchDetailHeader({ match }) {
  const { home, away, location, date, time, homeScore, awayScore } = match;

  let bgHome, bgAway, homeImage, awayImage;
  
  if (home == "Juventus") bgHome = 'bg-black';
  else if (home == "Inter") bgHome = 'bg-inter-blue';
  else if (home == "Roma") bgHome = 'bg-roma-red';
  else bgHome = 'bg-milan-red';
  
  if (away == "Juventus") bgAway = 'bg-black';
  else if (away == "Inter") bgAway = 'bg-inter-blue';
  else if (away == "Roma") bgAway = 'bg-roma-red';
  else bgAway = 'bg-milan-red';

  homeImage = (home === "Juventus") ? 'Juventus_inverted' : home;
  awayImage = (away === "Juventus") ? 'Juventus_inverted' : away;
  
  return (
    <div className="flex flex-col items-center">
      <div className="min-h-14 flex flex-col items-center justify-center">
        <span className="font-semibold text-white ">{location}</span>
        <span className="font-semibold text-white text-sm">{date} - {time}</span>
      </div>
      <div
        className="w-full flex item-center justify-around
        xs:justify-evenly min-h-14 max-w-2xl"
      >
        <div className={`flex flex-col items-center ${bgHome} p-3`}>
          <img src={`/images/${homeImage}.svg`}
            className="h-16 w-16 sm:h-20 sm:w-20"
          />
          <span className="font-roboto uppercase font-semibold text-white text-2xl">
            {home.substr(0, 3)}
          </span>
        </div>
        <div className="flex items-center justify-center flex-grow">
          <span className="font-roboto text-white text-4xl sm:text-6xl min-w-3.5">
            {homeScore == '' ? '-' : homeScore}
          </span>
          <span className="font-roboto text-white  sm:text-2xl px-3"> x </span>
          <span className="font-roboto text-white text-4xl sm:text-6xl min-w-3.5">
            {awayScore == '' ? '-' : awayScore}
          </span>
        </div>
        <div className={`flex items-center flex-col ${bgAway} p-3`}>
          <img src={`/images/${awayImage}.svg`}
            className="h-16 w-16 sm:h-20 sm:w-20"
          />
          <span className="font-roboto uppercase font-semibold text-white text-2xl">
            {away.substr(0, 3)}
          </span>
        </div>
      </div>
    </div>
  )
}
