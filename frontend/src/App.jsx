import { useState } from 'react'
import Navbar from "./components/navbar/navbar.jsx"
import Home from './components/home/home.jsx'
import About from './components/About/About.jsx'
import './App.css'
import Skill from './components/Skill/Skill.jsx'
import Project from './components/Project/Project.jsx'
import Signup from './components/signup/Signup.jsx'
import Signin from './components/signin/Signin.jsx'
import Project1 from './components/Project/project1.jsx'
import Project2 from "./components/Project/project2.jsx"
import Project3 from "./components/Project/project3.jsx"
import Project4 from "./components/Project/project4.jsx"
import Project5 from "./components/Project/project5.jsx"
import Project6 from "./components/Project/project6.jsx"
import Footer from './components/Footer/Footer.jsx'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skill' element={<Skill />} />
          <Route path='/project' element={<Project />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/project1' element={<Project1 />} />
          <Route path='/project2' element={<Project2 />} />
          <Route path='/project3' element={<Project3 />} />
          <Route path='/project4' element={<Project4 />} />
          <Route path='/project5' element={<Project5 />} />
          <Route path='/project6' element={<Project6 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
