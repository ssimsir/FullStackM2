import React from "react";
// import "./Buton.css";
import ButonStyle from "./Button.module.css";

//* Eğer CSS'deki class adi kebap-case seklinde yazilmis ise
//* module ile bu class'a erismek icin ornekte goruldugu gibi
//* koseli parentez ile erisim yapilir.Koseli parentez erisimi
//* en garanti yontemdir.

//* ORN:moduleName["class-adi"]

const Buton = () => {
  return (
    <div className={ButonStyle.wrapper}>
      <button className={`${ButonStyle.btn} ${ButonStyle["btn-blue"]}`}>
        Info
      </button>
      <button className={`${ButonStyle.btn} ${ButonStyle["btn-red"]}`}>
        Back
      </button>
    </div>
  );
};

export default Buton;
