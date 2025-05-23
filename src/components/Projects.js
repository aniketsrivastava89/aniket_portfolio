// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section className="section projects">
      <h2>Projects</h2>
      <ul className="project-list">
        <li>
          <h3>💼 Portfolio Website</h3>
          <p>
            A personal portfolio website developed using <strong>React</strong>, <strong>React Router</strong>, and <strong>CSS</strong> to showcase my skills, experience, and projects. 
            It features smooth navigation, responsive design, and a clean user interface. This project reflects my frontend capabilities and understanding of component-based architecture.
          </p>
          <a href="https://github.com/aniketsrivastava89/aniket_portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>

        <li>
          <h3>🩺 Disease Prediction & Medicine Recommendation System</h3>
          <p>
            A machine learning-based system that predicts probable diseases based on user symptoms and provides basic medicine suggestions. Implemented using <strong>Python</strong>, <strong>Scikit-learn</strong>, and <strong>Pandas</strong>. The model was trained on a healthcare dataset using decision trees and Naive Bayes classifiers, and it features a user-friendly interface for symptom input.
          </p>
          <a href="https://github.com/aniketsrivastava89/DiseasePredictionSystemUsingML" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>

        <li>
          <h3>🛍️ IndianShoppingHub</h3>
          <p><strong>IndianShoppingHub</strong> is a dynamic and scalable e-commerce platform tailored for modern online retail experiences. Built using <strong>JavaScript</strong>, <strong>SCSS</strong>, <strong>HTML</strong>, and powered by <strong>Strapi</strong> (a Node.js-based headless CMS), this project showcases a complete full-stack development approach—from intuitive user interfaces to robust backend management.</p>
          <p>The platform enables seamless product browsing, shopping cart functionality, and real-time inventory control, all backed by a flexible content management system. It emphasizes clean design, efficient data flow, and user-first interactions.</p>

          <a href="https://github.com/aniketsrivastava89/IndianShoppingHub" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>

        <li>
          <h3>🏓 Table Tennis Game</h3>
          <p>
            A browser-based Table Tennis game developed using <strong>HTML5 Canvas</strong>, <strong>JavaScript</strong>, and basic game physics. Features include paddle control, collision detection, and a scoring system. The game is lightweight and works smoothly across all modern browsers.
          </p>
          <a href="https://github.com/aniketsrivastava89/Ping_Tennis_game" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>

        <li>
          <h3>⏰ Digital Clock</h3>
          <p>
            A real-time digital clock application built using <strong>Python (Tkinter)</strong>. It displays hours, minutes, and seconds with a stylish UI. This project helped reinforce GUI development concepts and working with real-time updates.
          </p>
          <a href="https://github.com/aniketsrivastava89/Digital_Clock" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
