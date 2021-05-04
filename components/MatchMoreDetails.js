
export default function MatchMoreDetails({ handle, lineups, details }) {

  const lineupBorder = lineups ? 'border-gray-400' : 'border-transparent';
  const detailsBorder = details ? 'border-gray-400' : 'border-transparent';

  return (
    <>
      <div className="grid grid-cols-2 bg-gray-50 min-h">
        <h2 className={`xs:hover:bg-gray-150 cursor-pointer py-2 
          text-center text-gray-550 border-b-3 ${lineupBorder}`}
          onClick={() => handle('lineup')}
        >
          Escalação
        </h2>
        <h2 className={`xs:hover:bg-gray-150 cursor-pointer py-2 
          text-center text-gray-550 border-b-3 ${detailsBorder}`}
          onClick={() => handle('details')}
        >
          Detalhes
        </h2>
      </div>
    </>
  )
}
