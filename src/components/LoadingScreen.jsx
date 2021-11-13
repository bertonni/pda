export default function LoadingScreen() {
  return (
    <>
      <div className="flex items-center h-screen justify-center gap-4 z-40">
        <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12" cy="12" r="10" stroke="#1266AB" strokeWidth="4"></circle>
          <path className="opacity-75" fill="#1266AB"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <h1 className="text-2xl">Por favor, aguarde...</h1>
      </div>
      {/* <div className="bg-black bg-opacity-50 h-screen fixed inset-0 z-20" /> */}
    </>
  )
}
