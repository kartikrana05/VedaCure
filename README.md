# VedaCure
A Veersa Hackathon 2026 Project Submission

# Introduction
VedaCure is a full-stack telehealth solution built to make healthcare accessible, fast, and secure — right from your home. Patients can log in, describe their symptoms, and instantly search for relevant doctors, then book appointments in real-time.

Designed with inspiration from the pandemic-era challenges, VedaCure aims to eliminate delays, bridge the doctor-patient gap, and offer a smarter way to connect with healthcare professionals using cutting-edge technology.

# LIVE DEMO
https://www.canva.com/design/DAGnKeIfk9c/OA9ByxuGn7s5Kw1-a8oqSA/edit?utm_content=DAGnKeIfk9c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

https://github.com/user-attachments/assets/b6d386a6-29d0-449a-a4f9-2e5bca12269e



# Backend deployed on render
https://veda-cure.onrender.com

# Frontend Pages
![WhatsApp Image 2025-05-11 at 22 31 34_5d257a13](https://github.com/user-attachments/assets/968696ce-6334-40ed-9d43-c4f02112682e)

![WhatsApp Image 2025-05-11 at 22 31 35_e4bc90f4](https://github.com/user-attachments/assets/d5083637-c956-4fbe-995b-34eacd2a160b)

![WhatsApp Image 2025-05-11 at 22 31 36_8f4a6849](https://github.com/user-attachments/assets/825a9400-98f8-4b95-b654-036fe394dcc2)

![WhatsApp Image 2025-05-11 at 22 31 36_78d9166b](https://github.com/user-attachments/assets/abc94ee4-e403-4b46-9cdb-459d0cbdbada)

![WhatsApp Image 2025-05-11 at 22 31 37_07194d14](https://github.com/user-attachments/assets/c0dd028e-d442-4a6f-85f7-a5ee9245b864)

![WhatsApp Image 2025-05-11 at 22 31 37_6d658455](https://github.com/user-attachments/assets/02e76650-9a90-4c89-a395-5232bb20f025)

![WhatsApp Image 2025-05-11 at 22 31 38_85bec4d0](https://github.com/user-attachments/assets/d4a67aaa-84e7-47a7-9021-5ee2f9376198)

![WhatsApp Image 2025-05-11 at 22 31 40_198875b6](https://github.com/user-attachments/assets/b87e3ab3-dd7a-4426-b7cc-06c1e1c96ba6)

![WhatsApp Image 2025-05-11 at 22 31 39_f76b7cd9](https://github.com/user-attachments/assets/c14befa7-b6d8-4ba1-aa16-c9dae1acece2)

![WhatsApp Image 2025-05-11 at 22 31 41_e9907082](https://github.com/user-attachments/assets/d90cff50-6e34-44ff-bb9f-75f0d449fcd3)

![WhatsApp Image 2025-05-11 at 22 31 39_fabf98a9](https://github.com/user-attachments/assets/7a6b6b3e-6cc9-4a68-9142-00bbba068c6c)

![WhatsApp Image 2025-05-11 at 22 31 39_b7c6a321](https://github.com/user-attachments/assets/25e0e84a-2523-4bc3-9d8a-c46f1933b342)

# API Testing

- API Testing	: Postman

![WhatsApp Image 2025-05-11 at 17 26 59_feeb29e0](https://github.com/user-attachments/assets/6416f190-414f-40f2-a075-5a046cfbdd74)
![WhatsApp Image 2025-05-11 at 17 26 59_c1a1d434](https://github.com/user-attachments/assets/69ff1589-c8dd-4b24-8deb-8a63fc11528c)
![WhatsApp Image 2025-05-11 at 17 26 59_669fb42c](https://github.com/user-attachments/assets/21e16b0e-1a1e-48af-a18d-48090b7c0738)



MongoDB Collection

![WhatsApp Image 2025-05-11 at 17 28 14_bfdfe710](https://github.com/user-attachments/assets/06cd7e38-3b60-4534-943e-1ace87cc4851)



Veda (healthcare assistant) built using chatbase (Integration left)

![WhatsApp Image 2025-05-11 at 17 39 42_e8c530ab](https://github.com/user-attachments/assets/900c3831-8d42-4896-a055-fedf435774dc)


# Features
📹 Real-Time Video Consultations (Pending Integration)

🔐 Secure Patient Information Management

📩 Email/Profile Verification by Nodemailer

💳 Payment Integration via Stripe (Pending)

💬 In-App Chat Functionality (Pending)

📝 Real-Time Transcription Using Google Cloud Speech-to-Text (Pending)

🧾 Custom Prescriptions and Reports (Pending)

📜 HIPAA-Compliant Data Storage (Pending)

🌐 Multi-Language Support (Pending)

# What It Does
👤 Patient Login & Onboarding

Users can register, log in, and create profiles.

🔍 Doctor Search by Symptoms

Patients enter symptoms → system suggests matching doctors.

📆 Book Appointments

Real-time availability , Past/occupied slots are automatically disabled , No double-bookings — smart validation in place

🧪 Tested Backend APIs

All backend APIs have been tested using Postman , Ensures secure and error-free request handling

# How we Built it
In order to build any application or software first, we need to understand what the project wants from us. So we first analysed the problem statement, then in our group discussion we all proposed some ideas out of which some were rejected while others were brainstormed upon.

Before getting into coding we made wireframes for how our site should look and what our API structure and database schemas should look like. This visual representation enabled us to understand exactly what is happening and how we are going to achieve it. Then gradually we moved forward and piece by piece developed the application.

The application is built using the MERN stack and has used best coding practices and code structure which are prevalent in the software industry. While building the application, we tested it thoroughly like we checked whether each page is behaving properly and we tested each test case that we made, we also tested all APIs using Postman.

# Tech Stack
 
- Frontend :	React.js
- Backend	 :  Node.js with Express
- Database :  MongoDB
- Real-time Video	: WebRTC (Pending)
- Payment Gateway	: Razorpay (Pending)
- Transcription	: Google Cloud Speech-to-Text (Pending)

# Challenges We Faced
-Connecting backend to the desired frontend components

-API calls not returning expected data or timing out

-Styling inconsistencies and CSS breaking the layout

-Ensuring real-time validation and preventing double booking

-Handling form validations for booking with proper UX

# Current Status

Patient Login & Doctor Search	                    ✅ Completed

Appointment Booking	                              ✅ Completed

API Testing with Postman                         	✅ Completed

Payment Gateway Integration                     	⏳ Pending

Video Chat Integration	                          ⏳ Pending

Doctor-Patient Chat	                              ⏳ Pending

Prescriptions & Custom Reports	                  ⏳ Pending

Transcription & Multilingual UI	                  ⏳ Pending
