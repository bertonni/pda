import ClubLogo from "./ClubLogo";

export default function HomeInfo() {
  return (
    <>
      <section className="bg-blue-450 flex items-center sm:justify-evenly
          justify-center py-10 sm:h-48 md:h-64 lg:h-72 text-gray-100">
        <img
          src='/images/pda_logo_2.svg'
          className="hidden sm:block h-36 w-36 md:h-48 md:w-48"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold">PELADA DO</h1>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold">AMIGÃO</h1>
        </div>
      </section>
      <section className="px-4 py-4 sm:py-6 md:px-10 lg:px-20 flex-grow">
        <h1 className="text-2xl md:text-3xl lg:text-4xl md:pl-10 lg:pl-16 pb-4 text-center md:text-left">Equipes</h1>
        <div className="flex flex-wrap xs:flex-nowrap items-center justify-evenly">
          <ClubLogo path='/images/Inter.svg' />
          <ClubLogo path='/images/Milan.svg' />
          <ClubLogo path='/images/Juventus.svg' />
          <ClubLogo path='/images/Roma.svg' />
        </div>
      </section>
      <section className="px-4 py-6 md:px-10 lg:px-20 bg-blue-450 flex flex-col">
        <h1 className="text-2xl md:text-3xl lg:text-4xl md:pl-10 lg:pl-16 pb-4 text-center text-white md:text-left">Premiações</h1>
        <div className="flex flex-wrap items-center justify-evenly">
          <div className="flex flex-col items-center mt-10">
            <span className="mb-2 text-white sm:text-lg lg:text-xl">2º Colocado</span>
            <div className="flex flex-col items-center">
              <img src="/images/silver_trophy.svg"
                height="auto" width="auto" className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32" />
              <img src="/images/silver_medal.svg"
                height="auto" width="auto" className="mt-2 h-7 w-7 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-2 text-white sm:text-lg lg:text-xl">Campeão</span>
            <div className="flex flex-col items-center">
              <img src="/images/gold_trophy.svg"
                height="auto" width="auto" className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32" />
              <img src="/images/gold_medal.svg"
                height="auto" width="auto" className="mt-2 h-7 w-7 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
            </div>
          </div>
          <div className="flex flex-col items-center mt-10">
            <span className="mb-2 text-white sm:text-lg lg:text-xl">3º Colocado</span>
            <div className="flex flex-col items-center">
              <img src="/images/bronze_trophy.svg"
                height="auto" width="auto" className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32" />
              <img src="/images/bronze_medal.svg"
                height="auto" width="auto" className="mt-2 h-7 w-7 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
