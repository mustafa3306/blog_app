import React, {useContext, CreateContext} from 'react';

const AuthContext = createContext();

//defining a function to get data from Auth context
export function useAuth(){
    return useContext(AuthContext);
}


const AuthContextProvider = () => {

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }  

  return (
    <div>

    </div>
  )
}

export default AuthContextProvider