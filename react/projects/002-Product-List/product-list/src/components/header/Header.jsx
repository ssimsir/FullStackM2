import { categories } from "../../helper/data"

function Header({clickChange}){

    
    return(
        <div>
            <h1>Product List</h1>
            <ul>
        {categories.map((kategori, index) => 
          <button onClick={()=>clickChange(kategori)} key={index}>{kategori}</button>
        )}
      </ul>
        </div>
    )
}

export default Header