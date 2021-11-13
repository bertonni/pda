import PlayerCard from './PlayerCard';

export default function Modal({ closeModal, player }) {

  return (
    <>
      <div
        className="justify-start items-start mt-28 flex absolute inset-0
          outline-none focus:outline-none w-full"
      >
        <div className="w-auto sm:w-4/6 my-6 mx-auto max-w-lg">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex z-50
              flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <PlayerCard
              currPlayer={player}
            />
            {/*footer*/}
            <div className="flex items-center justify-center rounded-b">
              <button
                className="text-red-500 background-transparent font-bold
                    uppercase px-6 py-5 text-sm outline-none focus:outline-none
                    mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => closeModal()}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="opacity-30 fixed inset-0 z-30 bg-black"
        onClick={() => closeModal()} />
    </>
  );
}