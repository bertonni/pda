import Button from "../components/Button";
import Input from "../components/Input";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Message from "../components/Message";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function Auth() {
  const { errorMessage, signin, signup } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('logged-user'));
    if (user) {
      router.push('/');
    }
  }, []);

  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [isSignup, setIsSignup] = useState(false);
  const [status, setStatus] = useState(false);
  const [hasMessage, setHasMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [sendingRequest, setSendingRequest] = useState(false);

  const closeMessage = () => {
    setHasMessage(false);
  }

  const sleep = (seconds) => {
    setTimeout(() => setSendingRequest(false), seconds * 1000);
  }

  const handleShowForm = () => {
    setIsSignup(!isSignup);
    if (nameRef.current) {
      nameRef.current.value = nameRef.current.value.trim() !== '' ? '' : null;
    }
    if (emailRef.current) {
      emailRef.current.value = emailRef.current.value.trim() !== '' ? '' : null;
    }
    if (passwordRef.current) {
      passwordRef.current.value = passwordRef.current.value.trim() !== '' ? '' : null;
    }
    if (confirmPasswordRef.current) {
      confirmPasswordRef.current.value = confirmPasswordRef.current.value.trim() !== '' ? '' : null;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = formRef.current.name.value;
    const email = formRef.current.email.value;
    const password = formRef.current.password.value;

    if (email.trim() === '' || password.trim() === '') {
      setMessage('Os campos são obrigatórios');
      setHasMessage(true);
      return;
    }

    if (isSignup) {
      if (name.trim() === '') {
        setMessage('Os campos são obrigatórios');
        setHasMessage(true);
        return;
      }
      const confirmPassword = formRef.current.confirmPassword.value;
      if (password !== confirmPassword && confirmPassword.trim() !== '') {
        setMessage('As senhas informadas são diferentes');
        setHasMessage(true);
        return;
      }
      if (password.length < 6) {
        setMessage('A senha deve ter pelo menos 6 caracteres');
        setHasMessage(true);
        return;
      }
      setSendingRequest(true);
      signup(email, password, name);
    }

    if (!isSignup) {
      setSendingRequest(true);
      signin(email, password);

      if (errorMessage) {
        console.log('error message:', errorMessage);
        switch (errorMessage) {
          case 'auth/invalid-email':
            setMessage('E-mail inválido');
            setHasMessage(true);
            break;
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            setMessage('Usuário ou senha incorretos!');
            setHasMessage(true);
            break;
          case 'auth/email-already-in-use':
            setMessage('O e-mail informado já está cadastrado!');
            setHasMessage(true);
            break;
        }
      }
    }
  }

  return (
    <Layout title={isSignup ? "Cadastro" : "Entrar"} page="auth">
      <div className="flex flex-col w-full pt-2 px-2 items-center 
          justify-center sm:px-10 md:px-20"
      >
        <div className="min-w-72 sm:min-w-80 flex flex-col items-start 
            justify-center lg:max-w-2xl px-6 py-4 xs:py-6 xs:px-12 mt-10 xs:border"
        >
          <h1 className="text-2xl sm:text-3xl text-gray-550 text-left mb-4">
            {isSignup ? "Cadastro" : "Entrar"}
          </h1>
          <form ref={formRef} onSubmit={(e) => { handleSubmit(e) }}>
            {isSignup && 
              <Input
              label="Nome"
              name="name"
              type="text"
              refs={nameRef}
              placeholder="Informe o seu nome"
              />
            }
            <Input
              label="E-mail"
              name="email"
              type="email"
              refs={emailRef}
              placeholder="Informe o e-mail"
            />
            <Input
              label="Senha"
              name="password"
              type="password"
              refs={passwordRef}
              placeholder="Informe a senha"
            />
            {isSignup &&
              <>
                <Input
                  label="Confirme a senha"
                  name="confirmPassword"
                  type="password"
                  refs={confirmPasswordRef}
                  placeholder="Confirme a senha"
                />
                <span>Já tem uma conta? Entre
                  <a className="cursor-pointer text-blue-450 font-semibold"
                    onClick={() => handleShowForm()}
                  > Aqui </a>
                </span>
                <span className="invisible">12345612345</span>
              </>
            }
            {!isSignup &&
              <div className="flex flex-wrap gap-1">
                <span>Ainda não tem uma conta?</span>
                <span>Cadastre-se
                  <a className="cursor-pointer text-blue-450 font-semibold"
                    onClick={() => { handleShowForm() }}
                  > Aqui </a>
                </span>
              </div>
            }
            <div className="mt-2 flex flex-col items-center justify-center">
              {!sendingRequest ?
                <Button
                  type="submit"
                  background="primary"
                >
                  {isSignup ? "Cadastrar" : "Entrar"}
                </Button>
                :
                <Button
                  type="submit"
                  background="primary"
                >
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Aguarde
                </Button>
              }
            </div>
            {hasMessage &&
              <Message
                message={message}
                status={status}
                handleClick={closeMessage}
              />
            }
          </form>
        </div>
      </div>
    </Layout>
  )
}
