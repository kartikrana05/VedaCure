import React from "react";
import img from "../assets/image/d5.jpg"

const doctors = [
  {
    name: "Dr. James Roberts",
    title: "Certified Cardiologist",
    img: "/path-to-image1.jpg",
  },
  {
    name: "Dr. Emily Clark",
    title: "Experienced Pediatrician",
    img: "/path-to-image2.jpg",
  },
  {
    name: "Dr. Michael Thompson",
    title: "Skilled Internal Medicine",
    img: "/path-to-image3.jpg",
  },
  {
    name: "Dr. David Lee",
    title: "Trusted Dermatologist",
    img: "/path-to-image4.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <button className="team-button">Meet our team</button>
      <h2 className="team-heading">
        Experienced and <span className="highlight">Skilled Team</span> of Experts
      </h2>
      <div className="team-grid">
        {doctors.map((doc, index) => (
          <div key={index} className="team-card">
            <img src={img} alt={doc.name} className="team-image" />
            <h3 className="team-name">{doc.name}</h3>
            <p className="team-title">{doc.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
