import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import People from "./pages/People"
import Paths from "./pages/Paths"
import PersonDetail from "./pages/PersonDetail"
import NotFound from "./pages/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FS from "./pages/FS"
import AWS from "./pages/AWS"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/paths" element={<Paths />}>
          <Route index path="" element={<FS />}/>
          <Route path="aws" element={<AWS />}/>

        </Route>
        
        
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
