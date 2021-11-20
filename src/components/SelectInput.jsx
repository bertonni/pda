import { ChevronDownIcon, ChevronUpIcon, XIcon } from "@heroicons/react/solid"
import { useState } from "react"

export default function SelectInput({ label, placeholder, options }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState("");

  function handleSelect(value) {
    const place = label === 'Mandante' ? 'home' : 'away';
    setSelected(value);
    setShowOptions(false);
  }

  function handleClickInput() {
    if (selected !== "") return;
    setShowOptions(!showOptions);
  }

  return (
    <div className="relative flex flex-col">
      <label htmlFor="select-input" className="text-gray-500">
        {label}
      </label>
      <input
        placeholder="Selecione"
        id="select-input"
        tabIndex="0"
        value={selected}
        onChange={() => setSelected(selected)}
        onClick={() => handleClickInput()}
        className="h-10 border rounded px-2 mb-2 border-gray-300 bg-transparent outline-none
            transition ease-linear duration-300 focus:border-gray-400 w-full"
      />
      {
        selected !== "" ?
          <XIcon
            className="w-5 h-auto absolute top-9 z-50 right-1 flex items-center cursor-pointer
          transition-all animate-rotate-90"
            onClick={() => setSelected("")}
          />
          :
          showOptions ?
            <ChevronDownIcon
              className="h-auto w-7 absolute inset-y-8 z-50 right-0 flex items-center cursor-pointer
          transition-all animate-rotate-180"
              onClick={() => setShowOptions(false)}
            />
            :
            <ChevronUpIcon
              className="h-auto w-7 absolute inset-y-8 z-50 right-0 flex items-center cursor-pointer
            transition-all animate-rotate-180"
              onClick={() => setShowOptions(true)}
            />
      }
      {
        showOptions &&
        <div
          onBlur={() => setShowOptions(false)}
          tabIndex="0"
          className="absolute w-full z-400 top-16 bg-white border border-gray-300 max-h-40
            overflow-hidden overflow-y-scroll rounded-md shadow-md scrollbar-hide"
        >
          <ul className="py-1">
            {
              options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center py-1 w-full gap-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSelect(option.name)}
                >
                  <img
                    className="h-auto w-12 self-center"
                    src={`/clubLogos/${option.name.replace("ç", "c").toLowerCase()}.png`}
                    alt={`${option.name}`} />
                  <span>{option.name}</span>
                </div>
              ))
            }
          </ul>
        </div>
      }
    </div>
  )
}
