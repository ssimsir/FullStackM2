import React, { createContext, useContext } from 'react'

const ThemeContext = createContext()

const useThemeContext = () => {
   return useContext(ThemeContext)
}



const ThemeContextProvicer = ({children}) => {
  return (
    <ThemeContext.Provider value = {{colorMode}}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContextProvicer