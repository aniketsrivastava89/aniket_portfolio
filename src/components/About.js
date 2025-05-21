// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section
      className="section about"
      style={{
        maxWidth: '800px',
        margin: 'auto',
        padding: '20px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        lineHeight: '1.6',
        color: '#e0e0e0', // light text
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          color: '#a4b8ff', // soft light blue
        }}
      >
        About Me
      </h2>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
        {/* Image + Button container */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={`${process.env.PUBLIC_URL}/mee.jpg`}
            alt="Aniket Srivastava"
            style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
            }}
          />
          <a
            href="/ANIKET_SRIVASTAVA_RESUME.pdf"
            download="ANIKET_SRIVASTAVA_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: '12px',
              padding: '10px 16px',
              backgroundColor: '#3498db',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              fontSize: '14px',
              textAlign: 'center',
            }}
          >
           Resume
          </a>
        </div>

        {/* Text content */}
        <div>
          <p>
            Hi! I'm <strong style={{ color: '#ffffff' }}>Aniket Srivastava</strong>, a dedicated and detail-oriented
            Computer Science graduate with hands-on experience in manual software testing and full-stack development. I
            am passionate about building efficient, user-friendly applications and have a strong foundation in Python,
            JavaScript, and modern web frameworks.
          </p>
          <p style={{ color: '#cccccc' }}>
            Currently working as a Manual Tester at{' '}
            <strong style={{ color: '#ffffff' }}>QualityKiosk Technologies Pvt. Ltd.</strong>, I’m deeply involved in
            functional, system, and unit testing of enterprise applications. I enjoy taking on challenging problems and
            contributing to high-quality software delivery.
          </p>
          <p style={{ color: '#bbbbbb' }}>
            I'm always eager to learn new technologies, improve my skills, and collaborate with passionate teams to
            create impactful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
