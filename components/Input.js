export default function Input({ label, type, min, placeholder }) {

  return (
    <div className="flex flex-col mt-2">
      <label>
        { label }:
      </label>
      <input
        type={ type }
        min={min ?? null}
        placeholder={ placeholder ?? '' }
        className="h-8 border-b-2 border-gray-300 bg-transparent outline-none
          transition ease-linear duration-300 focus:border-gray-400" />
    </div>
  )
}
