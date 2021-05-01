import links from "../utils/links";
import { useRouter } from "next/router";
import Input from "./Input";
import Button from "./Button";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function NavBar({ page, club }) {

  const formRef = useRef();
  const [wasLoginClicked, setWasLoginClicked] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const { currentUser, signin, signup  } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    isSignup ? console.log('signup data') : console.log('signin data');

    const email = formRef.current[0].value;
    const password = formRef.current[1].value;
    const confirmPassword = formRef.current[2].value ?? null;

    // console.log(email, password, confirmPassword)

    // if (confirmPassword !== password) {
    //   alert('Senhas diferentes');
    // }

  }

  const router = useRouter();
  const bg = club == 'juventus' || club == 'inter' || club == 'milan'
    || club == 'roma' ? 'bg-transparent' : 'bg-blue-450';

  return (
    <>
      <nav className="relative bg-transparent z-100">
        <div className={`h-12 xs:h-12 flex px-6 xs:px-10 text-lg xs:text-xl ${bg} 
      items-center overflow-x-scroll space-x-6 xs:space-x-12 scrollbar-hide 
      whitespace-nowrap text-gray-100`}>
          {Object.entries(links).map(([key, { title, url }]) => {
            return <h2
              key={key}
              onClick={() => key === 'signin' ? setWasLoginClicked(true) : router.push(url)}
              className={`last:pr-4 cursor-pointer hover:opacity-75
            ${page == key ? 'text-yellow-300' : ''} `}
            >
              {title}
            </h2>
          })}
        </div>
        {
          typeof club === 'undefined' &&
          <div className="absolute top-0 right-0 bg-gradient-to-l from-[#3068B2]
          h-12 w-1/12"
          />
        }
      </nav>
      {
        wasLoginClicked &&
        <>
          <div className="overflow-x-hidden
        overflow-y-auto fixed inset-0 z-10 outline-none focus:outline-none
          w-full bg-black opacity-25"
            onClick={() => setWasLoginClicked(false)}
          >
          </div>
          <div className="flex justify-center">
            <div className="bg-white border border-gray-700 rounded fixed 
            z-50 max-w-sm w-11/12 opacity-100 px-6 py-4 mx-auto top-14">
            <h1 className="text-2xl sm:text-3xl text-gray-550">
              {isSignup ? "Cadastro" : "Entrar" }
            </h1>
            <div className="flex flex-col w-full mt-2">
              <form ref={formRef} onSubmit={(e) => {handleSubmit(e)}}>
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
                { isSignup &&
                  <>
                    <Input
                      label="Confirme a senha"
                      type="password"
                      property="password"
                      placeholder="*******"
                    />
                    <span>Já tem uma conta? Entre 
                      <a className="cursor-pointer text-blue-450 font-semibold"
                        onClick={() => setIsSignup(false)}
                      > Aqui </a>
                    </span>
                  </>
                }
                <div className="mt-2 flex flex-col">
                  {
                    !isSignup &&
                    <div className="flex flex-wrap">
                      <span className="mr-2">Ainda não tem uma conta?</span>
                      <span>Cadastre-se
                        <a className="cursor-pointer text-blue-450 font-semibold"
                          onClick={() => {setIsSignup(true)}}
                        > Aqui </a>
                      </span>
                    </div>
                  }
                  <Button
                    type="submit"
                    background="primary"
                    text={isSignup ? "Cadastrar" : "Entrar"}
                  />
                </div>
              </form>
            </div>
          </div>
          </div>
        </>
      }
    </>
  )
}