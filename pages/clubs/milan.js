import NavBar from "../../components/NavBar";
import TeamHeader from "../../components/TeamHeader";
import TeamTable from "../../components/TeamTable";
import Head from "next/head";

export default function Milan() {

  const headers = ['#', 'Peladeiro', 'Posição', 'Gols', 'Assist'];
  const players = [
    ['1', 'Nino', 'Goleiro', '0', '0'],
    ['87', 'Elton Campos', 'Zagueiro', '1', '0'],
    ['4', 'Dinho', 'Zagueiro', '1', '0'],
    ['17', 'Bruno', 'Zagueiro', '0', '0'],
    ['3', 'Rodolfo', 'Zagueiro', '0', '0'],
    ['95', 'Crisvânio', 'Zagueiro', '0', '0'],
    ['5', 'João R.', 'Meio', '7', '1'],
    ['10', 'Dandão', 'Meio', '2', '0'],
    ['8', 'Rico', 'Meio', '1', '0'],
    ['12', 'Pedro Henrique', 'Meio', '1', '0'],
    ['9', 'Bertonni', 'Atacante', '1', '1'],
    ['7', 'Vitor Sales', 'Atacante', '6', '3'],
    ['21', 'Raul', 'Atacante', '8', '8']
  ];

  return (
    <div>
      <Head>
        <title>Milan</title>
      </Head>
      <NavBar page={'clubs'} club={'milan'} />
      <div className="w-full">
        <TeamHeader
          club="Milan"
          captain="Bança"
        />
        <h1 className="px-3 sm:px-10 md:px-20 text-xl sm:text-2xl md:text-3xl
        text-gray-550 pt-3 sm:pt-0">Peladeiros</h1>
        <TeamTable
          headers={headers}
          data={players}
        />
      </div>
    </div>
  )
}