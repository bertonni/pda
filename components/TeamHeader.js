function TeamHeader({ club, captain }) {
  return (
    <div className="flex items-start my-4 sm:px-20">
      <img
        src={`/images/${club}.svg`}
        className="h-24 w-h-24 ml-4"
      />
      <div className="flex flex-col ml-5">
        <h1 className="font-bold uppercase text-3xl text-gray-550">{ club }</h1>
        <div className="flex flex-col">
          <div className="flex">
            <span className="text-sm"><strong>Vitórias: </strong> 5</span>
            <span className="ml-3 text-sm"><strong>Empates: </strong> 3</span>
            <span className="ml-3 text-sm"><strong>Derrotas: </strong> 5</span>
          </div>
          <span className="text-sm"><strong>Capitão: </strong> { captain }</span>
        </div>
      </div>
    </div>
  )
}

export default TeamHeader
