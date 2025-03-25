import React from 'react';

const EducatorFormSectionFour = ({
  formik,
  stepSubmitted
}: {
  formik: any;
  stepSubmitted: boolean;
}) => {
  const { values, errors, setFieldValue } = formik;

  return (
    <div>
      <h2
        style={{
          fontFamily: 'Montserrat',
          color: '#00E676',
          fontSize: '18px',
          fontWeight: '500',
          borderBottom: '2px solid #00E676',
          paddingBottom: '4px',
          marginBottom: '1.5rem'
        }}
      >
        Your PRODA & ABM
      </h2>

      <div style={{ display: 'flex', gap: '5%', width: '100%' }}>
        {/* PRODA RA field */}
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontWeight: 400 }}>
            Your Prodo RA? <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="text"
            value={values.prodaRA}
            onChange={(e) => setFieldValue('prodaRA', e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              marginTop: '4px',
              border: '1px solid rgba(0,0,0,0.2)'
            }}
          />
          {stepSubmitted && errors.prodaRA && (
            <div style={{ color: 'red', marginTop: '4px' }}>{errors.prodaRA}</div>
          )}
        </div>

        {/* ABN field */}
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontWeight: 400 }}>
            Your ABN? <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="text"
            value={values.abn}
            onChange={(e) => setFieldValue('abn', e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              marginTop: '4px',
              border: '1px solid rgba(0,0,0,0.2)'
            }}
          />
          {stepSubmitted && errors.abn && (
            <div style={{ color: 'red', marginTop: '4px' }}>{errors.abn}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducatorFormSectionFour;