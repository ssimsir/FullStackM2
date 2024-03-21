import Header from "./components/Header";
import "./sass/app.scss"
import data from "./data.js"
import Card from "./components/Card.jsx";
function App() {
  return (
    <>
      <Header />
      {
        data.map(({id, name, job, img, comment})=> (<Card key={id} name={name} job={job} img={img} comment={comment}  />))
      }
    </>
  );
}

export default App;
