import Head from "next/head";
import { useRef, useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Input from "../components/Input";
import NavBar from "../components/NavBar";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const formRef = useRef();
 
  const { signup } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = formRef.current[0].value;
    const password = formRef.current[1].value;
  }



  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Entrar</title>
      </Head>
      <NavBar page={'login'} />
      <div className="w-full flex-grow">
        <div className="flex flex-col items-center pt-2 px-2 sm:px-10 md:px-20">
          <h1 className="sm:px-10 md:px-20 text-xl sm:text-2xl text-gray-550 mt-1">
            Cadastro
          </h1>
          <div className="flex flex-col w-9/12 sm:w-7/12 md:w-1/2 mt-4">
            <form ref={formRef}>
              <Input
                label="E-mail"
                type="text"
                property="email"
                placeholder="Informe o e-mail"
                />
              <Input
                label="Senha"
                type="password"
                property="password"
                placeholder="*******"
              />
              <div className="mt-3">
                <Button
                  type="submit"
                  background="primary"
                  text="Cadastrar"
                  handle={handleSubmit}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
