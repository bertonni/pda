export default function Input({ label, name, type, min, refs, placeholder, fullWidth = false }) {
  const width = fullWidth ? 'w-full' : '';

  return (
    <div className={`${width} flex flex-col mt-1`}>
      <label className="text-gray-500">
        {label}:
      </label>
      <input
        type={type}
        name={name}
        min={min ?? null}
        ref={refs}
        placeholder={placeholder ?? ''}
        className="h-10 border rounded px-2 mb-2 border-gray-300 bg-transparent outline-none
          transition ease-linear duration-300 focus:border-gray-400" />
    </div>
  )
}
