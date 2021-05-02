import Head from "next/head";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import TeamHeader from "../../components/TeamHeader";
import TeamTable from "../../components/TeamTable";

import allPlayers from '../../utils/players.json';

export default function Milan() {

  const teamPlayersAllData = [];
  const playersData = [];
  const headers = ['#', 'Peladeiro', 'Posição', 'Gols', 'Assist'];

  Object.entries(allPlayers).map((player) => {
    if (player[1].team === "Milan") {
      teamPlayersAllData.push(player[1]);
    }
  });

  teamPlayersAllData.map((player, index) => {
    playersData.push([]);
    playersData[index].push(player.number, player.name, player.position, player.goals, player.assists);
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Milan</title>
      </Head>
      <NavBar page={'clubs'} club={'milan'} />
      <div className="w-full flex-grow">
        <TeamHeader
          club="Milan"
          captain="Bança"
          wins={5}
          draws={3}
          loses={7}
        />
        <h1 className="px-3 sm:px-10 md:px-20 text-xl sm:text-2xl md:text-3xl
        text-gray-550 pt-3 sm:pt-0">Peladeiros</h1>
        <TeamTable
          headers={headers}
          data={playersData}
          players={teamPlayersAllData}
        />
      </div>
      <Footer />
    </div>
  )
}
