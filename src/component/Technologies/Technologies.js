import React from "react";
import styles from "./Technologies.module.css";

export default function Technologies() {
  return (
    <div className={styles.maincontainer}>

      {/* Technical Skills */}
      <ul className={styles.list__container}>
        Technical Skills
        <li className={styles.list__item}>
          Programming Languages: Python, C++, JavaScript, HTML, CSS, SQL
        </li>
        <li className={styles.list__item}>
          Web Technologies & Frameworks: React, Redux, Bootstrap, Angular, Node.js, Express.js
        </li>
        <li className={styles.list__item}>
          Tools: Git, GitHub, Vercel
        </li>
        <li className={styles.list__item}>
          Design & Frontend: UX/UI, Animations, Figma, Responsive Design
        </li>
        <li className={styles.list__item}>
          Languages: English (Fluent), Spanish (Native/Bilingual)
        </li>
      </ul>

      {/* Academic Degrees */}
      <ul className={styles.list__container}>
        Academic Background
        <ul className={styles.sub__list__container}>
          University of Houston — Houston, TX
          <li className={styles.list__item}>
            Bachelor of Science in Computer Science, Concentration in Cybersecurity  
            <br />Expected June 2027 — GPA: 3.9
          </li>
        </ul>

        <ul className={styles.sub__list__container}>
          San Jacinto College — Pasadena, TX
          <li className={styles.list__item}>
            Associate of Science in Cybersecurity  
            <br />Expected May 2026
          </li>
        </ul>

        <ul className={styles.sub__list__container}>
          Summer Programs
          <li className={styles.list__item}>
            University of Houston — July 2025  
            Summer Course in Artificial Intelligence
          </li>
          <li className={styles.list__item}>
            Rice University — June 2025  
            Biotechnology Summer Program — Created a targeted antibacterial for specific bacteria
          </li>
        </ul>
      </ul>

      {/* Objective */}
      <ul className={styles.list__container}>
        Objective
        <li className={styles.list__item}>
          Motivated Computer Science undergraduate with a concentration in Cybersecurity, experienced in 
          encryption algorithms, network defense concepts, and full-stack development. Seeking a cybersecurity 
          role to apply strong programming and analytical skills to secure system design and real-world 
          threat mitigation.
        </li>
      </ul>

      {/* Relevant Coursework */}
      <ul className={styles.list__container}>
        Relevant Coursework
        <li className={styles.list__item}>
          Programming Fundamentals I, II, III, Security Management, Firewalls and Network Security, Network Defense and Countermeasures
        </li>
      </ul>

      {/* Professional Experience */}
      <ul className={styles.list__container}>
        Project Experience

        <ul className={styles.sub__list__container}>
          Damarco Web App — Full Stack Developer (Freelance)  
          <li className={styles.list__item}>
            • Developed a responsive React web app for a renovation company, increasing lead conversion by 25%.  
            <br />
            • Implemented animations and transitions for improved client engagement.  
            <br />
            • Built a Django/PostgreSQL admin panel that reduced manual data entry by 40%.
          </li>
        </ul>

        <ul className={styles.sub__list__container}>
          Hellen Salom Web Application — Full Stack Developer (Freelance)
          <li className={styles.list__item}>
            • Created a web platform for a modern salon with booking and messaging features.  
            <br />
            • Integrated REST APIs using an Express.js backend for real-time communication.  
            <br />
            • Delivered a mobile-friendly experience improving customer management.
          </li>
        </ul>

        <ul className={styles.sub__list__container}>
          RSA Encryption Program — San Jacinto College
          <li className={styles.list__item}>
            • Developed a Python-based RSA encryption tool supporting 1024-bit keys.  
            <br />
            • Applied number theory and modular arithmetic for secure key generation.  
            <br />
            • Strengthened understanding of cryptography and algorithmic security.
          </li>
        </ul>

        <ul className={styles.sub__list__container}>
          Additional Experience
          <li className={styles.list__item}>
            Freelance Part-time: Building React applications for small businesses, coordinating timelines, 
            managing client communication, and delivering polished user experiences.
          </li>
        </ul>

        <ul className={styles.sub__list__container}>
          Internships
          <li className={styles.list__item}>
            Internship in Cuba: Learned Angular and strengthened frontend development fundamentals.
          </li>
        </ul>
      </ul>

      {/* Contact */}
      <ul className={styles.list__container}>
        Contact
        <li className={styles.list__item}>Rebeca Mustelier Trinchet</li>
        <li className={styles.list__item}>346-526-0235</li>
        <li className={styles.list__item}>mustelierrebeca99@gmail.com</li>
        <li className={styles.list__item}>linkedin.com/in/rebecamusteliertrinchet</li>
        <li className={styles.list__item}>Portfolio: reb3ca.online</li>
      </ul>
    </div>
  );
}
