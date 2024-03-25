//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede tanimlanmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react/hooks#state-hooks
//* =============================================================

import { useState } from "react"

const UseStateCounter = () => {
  //? local variable
  //   let sayac = 0
  //? useState hook'u ile sayac adinda bir state tanimladik.
  const [sayac, setSayac] = useState(20)

  const handleInc = () => {
    // sayac = sayac + 1

    //? sayac state'nin degerini setSayac metodu ile bir arttırdik
    setSayac(sayac + 1)
  }

  return (
    <div>
      <h2>UseState Counter</h2>
      <h1>Count:{sayac}</h1>
      <button onClick={handleInc}>INC</button>
      <button onClick={() => setSayac(0)}>CLR</button>
      <button onClick={() => setSayac(sayac - 1)}>DEC</button>
    </div>
  )
}

export default UseStateCounter