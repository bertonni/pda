import { useRouter } from "next/router";

export default function ClubLogo({ path }) {
  const router = useRouter();
  let halfPah = path.split('.');
  const club = halfPah[0].substr(8).toLowerCase();
  return (
    <img
      src={path}
      // onClick={() => {router.push({ pathname: '/clubs', query: {team: club} })}}
      onClick={() => {router.push('/clubs/' + club)}}
      className="h-28 w-28 py-2 sm:h-40 sm:w-40 lg:h-48 lg:w-48 cursor-pointer
      transition duration-100 transform hover:scale-110 group-hover:scale-110
      last:mr-2"
    />
  )
}