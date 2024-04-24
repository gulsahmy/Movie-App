
import React, { createContext } from 'react'

const Authcontext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext);
};

const AuthProvider = () => {
  return (
    <Authcontext.Provider value={values}> {children} </Authcontext.Provider.Provider>;
  )
}

export default AuthProvider