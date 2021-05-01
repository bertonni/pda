import ClubLogo from "../../components/ClubLogo";
import NavBar from "../../components/NavBar";
import Head from "next/head";
import Footer from "../../components/Footer";

export default function Clubs({ team }) {

  const teams = ['Inter', 'Milan', 'Juventus', 'Roma'];
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Equipes</title>
      </Head>
      <NavBar page="clubs" />
      <div className="pt-4 flex flex-col flex-grow">
        <h1 className="px-2 sm:px-10 md:px-20 text-2xl sm:text-2xl
        text-gray-550 text-center md:text-left"> Equipes </h1>
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
      </div>
      <Footer />
    </div>
  )
}

// export function getServerSideProps({ query }) {
//   const team = query.team;

//   return {
//     props: {team}, // will be passed to the page component as props
//   }
// }