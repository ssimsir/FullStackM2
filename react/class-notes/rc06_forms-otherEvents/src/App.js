//import Forms from "./components/1-forms/Forms"
//import KeyboardClipboard from "./components/2-keyboardClipboardEvents/KeyboardClipboard"
import MouseEvent from "./components/3-mouseEvents/MouseEvent"
import Container from 'react-bootstrap/Container';
//import FormsObject from "./components/1-forms/FormsObject";

function App() {
  return (
    <Container className="mt-4">
      {/* <FormsObject /> */}
       {/* <KeyboardClipboard /> */}
      <MouseEvent />
    </Container>
  )
}

export default App
