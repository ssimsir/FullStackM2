import { useState } from "react"
import LifeCycleMethods from "./components/LifeCycleMethods"
import UseEffectHook from "./components/UseEffectHook"
import User from "./components/User"

function App() {
  const [goster, setGoster] = useState(true)
  return (
    <div className="container text-center mt-4">

      <button className="btn btn-danger" onClick={() => setGoster(!goster)}>
      {goster ? "Gizle" : "Gizle"}
      </button>

      {
        // goster && <LifeCycleMethods />
        //goster && <UseEffectHook />
        goster && <User />
      }


      
      
    </div>
  )
}

export default App
