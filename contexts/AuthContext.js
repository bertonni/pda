/* import { createContext, useEffect, useState } from "react";
import { auth } from '../utils/db/firebase';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function signin(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function signout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, [])


  const value = {
    currentUser,
    setCurrentUser,
    signup,
    signin,
    signout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
 */