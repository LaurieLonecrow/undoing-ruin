import { createContext, useContext } from 'react'
import { useFirebaseAuth } from '../firebase/useFirebaseAuth';

const authUserContext = createContext({
  authUser: null,
  loading: true,
  signIn: async () => {},
  logOut: async () => {}
});

export const AuthUserProvider = ({ children }) => {
  const auth = useFirebaseAuth();
  return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
}

export const useAuthUserContext = () => useContext(authUserContext);
