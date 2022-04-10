import React from 'react';
import './App.css'
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import AboutMe from './Components/AboutMe';
import CodingSkills from './Components/CodingSkills'
import Projects from './Components/Projects/Projects';
import ContactMe from './Components/ContactMe';
const App = () => {

  return (
    <>
      <Header />
      <Dashboard />
      <AboutMe />
      <CodingSkills />
      <Projects />
      <ContactMe />
    </>
  )
}

export default App
