// import {BrowserRouter as Router, Route, Routes } from "react-router"
import AboutMe from "./Components/About/AboutMe"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact"

function App() {


  return (
    <div className="">
      <Navbar/>
    <div className="mx-auto my-5 max-w-[1140px]   ">
      <Hero/>
      <AboutMe/>
      <Projects/>
   
      <Contact/>
    </div>
    </div>
  )
}

export default App
