import links from "../utils/links";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function NavBar({ page, club }) {

  const { currentUser, signout } = useContext(AuthContext);

  const router = useRouter();
  const bg = club == 'juventus' || club == 'inter' || club == 'milan'
    || club == 'roma' ? 'bg-transparent' : 'bg-gradient-to-r from-blue-450 to-blue-800';
  // test
  return (
    <nav className="relative bg-transparent z-100">
      <div className={`h-14 ${bg} flex overflow-x-scroll scrollbar-hide 
      whitespace-nowrap items-center`}>
        <div className="xs:h-14 flex px-6 xs:px-10 text-lg xs:text-xl items-center 
          flex-1 text-gray-100">
          {Object.entries(links).map(([key, { title, url }]) => {
            return (
              <h2
                key={key}
                onClick={() => router.push(url)}
                className={`px-4 cursor-pointer hover:opacity-75 
                  ${page == key ? 'text-yellow-300' : ''} `}
              >
                {title}
              </h2>
            )
          })}
          {!currentUser &&
            <h2
              onClick={() => router.push('/auth')}
              className={`px-4 cursor-pointer hover:opacity-75 
                ${page == 'auth' ? 'text-yellow-300' : ''} `}
            >
              Entrar
            </h2>}
          {currentUser &&
            <>
              <h2
                onClick={() => router.push('/profile')}
                className={`px-4 cursor-pointer hover:opacity-75 
                  ${page == 'profile' ? 'text-yellow-300' : ''} `}
              >
                Perfil
              </h2>
              <h2
                onClick={() => signout()}
                className={`px-4 cursor-pointer hover:opacity-75`}
              >
                Sair
              </h2>
            </>
          }
        </div>
      </div>
      {
        club === 'undefined' &&
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#3068B2] h-12 w-1/12" />
      }
    </nav>
  )
}