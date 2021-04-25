import Match from "./Match";
import matches from "../utils/matches";

export default function Round() {
  return (
    <div className="flex justify-center lg:justify-start pt-8 lg:pt-0 lg:ml-4"
      style={{ marginTop: '2px' }}>
      <div className="w-full max-w-xs min-w-72 sm:min-w-80 relative">
        <div className="flex items-center justify-between border-b-3
        border-gray-350 h-9">
          <img src="/images/left_arrow.svg"
            height="auto"
            width="auto"
            className="px-2 cursor-pointer transition duration-100 transform
          hover:scale-125"
          />
          <h2>RODADA 4</h2>
          <img src="/images/right_arrow.svg"
            height="auto"
            width="auto"
            className="px-2 cursor-pointer transition duration-100 transform
          hover:scale-125"
          />
        </div>
        <div className="flex flex-col w-full max-w-xs min-w-72 sm:min-w-80
        overflow-auto scrollbar-hide max-h-96">
          {Object.entries(matches).map(([key, { date, time, location, home,
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
        <div className="absolute bottom-0 bg-gradient-to-t
        from-gray-200 h-6 w-full"
        />
      </div>
    </div>
  )
}
