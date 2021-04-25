import links from "../utils/links";
import { useRouter } from "next/router";

export default function NavBar({ page, club }) {
  console.log('club: ', club);
  const router = useRouter();
  const bg = club == 'juventus' ? 'bg-gray-800' : club == 'inter' ? 'bg-blue-700' :
    club == 'milan' ? 'bg-red-700' : club == 'roma' ? 'bg-yellow-600' : 'bg-blue-450';
  const txt = club == 'juventus' ? 'text-white' : club == 'inter' ? 'text-white' :
  club == 'milan' ? 'text-gray-800' : club == 'roma' ? 'text-red-900' : 'text-gray-100';

  return (
    <nav className="relative">
      <div className={`h-12 xs:h-12 flex px-6 xs:px-10 text-lg xs:text-xl ${bg} items-center
      overflow-x-scroll space-x-6 xs:space-x-12 scrollbar-hide whitespace-nowrap ${txt}`}>
        {Object.entries(links).map(([key, { title, url }]) => {
          return <h2
            key={key}
            onClick={() => router.push(url)}
            className={`last:pr-4 cursor-pointer hover:text-yellow-300
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