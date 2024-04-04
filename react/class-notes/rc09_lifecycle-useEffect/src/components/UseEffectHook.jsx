//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

import { useEffect, useState } from "react"

//! useEffect(() => {
//*   /* ComponentDidMount code */
//*      Kodlar
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [state1, state2]);

//! useEffect(() => {
//?   /* ComponentDidMount code */
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [state1, state2]); //? Dependency Array

const UseEffectHook = () => {
  const [count, setCount] = useState(0)

  // useEffect (() => {
  //     console.log("2- component did mount")

  //     return () => {
  //       console.log("4- component will unmount")
  //     }

  // }, [])


  useEffect(() => {
    console.log("2- componentDidmount")
    console.log("2- componentDidupdate")
  }, [count])
  

  
  console.log("1-rendering")

  return (
    <div className="container text-center">
    <h1 className="text-danger">USE EFFECT HOOK</h1>
    <h3>COUNT={count}</h3>
    <button className="btn btn-info" onClick={() => setCount(count+1)}>
      INC
    </button>
  </div>
  )
}

export default UseEffectHook
