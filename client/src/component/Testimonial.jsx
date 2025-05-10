import React, { useState } from "react";
import image from "../assets/image/d6.jpg"
const testimonials = [
  {
    text: `"I've been using GreenLeaf Health for a few months, and I'm really happy with it! The articles are easy to read and full of helpful tips. The workout plans are simple to follow, and the meal ideas are healthy and tasty. I also love the community – it's nice to talk to others who are working on their health too. Since I started using GreenLeaf Health, I feel more energetic and healthier. I definitely recommend it to anyone who wants to get healthier!"`,
    name: "Mobarak Isx",
    role: "Content creator",
    img: "/images/doctor1.jpg", 
  },
  {
    text: `"GreenLeaf Health has completely changed my approach to wellness. The support and content are fantastic. It's a must for anyone serious about their health!"`,
    name: "Sarah Jensen",
    role: "Fitness Blogger",
    img: "/images/doctor2.jpg",
  }
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-image">
          <img src={image} alt={testimonial.name} />
        </div>
        <div className="testimonial-content">
          <button className="testimonial-badge">Testimonials</button>
          <p className="testimonial-text">{testimonial.text}</p>
          <h4 className="testimonial-name">{testimonial.name}</h4>
          <p className="testimonial-role">{testimonial.role}</p>
          <div className="testimonial-line"></div>
        </div>
      </div>

      <div className="testimonial-nav">
        <button className="nav-btn" onClick={prev}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" stroke="black" strokeWidth="2" fill="none" />
          </svg>
        </button>
        <button className="nav-btn" onClick={next}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6" stroke="black" strokeWidth="2" fill="none" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
