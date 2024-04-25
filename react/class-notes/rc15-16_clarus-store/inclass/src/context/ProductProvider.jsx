import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


//! 1.adım contexti oluştur
const ProductContext =  createContext()

export const useProductContext = () => {
   return useContext(ProductContext)
}

const ProductProvider = ({children}) => {

   const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState("");

	const getData = async () => {
		setLoading(true);
		try {
			const {
				data: { products },
			} = await axios(`https://dummyjson.com/products/search?q=${search}`);
			setProducts(products);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search]);



   const values = {products, loading, search, setSearch}
	return (
   <ProductContext.Provider value={values}>
      {children}
   </ProductContext.Provider>)
};

export default ProductProvider;
