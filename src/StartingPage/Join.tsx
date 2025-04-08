import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const navigate = useNavigate();

  return (
    <div style={{ overflowX: 'hidden' }}>
    <div style={{ padding: '3rem 1rem', maxWidth: '80%', margin: '0 auto' }}>
      {/* Top Text Section */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.5 }}
        style={{
          border: '2px solid rgba(0,0,0,0.1)',
          borderRadius: '50px',
          padding: '2% 1%',
          textAlign: 'center',
          marginBottom: '4%',
       
        }}
      >
        <h2 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 500 }}>
          Join 100+ highly productive childcare provider
        </h2>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.5 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#E0F7FA',
          borderRadius: '30px',
          padding: '2rem',
          marginBottom: '4%',
          position: 'relative',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        {/* Left Icon */}
        <StarIcon style={{ color: '#FFEB3B', fontSize: '2rem', position: 'absolute', left: '-1rem', top: '1rem' }} />
        
        {/* Text */}
        <div style={{ flex: '1', minWidth: '250px' }}>
          <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.8' }}>
            "By facilitating the linkage between families, services, and government, we aim to create a seamless network of support and resources.
            This process ensures that families have access to essential services such as healthcare, education, and social assistance, while also enabling
            efficient communication and collaboration with government agencies."
          </p>
        </div>

        {/* Right Badge */}
        <div
          style={{
            minWidth: '120px',
            minHeight: '120px',
            borderRadius: '50%',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '2rem',
            fontWeight: 600,
          }}
        >
          Our Mission
        </div>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.5 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#E0F7FA',
          borderRadius: '30px',
          padding: '2rem',
          position: 'relative',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        {/* Left Badge */}
        <div
          style={{
            minWidth: '120px',
            minHeight: '120px',
            borderRadius: '50%',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '2rem',
            fontWeight: 600,
          }}
        >
          Our Vision
        </div>

        {/* Text */}
        <div style={{ flex: '1', minWidth: '250px' }}>
          <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.8' }}>
            "By facilitating the linkage between families, services, and government, we aim to create a seamless network of support and resources.
            This process ensures that families have access to essential services such as healthcare, education, and social assistance, while also enabling
            efficient communication and collaboration with government agencies."
          </p>
        </div>

        {/* Right Icon */}
        <StarIcon style={{ color: '#FFEB3B', fontSize: '2rem', position: 'absolute', right: '-1rem', top: '1rem' }} />
      </motion.div>

      {/* Childcare Administration Section */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.5 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10%',
          marginTop: '10%',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        <div style={{ flex: '1', minWidth: '250px' }}>
          <h3 style={{ fontSize: '1.75rem' }}>Childcare–Childcare administration and reporting</h3>
          <p style={{ lineHeight: '1.8' }}>
            "By facilitating the linkage between families, services, and government, we aim to create a seamless network of support and resources.
            This process ensures that families have access to essential services such as healthcare, education, and social assistance, while also enabling
            efficient communication and collaboration with government agencies."
          </p>
          <button
            onClick={() => navigate('/provider')}
            style={{ padding: '0.5rem 1rem', borderRadius: '20px', backgroundColor: '#5DDC7F', color: '#fff', border: 'none' }}
          >
            Register
          </button>
        </div>
        <div style={{ flex: '1', minWidth: '250px', textAlign: 'center' }}>
          <img src="/images/image1.png" alt="Childcare" style={{ maxWidth: '80%', height: 'auto', borderRadius: '16px' }} />
        </div>
      </motion.div>

      {/* Educate Programming Section */}
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.5 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10%',
          flexWrap: 'wrap',
          flexDirection: 'row-reverse',
          gap: '2rem',
        }}
      >
        <div style={{ flex: '1', minWidth: '250px' }}>
          <h3 style={{ fontSize: '1.75rem' }}>Educate–Programming and parent communication</h3>
          <p style={{ lineHeight: '1.8' }}>
            "By facilitating the linkage between families, services, and government, we aim to create a seamless network of support and resources.
            This process ensures that families have access to essential services such as healthcare, education, and social assistance, while also enabling
            efficient communication and collaboration with government agencies."
          </p>
          <button style={{ padding: '0.5rem 1rem', borderRadius: '20px', backgroundColor: '#5DDC7F', color: '#fff', border: 'none' }}>Register</button>
        </div>
        <div style={{ flex: '1', minWidth: '250px', textAlign: 'center' }}>
          <img src="/images/image2.png" alt="Educate" style={{ maxWidth: '80%', height: 'auto', borderRadius: '16px' }} />
        </div>
      </motion.div>

      {/* Feed Australia Section */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.5 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '4%',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        <div style={{ flex: '1', minWidth: '250px' }}>
          <h3 style={{ fontSize: '1.75rem' }}>Feed Australia–Nutritional education and meal planning</h3>
          <p style={{ lineHeight: '1.8' }}>
            "By facilitating the linkage between families, services, and government, we aim to create a seamless network of support and resources.
            This process ensures that families have access to essential services such as healthcare, education, and social assistance, while also enabling
            efficient communication and collaboration with government agencies."
          </p>
          <button style={{ padding: '0.5rem 1rem', borderRadius: '20px', backgroundColor: '#5DDC7F', color: '#fff', border: 'none' }}>Register</button>
        </div>
        <div style={{ flex: '1', minWidth: '250px', textAlign: 'center' }}>
          <img src="/images/image3.png" alt="Feed Australia" style={{ maxWidth: '80%', height: 'auto', borderRadius: '16px' }} />
        </div>
      </motion.div>
      
     
    </div>
     {/* Client and Partner Section */}
     <div style={{ marginTop: '5rem', backgroundColor: '#f2f2f2', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          {/* Left Text */}
          <div style={{ flex: '1', minWidth: '280px' }}>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 'bold', margin: 0,color: 'gray' }}>
              Listen to <br /> Our Client <br /> and Partner<span style={{ color: '#5DDC7F' }}>.</span>
            </h2>
          </div>
 
          {/* Cards */}
          <div style={{ flex: '3', display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {[1, 2, 3, 4, 5].map((item, index) => {
              const rotations = ['-5deg', '4deg', '-3deg', '3deg', '-4deg'];
              const translateY = ['10px', '-30px', '20px', '-20px', '15px'];
              const translateX = ['-10px', '20px', '0px', '-20px', '10px'];
              const initialPositions = [
                { x: -200, y: -200 },
                { x: 200, y: -100 },
                { x: 0, y: 200 },
                { x: -150, y: 150 },
                { x: 150, y: -150 },
              ];

              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, ...initialPositions[index] }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{
                    background: 'white',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    flex: '1 1 250px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '250px',
                    transform: `rotate(${rotations[index]}) translate(${translateX[index]}, ${translateY[index]})`,
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                    "By facilitating the linkage between families, services, and government, we aim to create a seamless network of support and resources. This process ensures that families have access to essential services such as healthcare, education, and social assistance, while also enabling efficient communication and collaboration with government agencies."
                  </p>
                  <div>
                    <strong>Ved Prakash</strong>
                    <p style={{ fontSize: '0.8rem', color: 'gray', margin: 0 }}>Chandigarh</p>
                    <div style={{ display: 'flex', gap: '0.25rem', marginTop: '0.5rem' }}>
                      <span style={{ width: '8px', height: '8px', backgroundColor: '#FF0000', borderRadius: '50%' }}></span>
                      <span style={{ width: '8px', height: '8px', backgroundColor: '#FFEB3B', borderRadius: '50%' }}></span>
                      <span style={{ width: '8px', height: '8px', backgroundColor: '#5DDC7F', borderRadius: '50%' }}></span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
