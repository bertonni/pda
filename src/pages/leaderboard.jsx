import Round from "../components/Round";
import LeaderboardTable from "../components/LeaderboardTable";
import Layout from "../components/Layout";
import { useState } from "react";
import AddRound from "../components/AddRound";

export default function Leaderboard() {
  const [showAddRoundModal, setshowAddRoundModal] = useState(false)
  const headers = ['#', 'Equipe']
  const headers2 = ['P', 'J', 'V', 'E', 'D', 'GP', 'GC', 'SG', '%', 'Últimos Jogos'];
  const data2 = [
    ['24', '15', '7', '3', '5', '27', '22', '5', '53', 'last'],
    ['24', '15', '7', '3', '5', '27', '25', '2', '53', 'last'],
    ['18', '15', '5', '3', '7', '18', '21', '-3', '40', 'last'],
    ['18', '15', '5', '3', '7', '22', '26', '-4', '40', 'last']
  ];
  const data1 = [
    ['1', 'Roma'],
    ['2', 'Juventus'],
    ['3', 'Inter'],
    ['4', 'Milan']
  ];

  return (
    <Layout title="Classificação" page="leaderboard">
      <div className="flex flex-col relative w-full pt-4 sm:px-2">
        { showAddRoundModal &&
          <AddRound
            closeModal={() => setshowAddRoundModal(false)}
          />
        }
        <h1 className="px-2 pb-4 sm:px-10 md:px-20 text-xl sm:text-2xl text-gray-550">Classificação</h1>
        <div className="sm:px-10 md:px-20 flex flex-col lg:flex-row">
          <LeaderboardTable
            headers={headers}
            headers2={headers2}
            data={data1}
            data2={data2}
          />
          <Round setShowAddRoundModal={setshowAddRoundModal} />
        </div>
      </div>
    </Layout>
  )
}
