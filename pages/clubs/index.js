import Head from "next/head";
import ClubLogo from "../../components/ClubLogo";
import NavBar from "../../components/NavBar";

export default function Clubs() {
  return (
    <div>
      <Head>
        <title>Equipes</title>
      </Head>
      <NavBar page="clubs" />
      <div className="pt-4 flex flex-col">
        <h1 className="px-2 sm:px-10 md:px-20 text-xl sm:text-2xl
        text-gray-550"> Equipes </h1>
        <div className="flex items-center flex-wrap justify-evenly sm:px-10 md:px-20">
          <div className="flex flex-col items-center justify-center group pt-3">
            <ClubLogo
              path="/images/Inter.svg"
            />
            <h1 className="text-gray-550 text-xl sm:text-3xl transition duration-100
            transform group-hover:scale-125 mt-1">Inter</h1>
          </div>
          <div className="flex flex-col items-center justify-center group pt-3">
            <ClubLogo
              path="/images/Milan.svg"
            />
            <h1 className="text-gray-550 text-xl sm:text-3xl transition duration-100
            transform group-hover:scale-125 mt-1">Milan</h1>
          </div>
          <div className="flex flex-col items-center justify-center group pt-3">
            <ClubLogo
              path="/images/Juventus.svg"
            />
            <h1 className="text-gray-550 text-xl sm:text-3xl transition duration-100
            transform group-hover:scale-125 mt-1">Juventus</h1>
          </div>
          <div className="flex flex-col items-center justify-center group pt-3">
            <ClubLogo
              path="/images/Roma.svg"
            />
            <h1 className="text-gray-550 text-xl sm:text-3xl transition duration-100
            transform group-hover:scale-125 mt-1">Roma</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
