import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from "./component/About"
import Appointment from "./component/Appointment"
import Footer from "./component/Footer"
import Hc from "./component/Hc"
import HomePage from "./component/HomePage"
import Process from "./component/Process"
import S2 from "./component/S2"
import Testimonial from "./component/Testimonial"
import Team from "./component/Team"
import Services from "./component/Services"
function App() {

  return (
    <div>
      <HomePage/>
      <About/>
      <Services/>
      <Appointment/>
      <Hc/>
      <Team/>
      <Testimonial/>
      <Process/>
      <S2/>
    <Footer/>
    </div>
  )
}

export default App;
