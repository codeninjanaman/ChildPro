// import React from 'react';

// /** 
//  * 15 operation-hours checkboxes for multiple selection
//  * Each item has a `label` (display text) and a `value` (stored in Formik)
//  */
// const operationHoursOptions = [
//   {
//     label: 'Monday 07:30 to 17:30',
//     value: 'mon_0730_1730'
//   },
//     {
//     label: 'Are you providing care after School and before care as well? If yes please tick.',
//     value: 'after_school_care'
//   },
//   {
//     label: 'Tuesday 07:30 to 17:30',
//     value: 'tue_0730_1730'
//   },
//   {
//     label: 'Monday 6:30 AM to 8:30 AM or 5:30 PM to 6:00 PM',
//     value: 'mon_0630_0830'
//   },

//   {
//     label: 'Wednesday 07:30 to 17:30',
//     value: 'wed_0730_1730'
//   },
//   {
//     label: 'Tuesday 6:30 AM to 8:30 AM or 5:30 PM to 6:00 PM',
//     value: 'tue_0630_0830'
//   },
//   {
//     label: 'Thursday 07:30 to 17:30',
//     value: 'thu_0730_1730'
//   },
//   {
//     label: 'Wednesday 6:30 AM to 8:30 AM or 5:30 PM to 6:00 PM',
//     value: 'wed_0630_0830'
//   },
//   {
//     label: 'Friday 07:30 to 17:30',
//     value: 'fri_0730_1730'
//   },
//   {
//     label: 'Thursday 6:30 AM to 8:30 AM or 5:30 PM to 6:00 PM',
//     value: 'thu_0630_0830'
//   },
//   {
//     label: 'Saturday 07:30 to 17:30',
//     value: 'sat_0730_1730'
//   },
//   {
//     label: 'Friday 6:30 AM to 8:30 AM or 5:30 PM to 6:00 PM',
//     value: 'fri_0630_0830'
//   },
  
//   {
//     label: 'Sunday 07:30 to 17:30',
//     value: 'sun_0730_1730'
//   },
//   {
//     label: 'If you are providing other care mention above? Then please mention in other Section',
//     value: 'other'
//   },
//   {
//     label: 'Other',
//     value: 'other'
//   }
// ];

// interface EducatorFormSectionNineProps {
//   formik: any;
//   stepSubmitted: boolean; // optional
// }

// const EducatorFormSectionNine: React.FC<EducatorFormSectionNineProps> = ({
//   formik,
//   stepSubmitted
// }) => {
//   const { values, setFieldValue, errors } = formik;

//   // `operationHours` is an array of strings in Formik
//   const selected = values.operationHours || [];

//   // Toggle function
//   const toggleOption = (val: string) => {
//     const isSelected = selected.includes(val);
//     const updated = isSelected
//       ? selected.filter((item: string) => item !== val)
//       : [...selected, val];

//     setFieldValue('operationHours', updated);
//   };

//   return (
//     <div>
//       {/* Heading */}
//       <h2
//         style={{
//           fontFamily: 'Montserrat',
//           color: '#00E676',
//           fontSize: '18px',
//           fontWeight: '500',
//           borderBottom: '2px solid #00E676',
//           paddingBottom: '4px',
//           marginBottom: '1.5rem'
//         }}
//       >
//         Your Normal Operation Hours?<span style={{ color: 'red' }}>*</span>
//       </h2>

//       {/* Note */}
//       <p style={{ fontSize: '13px', fontWeight: 400, marginBottom: '1rem' }}>
//         Please note - Prospective Educator Must have to Provide Police Clearance Not more than 6 Months Old.
//         If you don’t have current police clearance then please apply for it.
//       </p>

//       {/* 2-column grid of checkboxes */}
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: '1fr 1fr',
//           gap: '1rem'
//         }}
//       >
//         {operationHoursOptions.map((option) => {
//           const isChecked = selected.includes(option.value);

//           return (
//             <label
//               key={option.value}
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '8px',
//                 border: isChecked ? '1px solid #00E676' : '1px solid #d2d2d2',
//                 backgroundColor: isChecked ? '#E6FFF1' : '#fff',
//                 padding: '12px',
//                 borderRadius: '6px',
//                 cursor: 'pointer'
//               }}
//             >
//               {/* Hidden checkbox input */}
//               <input
//                 type="checkbox"
//                 style={{ display: 'none' }}
//                 checked={isChecked}
//                 onChange={() => toggleOption(option.value)}
//               />

//               {/* The visible square */}
//               <div
//                 style={{
//                   width: '20px',
//                   height: '20px',
//                   border: isChecked ? '1px solid #00E676' : '1px solid #888',
//                   borderRadius: '3px',
//                   backgroundColor: isChecked ? '#00E676' : 'transparent',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}
//               >
//                 {isChecked && (
//                   <div
//                     style={{
//                       width: '10px',
//                       height: '10px',
//                       backgroundColor: '#fff',
//                       borderRadius: '2px'
//                     }}
//                   />
//                 )}
//               </div>

//               {/* Label text */}
//               <span style={{ fontSize: '14px', fontWeight: 400 }}>
//                 {option.label}
//               </span>
//             </label>
//           );
//         })}
//       </div>

//       {/* Error message if needed */}
//       {stepSubmitted && errors.operationHours && (
//         <div style={{ color: 'red', marginTop: '8px' }}>
//           {errors.operationHours}
//         </div>
//       )}
//     </div>
//   );
// };

// export default EducatorFormSectionNine;



import React from 'react';

/** 
 * 15 operation-hours checkboxes for multiple selection
 * Each item has a `label` (display text) and a `value` (stored in Formik)
 */
const operationHoursOptions = [
  { label: 'Monday 07:30 to 17:30', value: 'mon_0730_1730' },
  {
    label: 'Are you providing care after School and before care as well? If yes please tick.',
    value: 'after_school_care'
  },
  { label: 'Tuesday 07:30 to 17:30', value: 'tue_0730_1730' },
  { label: 'Monday 6:30 AM to 8:30 AM or 5:30 PM to 6:00 PM', value: 'mon_0630_0830' },
  { label: 'Wednesday 07:30 to 17:30', value: 'wed_0730_1730' },
  { label: 'Tuesday 6:30 AM to 8:30 AM or 5:30 PM to 6:00 PM', value: 'tue_0630_0830' },
  { label: 'Thursday 07:30 to 17:30', value: 'thu_0730_1730' },
  { label: 'Wednesday 6:30 AM to 8:30 AM or 5:30 PM to 6:00 PM', value: 'wed_0630_0830' },
  { label: 'Friday 07:30 to 17:30', value: 'fri_0730_1730' },
  { label: 'Thursday 6:30 AM to 8:30 AM or 5:30 PM to 6:00 PM', value: 'thu_0630_0830' },
  { label: 'Saturday 07:30 to 17:30', value: 'sat_0730_1730' },
  { label: 'Friday 6:30 AM to 8:30 AM or 5:30 PM to 6:00 PM', value: 'fri_0630_0830' },
  { label: 'Sunday 07:30 to 17:30', value: 'sun_0730_1730' },
  {
    label: 'If you are providing other care mention above? Then please mention in other Section',
    value: 'other'
  },
  { label: 'Other', value: 'other_2' } // slight difference to avoid collision
];

interface EducatorFormSectionNineProps {
  formik: any;
  stepSubmitted: boolean; // optional
}

const EducatorFormSectionNine: React.FC<EducatorFormSectionNineProps> = ({
  formik,
  stepSubmitted
}) => {
  const { values, setFieldValue, errors } = formik;

  // `operationHours` is an array of strings in Formik
  const selected = values.operationHours || [];

  // Toggle function
  const toggleOption = (val: string) => {
    const isSelected = selected.includes(val);
    const updated = isSelected
      ? selected.filter((item: string) => item !== val)
      : [...selected, val];

    setFieldValue('operationHours', updated);
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
        Your Normal Operation Hours?<span style={{ color: 'red' }}>*</span>
      </h2>

      {/* Note */}
      <p style={{ fontSize: '13px', fontWeight: 400, marginBottom: '1rem' }}>
        Please note - Prospective Educator Must have to Provide Police Clearance Not more than 6 Months Old.
        If you don’t have current police clearance then please apply for it.
      </p>

      {/* 2-column grid of checkboxes */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem'
        }}
      >
        {operationHoursOptions.map((option) => {
          const isChecked = selected.includes(option.value);

          return (
            <label
              key={option.value}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: isChecked ? '1px solid #00E676' : '1px solid #d2d2d2',
                backgroundColor: isChecked ? '#E6FFF1' : '#fff',
                padding: '12px',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              {/* Hidden checkbox input */}
              <input
                type="checkbox"
                style={{ display: 'none' }}
                checked={isChecked}
                onChange={() => toggleOption(option.value)}
              />

              {/* The visible square */}
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

              {/* Label text */}
              <span style={{ fontSize: '14px', fontWeight: 400 }}>
                {option.label}
              </span>
            </label>
          );
        })}
      </div>

      {/* Error message if needed */}
      {stepSubmitted && errors.operationHours && (
        <div style={{ color: 'red', marginTop: '8px' }}>
          {errors.operationHours}
        </div>
      )}
    </div>
  );
};

export default EducatorFormSectionNine;