import React, { createContext } from 'react'

const ProductContext = createContext()

const ProductProvider = ({children}) => {
  return (
    <ProductContext.Provider>
      {children}</ProductContext.Provider>
  )
}

export default ProductProvider