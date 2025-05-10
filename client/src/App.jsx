import { useState, useRef, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate
} from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

// Pages
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import UserDashBoardPage from './pages/UserDashBoardPage';
import DoctorProfile from './pages/DoctorProfile';

// Homepage components
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

// Styles
import './App.css';
import './styles/Onboarding.css';

// Assets
import imgFindDoctors from './assets/3725520.jpg';
import imgBookAppointments from './assets/3951637.jpg';
import imgOnlineConsultation from './assets/OO6PT80.jpg';

const slides = [
  {
    img: imgFindDoctors,
    title: "Find Experienced Doctors",
    desc: "Consulting with a trusted doctor 24/7. Anywhere and anytime",
  },
  {
    img: imgBookAppointments,
    title: "Book Appointments Easily",
    desc: "With a few simple steps, book an appointment with your doctor as needed.",
  },
  {
    img: imgOnlineConsultation,
    title: "Trusted Online Consultation",
    desc: "Consulting with a trusted doctor 24/7. Anywhere and anytime",
  },
];

function SplashOnboardingFlow() {
  const [step, setStep] = useState('splash');
  const navigate = useNavigate();

  if (step === 'splash') {
    return (
      <>
        <div className="splash-logo-large">
          <span role="img" aria-label="stethoscope">🩺</span>
        </div>
        <h1 className="vedacure-title">VedaCure</h1>
        <button className="get-started-btn" onClick={() => setStep(0)}>
          Get Started
        </button>
      </>
    );
  }

  if (typeof step === 'number') {
    const isLast = step === slides.length - 1;
    return (
      <div className="onboarding-container">
        <img src={slides[step].img} alt="" className="onboarding-img" />
        <h2 className="onboarding-title">{slides[step].title}</h2>
        <p className="onboarding-desc">{slides[step].desc}</p>
        <div className="onboarding-dots">
          {slides.map((_, i) => (
            <span key={i} className={i === step ? "dot active" : "dot"} />
          ))}
        </div>
        <button
          className="onboarding-btn"
          onClick={() => isLast ? navigate('/signup') : setStep(step + 1)}
        >
          Start healthy now
        </button>
      </div>
    );
  }

  return (
    <div className="homepage-placeholder">
      <h2>Welcome to the VedaCure Homepage!</h2>
    </div>
  );
}

function LandingHomePage() {
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
      <section data-scroll-section id="home"><HomePage /></section>
      <section data-scroll-section id="about"><About /></section>
      <section data-scroll-section id="services"><Services /></section>
      <section data-scroll-section id="appointment"><Appointment /></section>
      <section data-scroll-section id="hc"><Hc /></section>
      <section data-scroll-section id="team"><Team /></section>
      <section data-scroll-section id="testimonial"><Testimonial /></section>
      <section data-scroll-section id="process"><Process /></section>
      <section data-scroll-section id="s2"><S2 /></section>
      <section data-scroll-section id="footer"><Footer /></section>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashOnboardingFlow />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<UserDashBoardPage />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/home" element={<LandingHomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;