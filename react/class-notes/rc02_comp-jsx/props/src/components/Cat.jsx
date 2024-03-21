//*React importu artık zorunlu değil
//import React from "react";

import { Name } from "./Name";

//?Componentler decleration veya arrow function ile oluşturulabilir
const Cat = () => {
  return (
    //* JSX ifadeleri birden fazla ise mutlaka bir parent ile sarmalanmalıdır
    <div>
        <Name/>
      <img src="https://cdn.pixabay.com/photo/2020/03/23/08/45/cat-4959941_1280.jpg" alt="cat-image"
      height="300px" />
      <p>Color : Gray</p>
      <hr />
    </div>
  );
};

export default Cat