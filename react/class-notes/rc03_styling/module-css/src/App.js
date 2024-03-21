import Card from "./components/card/Card"
import data from "./data"
function App() {


  return (

    <div className="App">
      <h2 style={{textAlign:"center"}}>LANGUAGES</h2>

      {
        // Rendering list
        //Herbir elemanın uniq bir keye sahip olması gerekir
        data.map((item, i)=>{
          return <Card key={item.id} lang={item.language} img={item.img} />
        })
      }

    </div>
  )
}

export default App
