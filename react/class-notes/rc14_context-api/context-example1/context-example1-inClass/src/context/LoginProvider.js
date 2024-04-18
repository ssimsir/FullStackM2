import { createContext, useState } from "react";

//?Login contexinin tanımlanması
export const LoginContext = createContext()


//?Login contex için sarmalayıcı contex oluşturduk
const LoginProvider = (props) => {
   const [signed, setSigned] = useState(false)
   const values = {signed, setSigned}
   return <LoginContext.Provider value={values}>
      {props.children}
      
      </LoginContext.Provider>
}

export default LoginProvider