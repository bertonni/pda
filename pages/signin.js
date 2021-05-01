import Head from "next/head";
import { useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Input from "../components/Input";
import NavBar from "../components/NavBar";

import { auth } from '../utils/db/firebase';

export default function Signin() {

  const userData = {
    email: '',
    password: ''
  }

  const [form, setForm] = useState(null);
  // const [addedSuccess, setAddedSuccess] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loggedUser, setLoggedUser] = useState('');

  // function handleChange(property, value) {
  //   switch (property) {
  //     case 'email':
  //       userData.email = value;
  //       break;
  //     case 'password':
  //       userData.password = value;
  //       break;
  //     default:
  //       break;
  //   }
  // }

  // function closeMessage() {
  //   setLoginSuccess(false);
  // }

  // function logUser(e) {
  //   e.preventDefault();

  //   auth.signInWithEmailAndPassword(userData.email, userData.password)
  //     .then(setLoginSuccess(true))
  //     .then(form.reset())
  //     .then(setLoggedUser(userData.email))
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Entrar</title>
      </Head>
      <NavBar page={'login'} />
      <div className="w-full flex-grow">
        <div className="flex flex-col items-center pt-2 px-2 sm:px-10 md:px-20">
          <h1 className="sm:px-10 md:px-20 text-xl sm:text-2xl text-gray-550 mt-1">
            Entrar
          </h1>
          <div className="flex flex-col w-9/12 sm:w-7/12 md:w-1/2 mt-4">
            <form ref={(el) => setForm(el)}>
              <Input
                label="E-mail"
                type="text"
                property="email"
                placeholder="Informe o e-mail"
                handle={handleChange}
              />
              <Input
                label="Senha"
                type="password"
                property="password"
                placeholder="*******"
                handle={handleChange}
              />
              <div className="mt-3">
                <Button
                  background="primary"
                  text="Entrar"
                  handle={logUser}
                />
              </div>
            </form>
          </div>
          {loginSuccess &&
            <div className="relative mt-3 border rounded text-center 
              bg-green-200 text-sm text-green-800 font-bold min-w-min p-5">
              <p>{loggedUser}, bem-vindo(a)</p>
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
