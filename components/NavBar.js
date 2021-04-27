import links from "../utils/links";
import { useRouter } from "next/router";

export default function NavBar({ page, club }) {
  const router = useRouter();
  const bg = club == 'juventus' || club == 'inter' || club == 'milan'
  || club == 'roma' ? 'bg-transparent' : 'bg-blue-450';

  return (
    <nav className="relative bg-transparent z-100">
      <div className={`h-12 xs:h-12 flex px-6 xs:px-10 text-lg xs:text-xl ${bg} 
      items-center overflow-x-scroll space-x-6 xs:space-x-12 scrollbar-hide 
      whitespace-nowrap text-gray-100`}>
        {Object.entries(links).map(([key, { title, url }]) => {
          return <h2
            key={key}
            onClick={() => router.push(url)}
            className={`last:pr-4 cursor-pointer hover:opacity-75
            ${page == key ? 'text-yellow-300' : ''} `}
          >
            {title}
          </h2>
        })}
      </div>
      {
        typeof club === 'undefined' &&
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#3068B2]
          h-12 w-1/12"
        />
      }
    </nav>
  )
}