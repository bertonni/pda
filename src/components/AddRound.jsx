import { useContext, useRef } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Input from "./Input";
import SelectInput from "./SelectInput";

export default function AddRound({ closeModal }) {
  const formRef = useRef(null);
  const homeTeam = useRef("default");
  const awayTeam = useRef("default");

  const { clubs, addRound } = useContext(AuthContext);
  
  const date = new Date();
  const month = date.getUTCMonth() + 1; //months from 1-12
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  const today = year + "-" + month + "-" + day;

  function handleSubmit(e) {
    e.preventDefault();
    const date = formRef.current.date.value;
    const time = formRef.current.time.value;
    const home = formRef.current.home.value;
    const away = formRef.current.away.value;

    addRound(date, time, home, away);
  }

  if (!clubs) return <></>;

  return (
    <>
      <div className="justify-start items-center flex absolute inset-0 outline-none
        focus:outline-none w-full"
      >
        <div className="w-auto sm:w-4/6 my-6 mx-auto max-w-lg">
          <div className="border-0 rounded-lg shadow-lg relative flex z-50 flex-col w-full
              bg-white outline-none focus:outline-none px-4 py-2">
            <form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
              <div className="flex w-full gap-2">
                <Input
                  label="Data"
                  name="date"
                  type="date"
                  min={today}
                  fullWidth
                  placeholder="Selecione a data"
                  />
                <Input
                  label="Hora"
                  name="time"
                  type="time"
                  placeholder="Selecione a hora"
                />
              </div>
              <div className="flex w-full gap-2">
                <SelectInput
                  label="Mandante"
                  placeholder="Mandante"
                  options={clubs}
                />
                <SelectInput
                  label="Visitante"
                  placeholder="Visitante"
                  options={clubs}
                />
              </div>
              <Input
                label="Local"
                name="localization"
                type="text"
                placeholder="Local da partida"
              />
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="flex items-center justify-center py-2 px-5 bg-blue-450 text-white
                  rounded w-max self-center my-1 sm:hover:bg-blue-500 transition-all"
                  >
                  Adicionar Partida
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="opacity-30 h-screen w-screen fixed inset-0 z-30 bg-black"
        onClick={() => closeModal()} />
    </>
  )
}
