import { useRouter } from "next/router";

function ClubLogo({ path }) {
  const router = useRouter();
  return (
    <img
      src={path}
      onClick={() => {router.push('/team')}}
      className="h-28 w-28 py-2 sm:h-40 sm:w-40 lg:h-48 lg:w-48 cursor-pointer
      transition duration-100 transform hover:scale-125 last:mr-1"
    />
  )
}

export default ClubLogo