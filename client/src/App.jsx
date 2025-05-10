import React from 'react';
import HomePage from './component/HomePage';
import Services from './component/Services';
import Appointment from './component/Appointment';
import Team from "./component/Team"
import Hc from './component/Hc'
import Testimonial from './component/Testimonial'
import Footer from './component/Footer'
import S2 from './component/S2'
import './App.css'
// import Process from './component/Process'
function App() {
  return (
    <div>
      <HomePage />
      <Services />
        <Appointment />
        <Hc/>
        <Team/>
        <Testimonial/>
        {/* <Process/> */}
        <S2/>
        <Footer/>
    </div>
  );
}

export default App;
