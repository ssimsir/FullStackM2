import { useState } from "react";
import Header from "./components/header/Header";
import ProductCard from "./components/productCard/ProductCard";


function App() {
  const [selectedCategori,SetSelectedCategori]=useState("all")
  const categoryChange=(kategori)=>{
    SetSelectedCategori(kategori)
  }

  return (
    <div>
      <Header clickChange={categoryChange}/>
      <ProductCard  kategori={selectedCategori}/>
    </div>
  );
}

export default App;
