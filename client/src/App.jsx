// App.jsx
import { useRef, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import './App.css';
import About from "./component/About";
import Appointment from "./component/Appointment";
import Footer from "./component/Footer";
import Hc from "./component/Hc";
import HomePage from "./component/HomePage";
import Process from "./component/Process";
import S2 from "./component/S2";
import Testimonial from "./component/Testimonial";
import Team from "./component/Team";
import Services from "./component/Services";

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });

    return () => scroll.destroy();
  }, []);

  return (
    <div data-scroll-container ref={containerRef}>
      <section data-scroll-section id="home">
        <HomePage />
      </section>

      <section data-scroll-section id="about">
        <About />
      </section>

      <section data-scroll-section id="services">
        <Services />
      </section>

      <section data-scroll-section id="appointment">
        <Appointment />
      </section>

      <section data-scroll-section id="hc">
        <Hc />
      </section>

      <section data-scroll-section id="team">
        <Team />
      </section>

      <section data-scroll-section id="testimonial">
        <Testimonial />
      </section>

      <section data-scroll-section id="process">
        <Process />
      </section>

      <section data-scroll-section id="s2">
        <S2 />
      </section>

      <section data-scroll-section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;