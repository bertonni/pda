export default function Message({ message, status, handleClick }) {
  const color = status ? 'bg-green-200 text-green-800' : 
    'bg-red-200 text-red-800';
  return (
    <div className={`w-full relative mt-3 border rounded text-center text-sm font-bold
      min-w-min p-5 ${color}`}>
      <p>{ message }</p>
      <span
        className="absolute cursor-pointer top-0 right-0 p-2 rounded"
        onClick={handleClick}
      >
        x
      </span>
    </div>
  )
}
