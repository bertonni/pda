import Head from "next/head";
import NavBar from "../../components/NavBar";
import TeamHeader from "../../components/TeamHeader";
import TeamTable from "../../components/TeamTable";

import allPlayers from '../../utils/players.json';

export default function Juventus() {
  
  const teamPlayersAllData = [];
  const playersData = [];
  const headers = ['#', 'Peladeiro', 'Posição', 'Gols', 'Assist'];

  Object.entries(allPlayers).map((player) => {
    if (player[1].team === "Juventus") {
      teamPlayersAllData.push(player[1]);
    }
  });

  teamPlayersAllData.map((player, index) => {
    playersData.push([]);
    playersData[index].push(player.number, player.name, player.position, player.goals, player.assists);
  });

  return (
    <div>
      <Head>
        <title>Juventus</title>
      </Head>
      <NavBar page={'clubs'} club={'juventus'} />
      <div className="w-full">
        <TeamHeader
          club="Juventus"
          captain="Pedro Henrique"
        />
        <h1 className="px-3 sm:px-10 md:px-20 text-xl sm:text-2xl md:text-3xl
        text-gray-550 pt-3 sm:pt-0">Peladeiros</h1>
        <TeamTable
          headers={headers}
          data={playersData}
          players={teamPlayersAllData}
        />
      </div>
    </div>
  )
}
