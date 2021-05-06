import { useRouter } from "next/router"

export default function Match(props) {
  const { status, date, time, location, matchId, home, homeScore, away, awayScore } = props;
  const router = useRouter();
  const bg = status.toUpperCase() == 'EM ANDAMENTO' ? 'bg-green-100' :
  status.toUpperCase() == 'ENCERRADO' ? 'bg-gray-150' : '';
  
  const header = homeScore == '' ? location :
  `${date} - ${time} - ${location}`;
  
  let matchStatus = status.toUpperCase() == 'ABERTO' ?
  `${date} - ${time}` : status;

  return (
    <div className="flex flex-col items-center border-b border-gray-300
      min-h-25 hover:bg-gray-150 cursor-pointer group px-2"
      onClick={() => {router.push(`/match/${matchId}`)}}
    >
      <h3 className="pt-1 text-2xs md:text-xs">{header}</h3>
      <div className="w-full flex item-center justify-between min-h-14">
        <div className="flex items-center">
          <span className="font-roboto uppercase pl-1 pr-3 text-2xl">
            {home.substr(0,3)}
          </span>
          <img src={`/images/${home}.svg`}
            className="h-11 w-11 sm:h-12 sm:w-12"
          />
        </div>
        <div className="flex items-center mt-3 mb-3">
          <span className="font-roboto text-2xl mr-2 ml-3 min-w-3.5">
            {homeScore == '' ? '-' : homeScore}
          </span>
          <span className="font-roboto"> x </span>
          <span className="font-roboto text-2xl ml-2 mr-3 min-w-3.5">
            {awayScore == '' ? '-' : awayScore}
          </span>
        </div>
        <div className="flex items-center">
          <img src={`/images/${away}.svg`}
            className="h-11 w-11 sm:h-12 sm:w-12"
          />
          <span className="font-roboto uppercase pr-1 pl-3 text-2xl">
            {away.substr(0,3)}
          </span>
        </div>
      </div>
      <div className={`mb-2 rounded-full ${bg} px-3 py-1 group-hover:bg-gray-300`}>
        <p className="text-xs uppercase tracking-wider">{matchStatus}</p>
      </div>
    </div>
  )
}