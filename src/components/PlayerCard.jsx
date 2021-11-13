export default function PlayerCard({ currPlayer }) {
  const {
    team,
    number,
    name,
    position,
    age,
    height,
    foot,
    goals,
    assists,
    totalCards
  } = currPlayer;
  
  let playerTeam = team.toLowerCase();
  return (
    <div className="p-2 md:p-4 w-full h-4/5 relative">
      <div className="flex">
        <img
          className="w-2/5 h-auto"
          src={`/images/profilePictures/${playerTeam}/${number}.jpg`}
        />
        <div className="flex flex-col relative pl-3">
          <section className="border-b border-gray-400 w-44 sm:w-60 md:w-64">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl">
              {name}
            </h2>
            <span className="my-0 text-sm sm:text-base">
              {position}
            </span>
          </section>
          <section className="flex flex-col py-2 border-b border-gray-400">
            <div className="flex justify-start">
              <span className="text-xs sm:text-base w-4/6">Idade:</span>
              <span className="text-xs sm:text-base font-light text-right">
                {age}
              </span>
            </div>
            <div className="flex justify-start">
              <span className="text-xs sm:text-base w-4/6">Altura:</span>
              <span className="text-xs sm:text-base font-light text-right">
                {height}
              </span>
            </div>
            <div className="flex justify-start">
              <span className="text-xs sm:text-base w-4/6">Pé dominante:</span>
              <span className="text-xs sm:text-base font-light text-right">
                {foot}
              </span>
            </div>
          </section>
          <section className="flex flex-col py-2 border-b border-gray-400">
            <div className="flex justify-start">
              <span className="text-xs sm:text-base w-4/6">Gols:</span>
              <span className="text-xs sm:text-base font-light text-right">
                {goals}
              </span>
            </div>
            <div className="flex justify-start">
              <span className="text-xs sm:text-base w-4/6">Assistências:</span>
              <span className="text-xs sm:text-base font-light text-right">
                {assists}
              </span>
            </div>
            <div className="flex justify-start">
              <span className="text-xs sm:text-base w-4/6">Cartões Acum.:</span>
              <span className="text-xs sm:text-base font-light text-right">
                {totalCards}
              </span>
            </div>
          </section>
        </div>
        <span className="absolute top-2 right-2 text-3xl sm:text-4xl
        md:text-5xl">{number}</span>
      </div>
    </div>
  )
}
