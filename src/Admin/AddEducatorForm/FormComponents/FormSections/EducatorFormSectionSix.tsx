import React from 'react';

const EducatorFormSectionSix =({
    formik,
    stepSubmitted
  }: {
    formik: any;
    stepSubmitted: boolean;
  }) => {
  const { values, setFieldValue } = formik;

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
        Bank Details
      </h2>

      {/* Insurance Photo */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ fontWeight: 400, display: 'block', marginBottom: '4px' }}>
          Upload Your Insurance Photo (You can send it later once Children enrolled in care)
        </label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <input
            type="text"
            readOnly
            value={values.insurancePhoto ? values.insurancePhoto.name : ''}
            style={{
              border: '1px solid rgba(0,0,0,0.2)',
              borderRadius: '6px',
              padding: '8px',
              width: '50%'
            }}
          />
          <label
            style={{
              backgroundColor: '#00E676',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Add File
            <input
              type="file"
              style={{ display: 'none' }}
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setFieldValue('insurancePhoto', file);
              }}
            />
          </label>
        </div>
      </div>

      {/* Medical Check */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ fontWeight: 400, display: 'block', marginBottom: '4px' }}>
          Upload Your Medical Check Done By GP
        </label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <input
            type="text"
            readOnly
            value={values.medicalCheckFile ? values.medicalCheckFile.name : ''}
            style={{
              border: '1px solid rgba(0,0,0,0.2)',
              borderRadius: '6px',
              padding: '8px',
              width: '50%'
            }}
          />
          <label
            style={{
              backgroundColor: '#00E676',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Add File
            <input
              type="file"
              style={{ display: 'none' }}
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setFieldValue('medicalCheckFile', file);
              }}
            />
          </label>
        </div>
      </div>

      {/* Fit and Proper Form */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ fontWeight: 400, display: 'block', marginBottom: '4px' }}>
          Upload Your Fit and Proper Form (Attached with email)
        </label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <input
            type="text"
            readOnly
            value={values.fitProperFile ? values.fitProperFile.name : ''}
            style={{
              border: '1px solid rgba(0,0,0,0.2)',
              borderRadius: '6px',
              padding: '8px',
              width: '50%'
            }}
          />
          <label
            style={{
              backgroundColor: '#00E676',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Add File
            <input
              type="file"
              style={{ display: 'none' }}
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setFieldValue('fitProperFile', file);
              }}
            />
          </label>
        </div>
      </div>

      {/* Compliance History Statement */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ fontWeight: 400, display: 'block', marginBottom: '4px' }}>
          Upload Your Compliance History Statement Photo (Attached with email)
        </label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <input
            type="text"
            readOnly
            placeholder=""
            value={values.complianceFile ? values.complianceFile.name : ''}
            style={{
              border: '1px solid rgba(0,0,0,0.2)',
              borderRadius: '6px',
              padding: '8px',
              width: '50%'
            }}
          />
          <label
            style={{
              backgroundColor: '#00E676',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Add File
            <input
              type="file"
              style={{ display: 'none' }}
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setFieldValue('complianceFile', file);
              }}
            />
          </label>
        </div>
      </div>

      {/* Working with Children Check */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ fontWeight: 400, display: 'block', marginBottom: '4px' }}>
          Upload Educator Working with Children check Card
        </label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <input
            type="text"
            readOnly
            value={values.workingWithChildrenFile ? values.workingWithChildrenFile.name : ''}
            style={{
              border: '1px solid rgba(0,0,0,0.2)',
              borderRadius: '6px',
              padding: '8px',
              width: '50%'
            }}
          />
          <label
            style={{
              backgroundColor: '#00E676',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Add File
            <input
              type="file"
              style={{ display: 'none' }}
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setFieldValue('workingWithChildrenFile', file);
              }}
            />
          </label>
        </div>
      </div>
      {stepSubmitted && <div style={{color: 'red'}}>We are in a submitted step!</div>}
    </div>
  );
};

export default EducatorFormSectionSix;