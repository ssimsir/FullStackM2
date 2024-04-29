import { useSelector, useDispatch } from "react-redux"
import "./Counter.css"
import { arttir, azalt, sil } from "../../store/counterReducer"

const Counter = () => {
//?global stateden veri olumak iiçin useSelector hooku kullanılır
  const count =useSelector((state)=> state.count )
  const token =useSelector((state)=> state.token )

  const dispach = useDispatch();

  console.log(count)
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <div>
        <button className="counter-button positive" onClick={()=> dispach({type:arttir})}>increase</button>
        <button className="counter-button zero" onClick={()=> dispach({type:sil})}>reset</button>
        <button className="counter-button negative" onClick={()=> dispach({type:azalt})}>decrease</button>
      </div>
    </div>
  )
}

export default Counter
