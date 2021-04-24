import links from "../utils/links";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="h-10 xs:h-12 flex px-6 xs:px-10 text-lg xs:text-xl bg-blue-450 items-center
      overflow-x-scroll space-x-6 xs:space-x-12 scrollbar-hide whitespace-nowrap text-gray-100">
        {Object.entries(links).map(([key, { title, url }]) => {
          return <h2
            key={key}
            onClick={() => router.push(url)}
            className="last:pr-4 cursor-pointer transition duration-100
            transform hover:scale-125 hover:text-white active:text-yellow-300"
          >
            {title}
          </h2>
        })}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#3068B2]
      h-10 w-1/12"
      />
    </nav>
  )
}

export default NavBar;
