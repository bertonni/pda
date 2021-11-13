export default function MatchMoreDetails({ handle, lineups, details }) {

  const lineupBorder = lineups ? 'border-gray-400' : 'border-transparent';
  const detailsBorder = details ? 'border-gray-400' : 'border-transparent';

  return (
    <>
      <div className="flex items-center justify-center bg-gray-50 min-h">
        <h2 className={`xs:hover:bg-gray-150 cursor-pointer py-2 w-full
          text-center text-gray-550 border-b-3 ${lineupBorder} lg:w-2/5`}
          onClick={() => handle('lineup')}
        >
          Escalação
        </h2>
        <h2 className={`xs:hover:bg-gray-150 cursor-pointer py-2 w-full
          text-center text-gray-550 border-b-3 ${detailsBorder} lg:w-2/5`}
          onClick={() => handle('details')}
        >
          Detalhes
        </h2>
      </div>
    </>
  )
}
