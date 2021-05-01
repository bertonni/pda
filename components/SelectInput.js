export default function SelectInput({ label, handle, property, options }) {
  return (
    <div className="flex flex-col mt-2">
      <label>{label}:</label>
      <select
        className="h-8 border-b-2 border-gray-300 bg-transparent outline-none
         focus:bg-gray-50"
        onBlur={(e) => { handle(property, e.target.value) }}
      >
        <option>Selecione</option>
        {
          options.map((option, index) => {
            return <option key={index}>{option}</option>
          })
        }
      </select>
    </div>
  )
}
