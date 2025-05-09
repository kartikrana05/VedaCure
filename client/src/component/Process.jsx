// import React from "react";
// import "../Style/Process.css";
// import step1 from "../assets/image/step1.png";
// import step2 from "../assets/image/step2.png";
// import step3 from "../assets/image/step3.png";

// const steps = [
//   {
//     number: "01",
//     title: "Book an appointment",
//     desc: "Book an appointment online, by phone, or visit us in person.",
//     icon: step1,
//   },
//   {
//     number: "02",
//     title: "Get evaluated",
//     desc: "Consult with our healthcare experts for a diagnosis.",
//     icon: step2,
//   },
//   {
//     number: "03",
//     title: "Receive care",
//     desc: "Book your appointment online, over the phone, or in person.",
//     icon: step3,
//   },
// ];

// const WorkProcess = () => {
//   return (
//     <section className="work-section">
//       <div className="work-badge">● Our work process</div>
//       <h2 className="work-heading">How it work</h2>
//       <div className="work-cards">
//         {steps.map((step, index) => (
//           <div className="work-card" key={index}>
//             <div className="work-step">
//               .{step.number} <span>Step</span>
//             </div>
//             <img src={step.icon} alt={step.title} className="work-icon" />
//             <h3 className="work-title">{step.title}</h3>
//             <p className="work-desc">{step.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WorkProcess;
