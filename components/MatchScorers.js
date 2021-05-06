export default function MatchScorers({ homeScorers, awayScorers }) {
  const hasNoScore = homeScorers.length === 0 && awayScorers.length === 0;

  return (
    <>
      {!hasNoScore &&
      <div className="flex mt-4 items-center justify-center bg-blue-450 opacity-90 py-2 
        w-full max-w-2xl mx-auto min-h-16 sm:min-h-22">
        <div className="flex w-full">
          <div className="w-1/2 flex flex-col relative">
            <ul>
              {homeScorers.map((scorer, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-end items-center">
                    <span className="mr-2 text-white text-sm sm:text-base">{scorer}</span>
                    <img
                      src="/images/white_ball.svg"
                      height="auto"
                      width="auto"
                      className="h-3 w-3 mr-2" />
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="w-1/2 flex flex-col">
            <ul>
              {awayScorers.map((scorer, index) => {
                return (
                  <li
                    key={index + 10000}
                    className="flex items-center">
                    <img
                      src="/images/white_ball.svg"
                      height="auto"
                      width="auto"
                      className="h-3 w-3 ml-2"
                    />
                    <span className="ml-2 text-white text-sm sm:text-base">{scorer}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>}
      {hasNoScore &&
        <div className="mt-10 py-2 w-full" />
      }
    </>
  )
}
