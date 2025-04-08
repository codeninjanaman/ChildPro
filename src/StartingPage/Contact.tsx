
const Contact = () => {
  return (
    <div>
    <div
      style={{
        border: '1px solid #eee',
        borderRadius: '12px',
       
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        gap: '2rem',
         padding: '3rem 1rem', maxWidth: '1200px', margin: '0 auto'
      }}
    >
      {/* Left Side */}
      <div style={{ flex: '1', minWidth: '280px' }}>
        <h2 style={{ color: '#5DDC7F', fontSize: '1.8rem', fontWeight: 'bold' }}>
          Contact Us: ))
        </h2>
        <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
          Thank you for your interest in our child care & preschool. If you have any questions or would like to schedule an on-site visit, please complete the inquiry form or give us a call. We look forward to meeting you and your child.
        </p>
        <p>Address Address<br />Address Address<br />Address Address</p>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>+12 7843267345</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: '#5DDC7F', fontWeight: 'bold', fontSize: '1.2rem' }}>Email:</span>
          <a href="mailto:dasdfs@gmail.com" style={{ color: 'black', textDecoration: 'underline', fontSize: '1.2rem' }}>
            dasdfs@gmail.com
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Enter your name"
          style={{
            padding: '1rem',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#eee',
            outline: 'none',
          }}
        />
        <input
          type="email"
          placeholder="Enter a valid Email address"
          style={{
            padding: '1rem',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#eee',
            outline: 'none',
          }}
        />
        <textarea
          placeholder="Your message"
          rows={4}
          style={{
            padding: '1rem',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#eee',
            outline: 'none',
            resize: 'none',
          }}
        />
        <button
          style={{
            padding: '0.75rem 2rem',
            backgroundColor: '#5DDC7F',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            alignSelf: 'flex-end',
            fontSize: '1rem',
          }}
        >
          Submit
        </button>
      </div>



    </div>
    <div style={{ width: '100%', height: 'auto', marginTop: '2rem', overflow: 'hidden', padding: '3rem 1rem', maxWidth: '80%', margin: '0 auto' }}>
        <img src="/images/bottombanner.png" alt="" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
    </div>
    </div>
  );
};

export default Contact;
