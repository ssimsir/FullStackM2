import Header from "./components/header/Header"
import ProductList from "./components/products/ProductList"

import {products, categories} from "./helper/data"

import "./App.scss"
//? Component
function App() {

  return (

    <div>
      <Header categories = {categories} text = "Products List"/>
      <ProductList products = {products}/>
    </div>
  )
}

export default App
