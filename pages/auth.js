import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Input from "../components/Input";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Message from "../components/Message";
import { useRouter } from "next/router";

export default function Auth() {
  const router = useRouter();
  const { currentUser, setCurrentUser, signin, signup } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      router.push('/')
    }
    return () => {
    }
  }, [currentUser]);

  const formRef = useRef();
  const [isSignup, setIsSignup] = useState(false);
  const [status, setStatus] = useState(false);
  const [hasMessage, setHasMessage] = useState(false);
  const [message, setMessage] = useState('');

  const closeMessage = () => {
    setHasMessage(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = formRef.current[0].value;
    const password = formRef.current[1].value;
    if (isSignup) {
      const confirmPassword = formRef.current[2].value;
      if (password !== confirmPassword) {
        setMessage('As senhas informadas são diferentes');
        setHasMessage(true);
        return;
      }
      if (password.length < 6) {
        setMessage('A senha deve ter pelo menos 6 caracteres');
        setHasMessage(true);
        return;
      }
      signup(email, password)
        .then(setStatus(true))
        .catch((error) => {
          console.log(error);
          let message;

          switch (error.code) {
            case "auth/email-already-in-use":
              message = "O e-mail informado já está em uso";
              setHasMessage(true);
              break;
            default:
              break;
          }
          setMessage(message);
        });
    }

    if (!isSignup) {
      console.log(email, password);
      signin(email, password)
        .then(setHasMessage(false))
        .then(console.log('logado'))
        .then((user) => setCurrentUser(user.user.email))
        .catch((error) => {
          let message;

          switch (error.code) {
            case 'auth/wrong-password':
            case 'auth/user-not-found':
              message = 'Usuário ou senha incorretos';
              break;
            case 'auth/invalid-email':
              message = 'E-mail inválido';
              break;
            default:
              message = 'Não foi possível fazer o login. Tente novamente mais tarde';
              break;
          }
          setMessage(message);
        })
      console.log('currentUser: ', currentUser);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{isSignup ? "Cadastro" : "Entrar"}</title>
      </Head>
      <NavBar page={'auth'} />
      <div className="w-full flex-grow">
        <div className="flex flex-col w-full pt-2 px-2 items-center 
          justify-center sm:px-10 md:px-20"
        >
          <div className="min-w-72 sm:min-w-80 flex flex-col items-start 
            justify-center lg:max-w-2xl px-6 py-4 mt-10"
          >
            <h1 className="text-2xl sm:text-3xl text-gray-550 text-left">
              {isSignup ? "Cadastro" : "Entrar"}
            </h1>
            {hasMessage &&
              <Message
                message={message}
                status={status}
                handleClick={closeMessage}
              />
            }
            <form ref={formRef} onSubmit={(e) => { handleSubmit(e) }}>
              <Input
                label="E-mail"
                type="text"
                placeholder="Informe o e-mail"
              />
              <Input
                label="Senha"
                type="password"
                placeholder="*******"
              />
              {isSignup &&
                <>
                  <Input
                    label="Confirme a senha"
                    type="password"
                    placeholder="*******"
                  />
                  <span>Já tem uma conta? Entre 
                    <a className="cursor-pointer text-blue-450 font-semibold"
                      onClick={() => setIsSignup(false)}
                    > Aqui </a>
                  </span>
                  <span className="invisible">12345612345</span>
                </>
              }
              {!isSignup &&
                <div className="flex flex-wrap">
                  <span>Ainda não tem uma conta?</span>
                  <span>Cadastre-se 
                    <a className="cursor-pointer text-blue-450 font-semibold"
                      onClick={() => { setIsSignup(true) }}
                    > Aqui </a>
                  </span>
                </div>
              }
              <div className="mt-2 flex flex-col">
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
      <Footer />
    </div>
  )
}