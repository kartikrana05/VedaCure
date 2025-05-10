import React from 'react';
import d8 from '../assets/image/d8.jpg';
import d9 from '../assets/image/d9.jpg';
import d5 from "../assets/image/d5.jpg";

const steps = [
  {
    number: '01',
    title: 'Book an appointment',
    description: 'Book an appointment online, by phone, or visit us in person.',
    image: d8,
  },
  {
    number: '02',
    title: 'Get evaluated',
    description: 'Consult with our healthcare experts for a diagnosis.',
    image: d9,
  },
  {
    number: '03',
    title: 'Receive care',
    description: 'Book your appointment online, over the phone, or in person.',
    image: d5,
  },
];

const WorkProcess = () => {
  return (
    <section className="work-process-section" data-scroll>
      <div className="section-header" data-scroll data-scroll-speed="1.5">
        <span className="section-label">● Our work process</span>
        <h2>How it works</h2>
      </div>

      <div className="work-grid" data-scroll data-scroll-speed="1.2">
        {steps.map((step, index) => (
          <div className="work-card" key={index} data-scroll data-scroll-speed="1">
            <div className="step-number">{step.number} <span>Step</span></div>
            <img src={step.image} alt={step.title} className="work-image" />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
