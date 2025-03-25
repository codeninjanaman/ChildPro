import { useState } from 'react';

const FormSectionEight = ({ formik,  }:{ formik: any }) => {
  const [hasParent2, setHasParent2] = useState(false);

  const handleYes = () => {
    setHasParent2(true);
    formik.setFieldValue('hasParent2', true);
  };

  const handleNo = () => {
    setHasParent2(false);
    formik.setFieldValue('hasParent2', false);
  };

  return (
    <div style={{ paddingRight: '1%' }}>
      <h2 style={{ fontFamily: 'Montserrat', color: '#00E676', fontSize: '18px', fontWeight: '500' }}>
        Parent 2
      </h2>

      <div style={{ fontFamily: 'Poppins', fontSize: '15px', marginBottom: '1rem' }}>
        Do you have Parent 2?
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button
          type="button"
          onClick={handleYes}
          style={{
            backgroundColor: hasParent2 ? '#00E676' : 'white',
            color: hasParent2 ? 'white' : 'black',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '5px 15px',
            fontFamily: 'Poppins',
          }}
        >
          Yes
        </button>

        <button
          type="button"
          onClick={handleNo}
          style={{
            backgroundColor: !hasParent2 ? '#00E676' : 'white',
            color: !hasParent2 ? 'white' : 'black',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '5px 15px',
            fontFamily: 'Poppins',
          }}
        >
          No
        </button>
      </div>

      {hasParent2 && (
        <p style={{ fontFamily: 'Poppins', fontSize: '14px', color: 'rgba(0,0,0,0.6)' }}>
          Same details will appear like Parent 1
        </p>
      )}
    </div>
  );
};

export default FormSectionEight;
