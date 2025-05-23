// src/components/Experience.js
import React from 'react';

const Experience = () => {
  return (
    <section className="section experience">
      <h2>Experience</h2>

      <div className="job">
        <h3>Test Engineer</h3>
        <p><em>1TX Pvt. Ltd.</em> | April 2025 – Present</p>
        <ul>
          <li>Performed functional, system, and regression testing in the insurance domain.</li>
          <li>Created and executed detailed test cases to ensure products quality.</li>
          <li>Logged and tracked bugs using Jira and collaborated with developers to resolve issues.</li>
          <li>Contributed to delivering high-quality products with a focus on user experience and reliability.</li>
        </ul>
      </div>

      <div className="job">
        <h3>Python Developer Intern</h3>
        <p><em>Coding Samurai</em> | 2023</p>
        <ul>
          <li>Developed Python-based tools for data analysis and automation tasks.</li>
          <li>Worked on projects involving data visualization and basic machine learning models.</li>
          <li>Enhanced code efficiency and readability by following best coding practices.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
