import ClubLogo from "../../components/ClubLogo";
import NavBar from "../../components/NavBar";
import Head from "next/head";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";

export default function Clubs() {

  const teams = ['Inter', 'Milan', 'Juventus', 'Roma'];
  return (
    <Layout title="Equipes" page="clubs">
      <h1 className="px-2 sm:px-10 md:px-20 text-2xl sm:text-2xl text-gray-550
           text-center md:text-left mt-4">
        Equipes
      </h1>
      <div className="flex items-center flex-wrap xs:flex-nowrap 
          justify-evenly sm:px-10 md:px-20">
        {teams.map((team, index) => {
          return (
            <div key={index} className="flex flex-col items-center 
                justify-center group pt-3">
              <ClubLogo
                path={`/images/${team}.svg`}
              />
              <h1 className="text-gray-550 text-xl sm:text-3xl transition 
                duration-100 transform group-hover:scale-125 mt-3">{team}</h1>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}