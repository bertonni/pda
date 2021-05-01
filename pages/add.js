import Head from "next/head";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Input from "../components/Input";
import NavBar from "../components/NavBar";
import SelectInput from "../components/SelectInput";
import { db } from "../utils/db/firebase";

export default function Add() {
  const playerData = {
    name: '',
    profilePicture: '',
    position: '',
    team: '',
    age: 0,
    number: 0,
    height: '',
    foot: '',
    goals: 0,
    assists: 0,
    totalCards: 0,
    currentCards: 0,
  }

  const [allPlayers, setAllPlayers] = useState([]);
  const [form, setForm] = useState(null);
  const [focusEl, setFocusEl] = useState(null);
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [addedError, setAddedError] = useState(false);
  const [input, setInput] = useState('');

  function clearForm() {
    form.reset();
  }

  function handleChange(key, value) {
    switch (key) {
      case 'name':
        playerData.name = value;
        break;
      case 'position':
        playerData.position = value;
        break;
      case 'number':
        playerData.number = value;
        break;
      case 'team':
        playerData.team = value;
        break;
      case 'height':
        playerData.height = value;
        break;
      case 'foot':
        playerData.foot = value;
        break;
      default:
        break;
    }
  }

  function closeMessage() {
    setAddedError(false);
    setAddedSuccess(false);
  }

  // useEffect(() => {
  //   db.collection('players').where("team", "==", "Juventus").onSnapshot((snapshot) =>
  //     setAllPlayers(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     )
  //   );

  // }, [])

  const sendPlayer = (e) => {
    e.preventDefault();

    db.collection('players')
      .add(playerData)
      .then(setAddedSuccess(true))
      .then(clearForm())
      .catch(Error('error'));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Detalhes</title>
      </Head>
      <NavBar page={'signup'} />
      <div className="w-full flex-grow">
        <div className="flex flex-col w-full pt-2 px-2 sm:px-10 md:px-20">
          <h1 className="sm:px-10 md:px-20 text-xl sm:text-2xl text-gray-550">
            Cadastro
          </h1>
          <form ref={(el) => setForm(el)}>
            <div className="flex flex-col sm:flex-row sm:flex-wrap">
              <Input
                label="Nome"
                type="text"
                property="name"
                placeholder="Informe o nome"
                handle={handleChange}
              />
              <SelectInput
                label="Time"
                property="team"
                options={['Juventus', 'Roma', 'Inter', 'Milan']}
                handle={handleChange}
              />
              <SelectInput
                label="Posição"
                property="position"
                options={['Goleiro', 'Zagueiro', 'Meio', 'Atacante']}
                handle={handleChange}
              />
              <Input
                label="Número"
                type="number"
                property="number"
                min={0}
                placeholder="Informe o número"
                handle={handleChange}
              />
              <Input
                label="Idade"
                type="number"
                property="age"
                min={0}
                placeholder="Informe a Idade"
                handle={handleChange}
              />
              <Input
                label="Altura"
                type="text"
                property="height"
                placeholder="Informe a Altura"
                handle={handleChange}
              />
              <SelectInput
                label="Posição"
                property="position"
                options={['Direito', 'Esquerdo']}
                handle={handleChange}
              />
            </div>
            <div className="flex flex-col items-center mt-3">
              <Button
                type="submit"
                background="primary"
                handle={sendPlayer}
                text="Salvar"
              />
            </div>
          </form>
          {addedSuccess &&
            (
              <div className="relative mt-3 border rounded text-center 
              bg-green-200 text-sm text-green-800 font-bold min-w-min p-5">
                <p>Usuário adicionado com sucesso</p>
                <span
                  className="absolute cursor-pointer top-0 right-0 p-2 border 
                  border-gray-400 rounded"
                  onClick={closeMessage()}
                >
                  x
                </span>
              </div>
            )
          }
          {addedError &&
            <div className="relative mt-3 border rounded text-center 
            bg-red-200 text-red-800 font-bold text-sm min-w-min p-5">
              <p>Erro ao adicionar usuário</p>
              <span
                className="absolute cursor-pointer top-0 right-0 p-2 border 
                border-gray-400 rounded"
                onClick={closeMessage()}
              >
                x
              </span>
            </div>
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}