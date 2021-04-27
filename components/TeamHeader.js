export default function TeamHeader({ club, captain }) {
  let bg_int = "absolute top-0 left-0 bg-int-header bg-cover bg-center h-44 w-full -mt-12 z-100-";
  let bg_mil = "absolute top-0 left-0 bg-mil-header bg-cover bg-center h-44 w-full -mt-12 z-100-";
  let bg_juv = "absolute top-0 left-0 bg-juv-header bg-cover bg-center h-44 w-full -mt-12 z-100-";
  let bg_rom = "absolute top-0 left-0 bg-rom-header bg-cover bg-center h-44 w-full -mt-12 z-100-";

  let classes = club == "Juventus" ? bg_juv : club == "Inter" ? bg_int : club == "Roma" ? bg_rom : bg_mil;
  return (
    <div className="flex items-start py-4 sm:px-10 md:px-20 relative z-100 w-full">
      <img
        src={`/images/${club == 'Juventus' ? 'Juventus_inverted' : club }.svg`}
        className="h-24 w-h-24 ml-4 sm:h-32 sm:w-auto"
      />
      <div className="flex flex-col ml-5">
        <h1 className="font-bold uppercase text-3xl sm:text-5xl text-gray-100">{ club }</h1>
        <div className="flex flex-col">
          <div className="flex">
            <span className="text-sm sm:text-base text-gray-100">
              <strong className="xs:hidden pr-1">V: </strong>
              <strong className="hidden xs:inline-block pr-1">Vitórias: </strong>
              5
            </span>
            <span className="ml-1 xs:ml-3 text-sm sm:text-base text-gray-100">
              <strong className="xs:hidden pr-1">E: </strong>
              <strong className="hidden xs:inline-block pr-1">Empates: </strong>
              3
            </span>
            <span className="ml-1 xs:ml-3 text-sm sm:text-base text-gray-100">
              <strong className="xs:hidden pr-1">D: </strong>
              <strong className="hidden xs:inline-block pr-1">Derrotas: </strong>
              5
            </span>
          </div>
          <span className="text-sm sm:text-base text-gray-100"><strong>Capitão: </strong> { captain }</span>
        </div>
      </div>
      <div className={classes} />
    </div>
  )
}