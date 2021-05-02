import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import TeamHeader from "../../components/TeamHeader";
import TeamTable from "../../components/TeamTable";
import clubs from '../../utils/clubs';

import allPlayers from '../../utils/players.json';

export default function Club() {

  const router = useRouter();
  const { club } = router.query;
  
  if (!club) return null
  
  let clubExists = false;
  let clubData = {};
  const teamPlayersAllData = [];
  const playersData = [];
  const headers = ['#', 'Peladeiro', 'Posição', 'Gols', 'Assist'];

  const allTeams = Object.entries(clubs).map((item) => {
    return item[0];
  })

  if (allTeams.includes(club.toLowerCase())) {
    clubExists = true;

    switch (club) {
      case 'juventus':
        clubData = clubs.juventus;
        break;
      case 'roma':
        clubData = clubs.roma;
        break;
      case 'inter':
        clubData = clubs.inter;
        break;
      case 'milan':
        clubData = clubs.milan;
        break;
      default:
        break;
    }

    Object.entries(allPlayers).map((player) => {
      if (player[1].team.toLowerCase() === club.toLowerCase()) {
        teamPlayersAllData.push(player[1]);
      }
    });

    teamPlayersAllData.map((player, index) => {
      playersData.push([]);
      playersData[index].push(player.number, player.name, player.position,
        player.goals, player.assists);
    });
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{clubData.name}</title>
      </Head>
      <NavBar page={'clubs'} club={club} />
      {
        clubExists &&
        <div className="w-full flex-grow">
          <TeamHeader
            club={clubData.name}
            captain={clubData.captain}
            wins={clubData.wins}
            draws={clubData.draws}
            losses={clubData.losses}
          />
          <h1 className="px-3 sm:px-10 md:px-20 text-xl sm:text-2xl md:text-3xl
          text-gray-550 pt-3 sm:pt-0">Peladeiros</h1>
          <TeamTable
            headers={headers}
            data={playersData}
            players={teamPlayersAllData}
          />
        </div>
      }
      {
        !clubExists &&
        <div className="w-full flex-grow">
          <h1 className="py-10 text-center text-2xl">
            Não foi encontrado nenhum dado sobre <strong>{club}</strong>
          </h1>
        </div>
      }
      <Footer />
    </div>
  )
}
