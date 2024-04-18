import { createContext, useState } from "react";

//?Login contexinin tanımlanması
export const LangContext = createContext()


//?Login contex için sarmalayıcı contex oluşturduk
const LangProvider = (props) => {
   const [currLang, setCurrLang] = useState({lang:"en"})
   const values = {currLang, setCurrLang}
   return <LangProvider.Provider value={values}>
      {props.children}
      
      </LangProvider.Provider>
}

export default LangProvider