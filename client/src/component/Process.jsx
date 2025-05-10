import React from 'react';
import bookIcon from '../assets/image/book.png';
import evaluateIcon from '../assets/image/evaluate.png';
import careIcon from '../assets/image/care.png';

const steps = [
  {
    number: '01',
    title: 'Book an appointment',
    description: 'Book an appointment online, by phone, or visit us in person.',
    image: bookIcon,
  },
  {
    number: '02',
    title: 'Get evaluated',
    description: 'Consult with our healthcare experts for a diagnosis.',
    image: evaluateIcon,
  },
  {
    number: '03',
    title: 'Receive care',
    description: 'Book your appointment online, over the phone, or in person.',
    image: careIcon,
  },
];

const WorkProcess = () => {
  return (
    <section className="work-process-section">
      <div className="section-header">
        <span className="section-label">● Our work process</span>
        <h2>How it work</h2>
      </div>

      <div className="work-grid">
        {steps.map((step, index) => (
          <div className="work-card" key={index}>
            <div className="step-number">.{step.number} <span>Step</span></div>
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
