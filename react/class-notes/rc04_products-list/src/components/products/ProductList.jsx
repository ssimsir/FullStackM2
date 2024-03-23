import ProductCard from "./ProductCard"
import "./Products.scss"


const ProductList = ({products}) => {
    return(
        <div className="products-list">
            {
                products.map(product => <ProductCard key={product.id} {...product}/>)
            }
        </div>
    )
}

export default ProductList