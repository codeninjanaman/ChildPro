import React from 'react';

const Banner = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '60vh',
        maxWidth: '100%',
        margin: '0 auto',
        paddingTop: '5%',
        overflow: 'hidden',
      }}
    >
      {/* Left Side - Text */}
      <div
        style={{
          backgroundColor: 'black',
          color: 'white',
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '2rem',
          minWidth: '50%',
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', lineHeight: '1.3' }}>
          Facilitating the linkage between <br />
          <span style={{ color: '#2ECC71' }}>families, services, and government.</span>
        </h1>
        <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>
          By facilitating the linkage between families, services, and government, we aim to create a seamless network of support and resources. This process ensures that families have access to essential services such as healthcare, education, and social assistance, while also enabling efficient communication and collaboration with government agencies.
        </p>
      </div>

      {/* Right Side - Image */}
      <div style={{ flex: '1' }}>
        <img
          src="/images/mother.png"
          alt="Family"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default Banner;