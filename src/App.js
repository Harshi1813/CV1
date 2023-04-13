import Navbar from "./Navbar"
import Expertise from "./pages/Expertise"
import Home from "./pages/Home"
import About from "./pages/About"
import cv from "./pages/cv"

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<cv />} />

        </Routes>
      </div>
    </>
  )
}

export default App
