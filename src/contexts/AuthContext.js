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
import { query, limitToLast } from "firebase/database";
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
  const [clubs, setClubs] = useState([]);
  const [managers, setManagers] = useState([]);
  const [lastRound, setLastRound] = useState("");
  
  useEffect(() => {
    const user = localStorage.getItem('logged-user') ?? null;
    setCurrentUser(user);
    
    getClubs();
    getManagers();

    const unsubscribe = false;
    
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      unsubscribe = true;
    });
    
    return unsubscribe;
  }, [])
  
  function getClubs() {
    const clubs = ref(db, '2022/clubs');
      onValue(clubs, (snapshot) => {
      setClubs(snapshot.val());
    });
  }

  function getManagers() {
    const managers = ref(db, '2022/managers');
      onValue(managers, (snapshot) => {
      setManagers(snapshot.val());
    });
  }

  function getLastRound() {
    const rounds = ref(db, '2022/rounds');
    const result = query(rounds, limitToLast(1));
    onValue(result, (snapshot) => {
      setLastRound((Object.keys(snapshot.val())[0]));
    }, {
      onlyOnce: true
    });
  }

  function addRound(date, time, home, away) {
    getLastRound();
    while(!lastRound) {
      setTimeout(() => {
        
      }, 50);
    }
    
    
  }
  
  function addMatch() {
    const roundsRef = ref(db, '2022/matches');
    const newRoundsRef = push(roundsRef);
  
    set(newRoundsRef, {
      username: name,
      email: email,
      isAdmin: false
    })
  }

  function signup(email, password, name) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const usersRef = ref(db, '2022/users');
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
        clubs,
        managers,
        currentUser,
        errorMessage,
        setCurrentUser,
        signup,
        signin,
        signout,
        addRound
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}