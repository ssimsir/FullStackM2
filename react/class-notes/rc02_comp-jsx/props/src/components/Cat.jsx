//*React importu artık zorunlu değil
//import React from "react";

import { Name } from "./Name";

//?Componentler decleration veya arrow function ile oluşturulabilir
const Cat = (props) => {
  return (
    //* JSX ifadeleri birden fazla ise mutlaka bir parent ile sarmalanmalıdır
    <div>
        <Name name={props.name}/>

        {/* JSX içerisinde if else  kullanılmaz ternaru kullanılır */}

        <p>Blue Eyed ? {props.isBlueEyed ?  "Yes": "No"}</p>
      <img 
        src={props.img} 
        alt="cat-image"
        height="300px" />
      <p>Color : {props.color}</p>
      <hr />
    </div>
  );
};

export default Cat