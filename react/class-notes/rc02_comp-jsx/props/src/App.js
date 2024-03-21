//*default exportun import edilmesi istediğimiz isimle import edebilriz
//import MyCat from "./components/Cat"
import Cat from "./components/Cat"


//? Component
function App() {
  //? JS kodu

  return (
    //! JSX (HTML- JS'nin birleşmiş hali)
    <div className="App">
      <Cat/>
      {/* <MyCat/> */}
    </div>
  )
}

export default App
