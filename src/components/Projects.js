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
          <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>

        <li>
          <h3>🩺 Disease Prediction & Medicine Recommendation System</h3>
          <p>
            A machine learning-based system that predicts probable diseases based on user symptoms and provides basic medicine suggestions. Implemented using <strong>Python</strong>, <strong>Scikit-learn</strong>, and <strong>Pandas</strong>. The model was trained on a healthcare dataset using decision trees and Naive Bayes classifiers, and it features a user-friendly interface for symptom input.
          </p>
          <a href="https://github.com/aniketsrivastava89/DiseasePredictionSystemUsingML" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>

        <li>
          <h3>📝 Blogosphere Foundry</h3>
          <p>
            A dynamic blogging platform designed for creators to write, edit, and publish blog posts. Built using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>Firebase</strong>. Includes user authentication, real-time content updates, and a rich text editor. This project aimed to fill the gap for beginner bloggers wanting a simple yet powerful space to express ideas.
          </p>
          <a href="https://github.com/yourusername/blogosphere-foundry" target="_blank" rel="noopener noreferrer">GitHub</a>
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
