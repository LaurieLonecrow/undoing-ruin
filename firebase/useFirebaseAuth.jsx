import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { app } from './firebase';
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

const auth = getAuth(app)

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email
});

export const useFirebaseAuth = () => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const authStateChanged = async (authState) => {
    if (!authState) {
      setLoading(false)
      return;
    }
    setLoading(true)
    var formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signIn = async (email, password) =>
    await signInWithEmailAndPassword(auth, email, password)
      .then(authUser => {
        console.log("Success. The user is created in firebase", authUser)
        router.push('/admin');
      })
      .catch(error => {
        console.log(error.message)
      });

  const logOut = async () => {
    await signOut(getAuth()).then(clear);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signIn,
    logOut
  };
}