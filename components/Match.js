import { useRouter } from "next/router"

export default function Match(props) {
  const router = useRouter();
  const bg = props.status.toUpperCase() == 'EM ANDAMENTO' ? 'bg-green-100' :
  props.status.toUpperCase() == 'ENCERRADO' ? 'bg-gray-150' : '';

  return (
    <div className="flex flex-col items-center border-b border-gray-300">
      <h3 className="pt-1 text-2xs md:text-xs">{props.date} - {props.time} - {props.location}</h3>
      <div className="w-full flex item-center justify-between">
        <div className="flex items-center">
          <span className="font-roboto uppercase pl-1 pr-3 text-2xl">{props.home.substr(0,3)}</span>
          <img src={`/images/${props.home}.svg`}
            className="h-11 w-11 sm:h-12 sm:w-12 cursor-pointer"
            onClick={() => router.push('/clubs/' + props.home.toLowerCase())}
          />
        </div>
        <div className="flex items-center mt-3 mb-3">
          <span className="font-roboto text-2xl mr-2 ml-3">{props.homeScore}</span>
          <span className="font-roboto">x</span>
          <span className="font-roboto text-2xl ml-2 mr-3">{props.visitorScore}</span>
        </div>
        <div className="flex items-center">
          <img src={`/images/${props.visitor}.svg`}
            className="h-11 w-11 sm:h-12 sm:w-12 cursor-pointer"
            onClick={() => router.push('/clubs/' + props.visitor.toLowerCase())}
          />
          <span className="font-roboto uppercase pr-1 pl-3 text-2xl">{props.visitor.substr(0,3)}</span>
        </div>
      </div>
      <div className={`mb-2 rounded-full ${bg} px-3 py-1`}>
        <p className="text-xs uppercase">{props.status}</p>
      </div>
    </div>
  )
}
