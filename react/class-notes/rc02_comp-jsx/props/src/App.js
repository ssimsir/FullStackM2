//*default exportun import edilmesi istediğimiz isimle import edebilriz
//import MyCat from "./components/Cat"
import Cat from "./components/Cat"


//? Component
function App() {
  //? JS kodu

  return (
    //! JSX (HTML- JS'nin birleşmiş hali)
    <div className="App">
      <Cat 
          name="Cenitin" 
          img="https://cdn.pixabay.com/photo/2020/03/23/08/45/cat-4959941_1280.jpg"
          color="gray"
          isBlueEyed
      />
      <Cat 
          name="Garfield" 
          img="https://cdn.pixabay.com/photo/2020/03/23/08/45/cat-4959941_1280.jpg"
          color="gray"
          isBlueEyed={true}
      />
      <Cat 
          name="Şeratettin" 
          img="https://cdn.pixabay.com/photo/2020/03/23/08/45/cat-4959941_1280.jpg"
          color="gray"
          isBlueEyed={true}
      />
      {/* <MyCat/> */}
    </div>
  )
}

export default App
