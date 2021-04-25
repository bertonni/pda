import Head from 'next/head';
import ClubLogo from '../components/ClubLogo';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>PDA</title>
      </Head>
      <NavBar page={'home'} />
      <section className="bg-blue-450 flex items-center sm:justify-evenly
      justify-center py-10 sm:h-48 md:h-64 lg:h-72 text-gray-100">
        <img
          src='/images/pda_logo_3_azul_amarelo.svg'
          className="hidden sm:block h-36 w-36 md:h-48 md:w-48"  
        />
        <div className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold">PELADA DO</h1>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold">AMIGÃO</h1>
        </div>
      </section>
      <section className="px-4 py-2">
        <h1 className="text-2xl pb-4">Equipes</h1>
        <div className="flex flex-wrap xs:flex-nowrap items-center justify-between">
          <ClubLogo path='/images/Inter.svg' />
          <ClubLogo path='/images/Milan.svg' />
          <ClubLogo path='/images/Juventus.svg' />
          <ClubLogo path='/images/Roma.svg' />
        </div>
      </section>
    </div>
  )
}
