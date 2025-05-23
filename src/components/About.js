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
        color: '#e0e0e0',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          color: '#a4b8ff',
        }}
      >
        About Me
      </h2>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
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

        <div>
          <p>
            Hello! I'm <strong style={{ color: '#ffffff' }}>Aniket Srivastava</strong>, a passionate and detail-driven
            Computer Science graduate with practical experience in both manual software testing and full-stack web
            development. My technical skill set includes <strong>Python</strong>, <strong>JavaScript</strong>, and modern
            frameworks for building intuitive, scalable applications.
          </p>
          <p style={{ color: '#cccccc' }}>
            I am currently working as a <strong style={{ color: '#ffffff' }}>Manual Test Engineer</strong> at <strong style={{ color: '#ffffff' }}>1TX Pvt. Ltd.</strong>in the
            <strong style={{ color: '#ffffff' }}> insurance domain</strong>, where I focus on delivering high-quality,
            reliable insurance products. My responsibilities include creating and executing test cases, performing
            <strong> functional, regression and sanity testing</strong>, and ensuring product stability and
            performance throughout the development lifecycle.
          </p>
          <p style={{ color: '#bbbbbb' }}>
            I’m a proactive learner who thrives in collaborative environments, and I am always looking for opportunities
            to expand my technical horizons and contribute to meaningful, high-impact projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
