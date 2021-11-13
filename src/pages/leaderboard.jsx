import Round from "../components/Round";
import LeaderboardTable from "../components/LeaderboardTable";
import Layout from "../components/Layout";

export default function Leaderboard() {
  const headers = ['#', 'Equipe', 'P', 'J', 'V', 'E', 'D', 'GP', 'GC', 'SG', '%', 'Últimos Jogos'];
  const teams = [
    ['1', 'Roma', '24', '15', '7', '3', '5', '27', '22', '5', '53', 'last'],
    ['2', 'Juventus', '24', '15', '7', '3', '5', '27', '25', '2', '53', 'last'],
    ['3', 'Inter', '18', '15', '5', '3', '7', '18', '21', '-3', '40', 'last'],
    ['4', 'Milan', '18', '15', '5', '3', '7', '22', '26', '-4', '40', 'last']
  ];


  return (
    <Layout title="Classificação" page="leaderboard">
      <div className="flex flex-col w-full pt-4 sm:px-2">
        <h1 className="px-2 pb-4 sm:px-10 md:px-20 text-xl sm:text-2xl text-gray-550">Classificação</h1>
        <div className="sm:px-10 md:px-20 flex flex-col lg:flex-row">
          <LeaderboardTable
            headers={headers}
            data={teams}
          />
          <Round />
        </div>
      </div>
    </Layout>
  )
}
