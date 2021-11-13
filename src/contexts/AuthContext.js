import { createContext, useEffect, useState } from "react";
import {
  auth,
  db,
  push,
  ref,
  set,
  onValue,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from '../utils/db/firebase';
import { useRouter } from "next/router";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const router = useRouter();

  // const loggedUser = localStorage.getItem('logged-user') ?? null;
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
    isAdmin: false,
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const user = localStorage.getItem('logged-user') ?? null;
    setCurrentUser(user);
    const unsubscribe = false;
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      unsubscribe = true;
    });

    return unsubscribe;
  }, [])

  function signup(email, password, name) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const usersRef = ref(db, 'users');
        const newUserRef = push(usersRef);
        
        setCurrentUser(userCredential.user);
        localStorage.setItem('logged-user', JSON.stringify(userCredential.user.email))

        set(newUserRef, {
          username: name,
          email: email,
          isAdmin: false
        })
        router.push('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorMessage(errorCode);
        console.log(errorCode);
      });
  }

  function signin(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setCurrentUser(userCredential.user);

        const data = ref(db, 'managers');

        const admins = onValue(data, (snapshot) => {
          return snapshot.val();
        });

        const usersData = ref(db, 'users');
        const users = onValue(usersData, (snapshot) => {
          return snapshot.val();
        });

        console.log(admins, users);

        localStorage.setItem('logged-user', JSON.stringify(userCredential.user.email))
        router.push('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorMessage(errorCode);
        console.log(errorCode);
      });
  }

  function signout() {
    signOut(auth).then(() => {
      setCurrentUser(null);
      localStorage.removeItem('logged-user');
      router.push('/auth');
    })
      .catch((error) => {
        const errorCode = error.code;
        setErrorMessage(errorCode);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        errorMessage,
        setCurrentUser,
        signup,
        signin,
        signout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}