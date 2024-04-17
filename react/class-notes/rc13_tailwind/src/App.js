import FlexAndResponsive from "./components/FlexAndResponsive";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 className="text-center text-2xl text-purple-700">Hello Tailwind</h1>
      <FlexAndResponsive />
    </div>
  );
}

export default App;
