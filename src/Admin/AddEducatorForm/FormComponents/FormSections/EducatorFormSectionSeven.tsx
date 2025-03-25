import React from 'react';

// Now "qualificationOptions" can be multi-selected.
const qualificationOptions = [
  'N/A Working Towards Certificate III in Early Childhood Education and Care Deleted 01-07-2023',
  'Working Towards Diploma in Early Childhood Education and Care',
  'Certificate III in Early Childhood Education and Care',
  'Diploma in Early Childhood and Education and Care',
  'Other'
];

const EducatorFormSectionSeven = ({
  formik,
  stepSubmitted
}: {
  formik: any;
  stepSubmitted: boolean;
}) => {
  const { values, setFieldValue, errors } = formik;

  // We'll store multiple qualifications in an array: values.qualification
  // If you prefer a different name, adjust accordingly.
  const selected = values.qualification || [];

  // Toggle function
  const toggleQualification = (option: string) => {
    const isSelected = selected.includes(option);
    const updated = isSelected
      ? selected.filter((q: string) => q !== option)
      : [...selected, option];

    setFieldValue('qualification', updated);
  };

  return (
    <div>
      {/* Heading */}
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
        Qualification
      </h2>

      {/* Question */}
      <p style={{ fontWeight: 400 }}>
        What is Your Qualification?<span style={{ color: 'red' }}>*</span>
      </p>

      {/* 2-column layout, each cell has a checkbox */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
          backgroundColor: '#f9f9f9',
          padding: '1rem',
          borderRadius: '8px',
          marginTop: '1rem'
        }}
      >
        {qualificationOptions.map((option) => {
          const isChecked = selected.includes(option);

          return (
            <label
              key={option}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px',
                borderRadius: '6px',
                cursor: 'pointer',
                // If checked => green border & background; else gray border
                backgroundColor: isChecked ? '#E6FFF1' : 'white',
                border: isChecked ? '1px solid #00E676' : '1px solid #d2d2d2'
              }}
            >
              {/* Hidden checkbox input for multiple selection */}
              <input
                type="checkbox"
                name="qualification"
                value={option}
                checked={isChecked}
                onChange={() => toggleQualification(option)}
                style={{ display: 'none' }}
              />

              {/* The “checkbox” square */}
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  border: isChecked ? '1px solid #00E676' : '1px solid #888',
                  borderRadius: '3px',
                  backgroundColor: isChecked ? '#00E676' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* If checked => show a small white box inside */}
                {isChecked && (
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      backgroundColor: '#fff',
                      borderRadius: '2px'
                    }}
                  />
                )}
              </div>

              {/* The label text */}
              <span style={{ fontSize: '14px', fontWeight: 400 }}>
                {option}
              </span>
            </label>
          );
        })}
      </div>

      {/* Show error if none selected */}
      {stepSubmitted && errors.qualification && (
        <div style={{ color: 'red', marginTop: '8px' }}>
          {errors.qualification}
        </div>
      )}
    </div>
  );
};

export default EducatorFormSectionSeven;