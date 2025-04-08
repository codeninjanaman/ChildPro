import React from 'react';

const AboutUs = () => {
  return (
    <div style={{   padding: '3rem 1rem', maxWidth: '80%', margin: '0 auto' }}>
      <h2 style={{ color: '#5DDC7F', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        About Us
      </h2>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: '1.4', marginBottom: '2rem' }}>
        At <span style={{ color: '#5DDC7F' }}>Childoo</span>, we believe in protecting the innocence of children and we have an unwavering commitment to utilise sector expertise and innovation to make that possible.
      </h1>
      <p style={{ fontSize: '1.2rem', color: 'grey', lineHeight: '1.8' }}>
        "At Childoo, safeguarding the innocence of children is at the heart of everything we do. With an unwavering commitment, we harness our sector expertise and innovative solutions to ensure a world where children can thrive in safety and security. We believe that every child deserves a nurturing environment, free from harm and exploitation. Through our dedication and forward-thinking approach, we strive to create impactful change, empowering children to grow and flourish without compromise."
      </p>
    </div>
  );
};

export default AboutUs;
