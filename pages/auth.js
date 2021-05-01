import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import Input from "./Input";
// import Button from "./Button";
// import { useContext, useRef, useState } from "react";
// import { AuthContext } from "../contexts/AuthContext";

export default function Auth() {
  /* const { currentUser, setCurrentUser, signin, signout, signup } = useContext(AuthContext);

  const formRef = useRef();
  const [wasLoginClicked, setWasLoginClicked] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const email = formRef.current[0].value;
    const password = formRef.current[1].value;
    
    if (isSignup) {
      const confirmPassword = formRef.current[2].value;
      setError('');
      if (password !== confirmPassword) {
        setError('As senhas informadas são diferentes');
        return;
      }
      if (password.length < 6) {
        setError('A senha deve ter pelo menos 6 caracteres');
        return;
      }
      signup(email, password)
      .then(setSuccess('Usuário cadastrado com sucesso'))
      .catch((error) => {
        console.log(error);
      });
    }
    
    if (!isSignup) {
      signin(email, password)
      .then((user) => setCurrentUser(user.user.email))
      .catch((error) => {
        let message;

        switch(error.code) {
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
        setError(message);
      })
    }
  }

  function closeModal() {
    setWasLoginClicked(false);
    setError('');
    setSuccess('');
  } */

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Cadastro</title>
      </Head>
      <NavBar page={'add'} />
      <div className="w-full flex-grow">
        <div className="flex flex-col w-full pt-2 px-2 sm:px-10 md:px-20">
          <h1 className="sm:px-10 md:px-20 text-xl sm:text-2xl text-gray-550">
            Em desenvolvimento
          </h1>
          {/* <form ref={(el) => setForm(el)}>
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
          } */}


          {
            /* {
              wasLoginClicked &&
              <>
                <div className="overflow-x-hidden
              overflow-y-auto fixed inset-0 z-10 outline-none focus:outline-none
                w-full bg-black opacity-25"
                  onClick={() => closeModal()}
                >
                </div>
                <div className="flex justify-center">
                  <div className="bg-white border border-gray-700 rounded fixed 
                  z-50 max-w-sm w-11/12 opacity-100 px-6 py-4 mx-auto top-14">
                  {
                    error &&
                    <div className="bg-red-400 text-red-50 mb-2 px-2 py-1 text-center
                      rounded">
                      {error}
                    </div>
                  }
                  {
                    success &&
                    <div className="bg-green-400 text-green-50 mb-2 px-2 py-1 text-center
                      rounded">
                      {success}
                    </div>
                  }
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
            } */
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}