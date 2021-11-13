import NavBar from "../components/NavBar";
import RankingTable from "../components/RankingTable";
import Head from "next/head";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function Rankings() {
  const headerTopScore = ['#', 'Peladeiro', 'Equipe', 'Gols'];
  const bodyTopScore = [
    ['1', 'Raul-Atacante-21', 'Juventus', '8'],
    ['2', 'João R.-Meio-5', 'Juventus', '7'],
    ['3', 'Max-Atacante-7', 'Milan', '7'],
    ['4', 'Marquinho-Meio-17', 'Milan', '6'],
    ['5', 'Juan Felipe-Atacante-2', 'Roma', '6'],
    ['6', 'Emílio-Atacante-17', 'Roma', '6'],
    ['7', 'Vitor Sales-Atacante-7', 'Juventus', '6'],
    ['8', 'Ivson-Atacante-12', 'Inter', '5'],
    ['9', 'Bruninho Jr-Atacante-10', 'Roma', '5'],
    ['10', 'Henrique-Meio-8', 'Roma', '4'],
  ];
  const headerAssists = ['#', 'Peladeiro', 'Equipe', 'Assist.'];
  const bodyAssists = [
    ['1', 'Raul-Atacante-21', 'Juventus', '8'],
    ['2', 'Juan Felipe-Atacante-2', 'Roma', '4'],
    ['3', 'Bruninho Jr-Atacante-10', 'Roma', '4'],
    ['4', 'Max-Atacante-7', 'Milan', '3'],
    ['5', 'Emílio-Atacante-17', 'Roma', '3'],
    ['6', 'Vitor Sales-Atacante-7', 'Juventus', '3'],
    ['7', 'Marquinho-Meio-17', 'Milan', '2'],
    ['8', 'Paulinho-Meio-10', 'Inter', '2'],
    ['9', 'Fledson-Atacante-8', 'Milan', '2'],
    ['10', 'Roninho-Meio-19', 'Milan', '2'],
  ];
  return (
    <Layout title="Rankings" page="rankings">
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col w-full pt-4">
          <h1 className="px-3 sm:px-10 md:px-20 text-xl sm:text-2xl text-gray-550">Artilharia</h1>
          <div className="px-3 py-3 sm:pl-10 md:pl-20 lg:pr-5 flex justify-center">
            <RankingTable
              headers={headerTopScore}
              data={bodyTopScore}
            />
          </div>
        </div>
        <div className="flex flex-col w-full pt-4">
          <h1 className="px-3 text-xl lg:px-5 sm:text-2xl text-gray-550">Assistências</h1>
          <div className="px-3 py-3 sm:pr-10 lg:pr-20 lg:pl-5 flex justify-center mb-6">
            <RankingTable
              headers={headerAssists}
              data={bodyAssists}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
