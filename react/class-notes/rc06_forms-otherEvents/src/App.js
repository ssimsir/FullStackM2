import Forms from "./components/1-forms/Forms"
//import KeyboardClipboard from "./components/2-keyboardClipboardEvents/KeyboardClipboard"
//import MouseEvent from "./components/3-mouseEvents/MouseEvent"
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container className="mt-4">
      <Forms />
      {/* <KeyboardClipboard />
      <MouseEvent /> */}
    </Container>
  )
}

export default App
