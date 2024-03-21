import Buton from "../button/Button";
// import "./Card.css";
import CardStyle from "./Card.module.css";

//* module.css'de derleyici CSS class'larini alarak bunlari unique olacak
//* sekilde yeniden adlandirir. (Ornek: card_title__XaSde)
//* Bu durumda, global scope problemi ortadan kalktigi icin stillerin
//* baska class tarafindan ezilmesi (overriding) engellenir.
//* CCS module Webpack, Browsify gibi tool'lar ile kullanilabilir.

const Card = ({ lang, img }) => {
  return (
    <div>
      {/* <div className="wrapper"> */}
      <div className={CardStyle.wrapper}>
        <h1>{lang} </h1>
      </div>
      {/* <img className="images" src={img} alt={lang} /> */}
      <img className={CardStyle.images} src={img} alt={lang} />
      <Buton />
    </div>
  );
};
export default Card;
