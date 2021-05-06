export default function Lineup({ team, formation, players }) {
  let defenders = [];
  let midfielders = [];
  let strikers = [];

  const [def, mid, str] = formation.split('-');

  let teamImg = team == "Juventus" ? "Juventus_inverted" : team;

  let bgTeam;

  if (team == "Juventus") bgTeam = 'bg-black';
  else if (team == "Inter") bgTeam = 'bg-inter-blue';
  else if (team == "Roma") bgTeam = 'bg-roma-red';
  else bgTeam = 'bg-milan-red';

  players.map((player) => {
    if (player.position === "Zagueiro") defenders.push(player);
    if (player.position === "Meio") midfielders.push(player);
    if (player.position === "Atacante") strikers.push(player);
  })

  return (
    <div className="flex items-center justify-center min-h-full min-w-72 w-full">
      <div className="h-full w-full sm:w-10/12 flex flex-col items-center 
        relative border-b-2 border-gray-150 mb-6 bg-white">
        <div 
          className={`md:flex md:items-center md:justify-center py-1 w-full 
          ${bgTeam} hidden mb-6`}
        >
          <img src={`/images/${teamImg}.svg`}
            height="auto"
            width="auto"
            className="h-10 w-10"
          />
          <span className="text-white ml-4">
            {formation}
          </span>
        </div>

        {/* Strikers */}
        <div className="w-full flex justify-evenly mb-8">
          {strikers.map((striker, index) => {
            if (index < str) {
              return (
                <div
                  key={index + Math.ceil(Math.random() * 10125) + Math.ceil(Math.random() * 100)}
                  className="flex flex-col items-center justify-center min-w-24">
                  <img
                    key={index + Math.ceil(Math.random() * 1000) * Math.ceil(Math.random() * 100)}
                    src={`/images/profilePictures/${team.toLowerCase()}/${striker.number}.jpg`}
                    height="auto"
                    width="auto"
                    className="h-12 w-12 rounded-full"
                  />
                  <h2
                    key={Math.ceil(Math.random() * 100) * Math.ceil(Math.random() * 1001)}
                  >
                    {striker.name}
                  </h2>
                </div>
              )
            }
          })}
        </div>

        {/* Midfielders */}
        <div className="w-full flex justify-between xs:justify-center mb-8">
          {midfielders.map((midfielder, index) => {
            if (index < mid) {
              return (
                <div
                  key={index + Math.ceil(Math.random() * 10125) + Math.ceil(Math.random() * 100)}
                  className="flex flex-col items-center justify-center min-w-24">
                  <img
                    key={index + Math.ceil(Math.random() * 100) * Math.ceil(Math.random() * 100)}
                    src={`/images/profilePictures/${team.toLowerCase()}/${midfielder.number}.jpg`}
                    height="auto"
                    width="auto"
                    className="h-12 w-12 rounded-full"
                  />
                  <h2
                    key={Math.ceil(Math.random() * 100) * Math.ceil(Math.random() * 1001)}
                  >
                    {midfielder.name}
                  </h2>
                </div>
              )
            }
          })}
        </div>

        {/* Defenders */}
        <div className="w-full flex justify-center xs:justify-evenly mb-8">
          {defenders.map((defender, index) => {
            if (index < def) {
              return (
                <div
                  key={index + Math.ceil(Math.random() * 10025) + Math.ceil(Math.random() * 100)}
                  className="flex flex-col items-center justify-center min-w-24">
                  <img
                    key={index + Math.ceil(Math.random() * 100) * Math.ceil(Math.random() * 100)}
                    src={`/images/profilePictures/${team.toLowerCase()}/${defender.number}.jpg`}
                    height="auto"
                    width="auto"
                    className="h-12 w-12 rounded-full"
                  />
                  <h2
                    key={Math.ceil(Math.random() * 100) * Math.ceil(Math.random() * 1001)}
                  >
                    {defender.name}
                  </h2>
                </div>
              )
            }
          })}
        </div>

        {/* GoalKeeper */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={`/images/profilePictures/${team.toLowerCase()}/${players[0].number}.jpg`}
            height="auto"
            width="auto"
            className="h-12 w-12 rounded-full"
          />
          <h2
            key={Math.ceil(Math.random() * 100) * Math.ceil(Math.random() * 1001)}
          >
            {players[0].name}
          </h2>
        </div>
        <div className="flex justify-center absolute bottom-0">
          <svg width="235" height="113" viewBox="0 0 322 204" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M256.504 204V123.955H64.6689V204" stroke="#D4D6DE" strokeWidth="2" />
            <path d="M160.5 32L108.761 32C120.276 13.1996 139.187 1 160.5 1C181.813 1 200.724 13.1996 212.239 32L160.5 32Z" stroke="#D4D6DE" strokeWidth="2" />
            <path d="M321 204V32H1V204" stroke="#D4D6DE" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  )
}
