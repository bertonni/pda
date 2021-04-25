export default function TeamHeader({ club, captain }) {
  const background = 'bg-' + club.toLowerCase().substr(0, 3);
  
  return (
    <div className="flex items-start py-4 sm:px-10 md:px-20 relative z-100">
      <img
        src={`/images/${club == 'Juventus' ? 'juventus_inverted' : club }.svg`}
        className="h-24 w-h-24 ml-4 sm:h-32 sm:w-auto"
      />
      <div className="flex flex-col ml-5">
        <h1 className="font-bold uppercase text-3xl sm:text-5xl text-gray-100">{ club }</h1>
        <div className="flex flex-col">
          <div className="flex">
            <span className="text-sm sm:text-base text-gray-100"><strong>Vitórias: </strong> 5</span>
            <span className="ml-1 xs:ml-3 text-sm sm:text-base text-gray-100"><strong>Empates: </strong> 3</span>
            <span className="ml-1 xs:ml-3 text-sm sm:text-base text-gray-100"><strong>Derrotas: </strong> 5</span>
          </div>
          <span className="text-sm sm:text-base text-gray-100"><strong>Capitão: </strong> { captain }</span>
        </div>
      </div>
      <div className={`absolute top-0 left-0 ${background} bg-cover bg-center h-44 w-full -mt-12 z-100-`} />
    </div>
  )
}