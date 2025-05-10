import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import UserDashBoardPage from './pages/UserDashBoardPage'
import BookAppointment from './pages/BookAppointment'
import DoctorProfile from './pages/DoctorProfile'
import './App2.css'
import './styles/Onboarding.css'
import './styles/SplashScreen.css'
import './styles/UserDashBoardPage.css'
import './styles/BookAppointment.css'
import './styles/DoctorProfile.css'
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

  // Homepage placeholder
  return (
    <div className="homepage-placeholder">
      <h2>Welcome to the VedaCure Homepage!</h2>
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
        <Route path="/book-appointment/:id" element={<BookAppointment />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
