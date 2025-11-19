import {BrowserRouter as Router, Route, Routes } from "react-router"
import AboutMe from "./Components/About/AboutMe"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact"

function App() {


  return (
    <Router>
    <div className="mx-40 my-5  ">
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      {/* <Routes>
         <Route path="/project" element={} />
      </Routes> */}
      <Contact/>
    </div>
    </Router>
  )
}

export default App
