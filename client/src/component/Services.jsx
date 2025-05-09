import React from 'react';
import "../Style/Services.css";


export default function Services() {
  const services = [
    {
      icon: '🧑‍⚕️',
      title: 'Angioplasty',
      description: 'Angioplasty is a safe and effective procedure used to treat blocked or narrowed blood vessels.',
      doctors: '36+ Doctors',
    },
    {
      icon: '🌿',
      title: 'Cardiology',
      description: 'Our Cardiology services offer angioplasty to treat blocked or narrowed blood vessels in the heart.',
      doctors: '24+ Doctors',
    },
    {
      icon: '🧬',
      title: 'Endocrinology',
      description: 'We offer specialized angioplasty services to support patients with blood flow issues caused by conditions.',
      doctors: '30+ Doctors',
    },
    {
      icon: '👁️',
      title: 'Eye Care',
      description: 'Our Eye Care services include angioplasty to improve blood flow in the eye’s blood vessels.',
      doctors: '45+ Doctors',
    },
    {
      icon: '💊',
      title: 'Pharmacy',
      description: 'We provide a range of pharmaceutical services to support your health journey.',
      doctors: '20+ Doctors',
    },
    {
      icon: '🩺',
      title: 'Physiotherapy',
      description: 'Our physiotherapy services help patients recover and improve mobility post-surgery.',
      doctors: '18+ Doctors',
    }
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <button className="services-tag">Our Services</button>
        <h1>
          Begin your journey to <span className="highlight-blue">better health</span> with our wellness services.
        </h1>
      </div>

      <div className="services-grid-wrapper">
        <div className="services-grid">
          {services.map((service, idx) => (
            <div className="service-card" key={idx}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-footer">🔵 {service.doctors}</div>
            </div>
          ))}

          {/* Phone image inside the grid, absolutely positioned over last two cards */}
        </div>
      </div>
    </div>
  );
}
