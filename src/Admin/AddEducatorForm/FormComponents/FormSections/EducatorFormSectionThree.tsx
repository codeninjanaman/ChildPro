// import React, { useState } from 'react';

// const relationOptions = ['Wife', 'Husband', 'Mother', 'Father', 'Aunt', 'Uncle', 'Brother', 'Sister'];

// const EducatorFormSectionThree = () => {
//   const [familyMembers, setFamilyMembers] = useState([{ relation: '', name: '', age: '' }]);
//   const [children, setChildren] = useState([{ name: '', age: '' }]);

//   const handleFamilyChange = (index: number, field: string, value: string) => {
//     const updated = [...familyMembers];
//     updated[index][field] = value;
//     setFamilyMembers(updated);
//   };

//   const handleChildChange = (index: number, field: string, value: string) => {
//     const updated = [...children];
//     updated[index][field] = value;
//     setChildren(updated);
//   };

//   const addFamilyMember = () => {
//     setFamilyMembers([...familyMembers, { relation: '', name: '', age: '' }]);
//   };

//   const addChild = () => {
//     setChildren([...children, { name: '', age: '' }]);
//   };

//   return (
//     <div>
//       <h2 style={{ fontFamily: 'Montserrat', color: "#00E676", fontSize: '18px', fontWeight: "500", borderBottom: '2px solid #00E676', paddingBottom: '4px', marginBottom: '1.5rem' }}>
//         Family Member
//       </h2>

//       <p style={{ fontWeight: 400 }}>
//         All family members name age 18 or above residing at your Home. (Must enter all age family members) <span style={{ color: 'red' }}>*</span>
//       </p>
//       <p style={{ fontStyle: 'italic', fontSize: '12px', marginTop: '2px', fontWeight: 400 }}>
//         Please Provide details of Family members or People living at your residence. (All Ages) (Write their name and age and then use Enter key to provide next name)
//       </p>

//       {familyMembers.map((member, index) => (
//         <div key={index} style={{ display: 'flex', flexWrap: 'wrap', gap: '5%', marginTop: '1rem' }}>
//           <div style={{ flex: 1 }}>
//             <label style={{ display: 'block', fontWeight: 400 }}>Type of Relation<span style={{ color: 'red' }}>*</span></label>
//             <select
//               value={member.relation}
//               onChange={(e) => handleFamilyChange(index, 'relation', e.target.value)}
//               style={{ width: '100%', padding: '10px', borderRadius: '6px' }}
//             >
//               <option value="">Select</option>
//               {relationOptions.map((rel) => (
//                 <option key={rel} value={rel}>{rel}</option>
//               ))}
//             </select>
//           </div>
//           <div style={{ flex: 1 }}>
//             <label style={{ display: 'block', fontWeight: 400 }}>Name<span style={{ color: 'red' }}>*</span></label>
//             <input
//               type="text"
//               value={member.name}
//               onChange={(e) => handleFamilyChange(index, 'name', e.target.value)}
//               style={{ width: '100%', padding: '10px', borderRadius: '6px' }}
//             />
//           </div>
//           <div style={{ flex: 1 }}>
//             <label style={{ display: 'block', fontWeight: 400 }}>Age<span style={{ color: 'red' }}>*</span></label>
//             <input
//               type="text"
//               value={member.age}
//               onChange={(e) => handleFamilyChange(index, 'age', e.target.value)}
//               style={{ width: '100%', padding: '10px', borderRadius: '6px' }}
//             />
//           </div>
//         </div>
//       ))}

//       <button
//         onClick={addFamilyMember}
//         style={{ marginTop: '1rem', backgroundColor: '#00E676', color: 'white', padding: '10px 16px', border: 'none', borderRadius: '6px', fontWeight: 500 }}
//       >
//         Add another family member
//       </button>

//       <div style={{ marginTop: '2rem' }}>
//         <p style={{ fontWeight: 400 }}>
//           All Children residing at your home address (Detail your own children name and age) <span style={{ color: 'red' }}>*</span>
//         </p>

//         {children.map((child, index) => (
//           <div key={index} style={{ display: 'flex', gap: '5%', marginTop: '1rem' }}>
//             <div style={{ flex: 1 }}>
//               <label style={{ display: 'block', fontWeight: 400 }}>Child Name<span style={{ color: 'red' }}>*</span></label>
//               <input
//                 type="text"
//                 value={child.name}
//                 onChange={(e) => handleChildChange(index, 'name', e.target.value)}
//                 style={{ width: '100%', padding: '10px', borderRadius: '6px' }}
//               />
//             </div>
//             <div style={{ flex: 1 }}>
//               <label style={{ display: 'block', fontWeight: 400 }}>Age<span style={{ color: 'red' }}>*</span></label>
//               <input
//                 type="text"
//                 value={child.age}
//                 onChange={(e) => handleChildChange(index, 'age', e.target.value)}
//                 style={{ width: '100%', padding: '10px', borderRadius: '6px' }}
//               />
//             </div>
//           </div>
//         ))}

//         <button
//           onClick={addChild}
//           style={{ marginTop: '1rem', backgroundColor: '#00E676', color: 'white', padding: '10px 16px', border: 'none', borderRadius: '6px', fontWeight: 500 }}
//         >
//           Add Child
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EducatorFormSectionThree;


import React from 'react';

const relationOptions = ['Wife', 'Husband', 'Mother', 'Father', 'Aunt', 'Uncle', 'Brother', 'Sister'];

const EducatorFormSectionThree = ({ formik, stepSubmitted }: { formik: any; stepSubmitted: boolean }) => {
  const { values, setFieldValue } = formik;

  // We read from formik.values, not local state
  const familyMembers = values.familyMembers;
  const children = values.children;

  // Handler for changes in familyMembers
  const handleFamilyChange = (index: number, field: string, value: string) => {
    const updated = [...familyMembers];
    updated[index][field] = value;
    setFieldValue('familyMembers', updated);
  };

  // Handler for changes in children
  const handleChildChange = (index: number, field: string, value: string) => {
    const updated = [...children];
    updated[index][field] = value;
    setFieldValue('children', updated);
  };

  // Add new row in familyMembers
  const addFamilyMember = () => {
    setFieldValue('familyMembers', [...familyMembers, { relation: '', name: '', age: '' }]);
  };

  // Add new row in children
  const addChild = () => {
    setFieldValue('children', [...children, { name: '', age: '' }]);
  };

  return (
    <div>
      <h2
        style={{
          fontFamily: 'Montserrat',
          color: "#00E676",
          fontSize: '18px',
          fontWeight: "500",
          borderBottom: '2px solid #00E676',
          paddingBottom: '4px',
          marginBottom: '1.5rem'
        }}
      >
        Family Member
      </h2>

      <p style={{ fontWeight: 400 }}>
        All family members name age 18 or above residing at your Home. (Must enter all age family members) <span style={{ color: 'red' }}>*</span>
      </p>
      <p style={{ fontStyle: 'italic', fontSize: '12px', marginTop: '2px', fontWeight: 400 }}>
        Please Provide details of Family members or People living at your residence. (All Ages) (Write their name and age and then use Enter key to provide next name)
      </p>

      {familyMembers.map((member: any, index: number) => (
        <div key={index} style={{ display: 'flex', flexWrap: 'wrap', gap: '5%', marginTop: '1rem' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontWeight: 400 }}>
              Type of Relation<span style={{ color: 'red' }}>*</span>
            </label>
            <select
              value={member.relation}
              onChange={(e) => handleFamilyChange(index, 'relation', e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '6px',border: '1px solid rgba(0,0,0,0.2)' }}
            >
              <option value="">Select</option>
              {relationOptions.map((rel) => (
                <option key={rel} value={rel}>
                  {rel}
                </option>
              ))}
            </select>
            {stepSubmitted && formik.errors.familyMembers?.[index]?.relation && (
              <div style={{ color: 'red' }}>{formik.errors.familyMembers[index].relation}</div>
            )}
          </div>

          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontWeight: 400 }}>
              Name<span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              value={member.name}
              onChange={(e) => handleFamilyChange(index, 'name', e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '6px',border: '1px solid rgba(0,0,0,0.2)' }}
            />
            {stepSubmitted && formik.errors.familyMembers?.[index]?.name && (
              <div style={{ color: 'red' }}>{formik.errors.familyMembers[index].name}</div>
            )}
          </div>

          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontWeight: 400 }}>
              Age<span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              value={member.age}
              onChange={(e) => handleFamilyChange(index, 'age', e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '6px',border: '1px solid rgba(0,0,0,0.2)' }}
            />
            {stepSubmitted && formik.errors.familyMembers?.[index]?.age && (
              <div style={{ color: 'red' }}>{formik.errors.familyMembers[index].age}</div>
            )}
          </div>
        </div>
      ))}

      <button
        onClick={addFamilyMember}
        style={{
          marginTop: '1rem',
          backgroundColor: '#00E676',
          color: 'white',
          padding: '10px 16px',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 500
        }}
      >
        Add another family member
      </button>

      <div style={{ marginTop: '2rem' }}>
        <p style={{ fontWeight: 400 }}>
          All Children residing at your home address (Detail your own children name and age) <span style={{ color: 'red' }}>*</span>
        </p>

        {children.map((child: any, index: number) => (
          <div key={index} style={{ display: 'flex', gap: '5%', marginTop: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontWeight: 400 }}>
                Child Name<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                value={child.name}
                onChange={(e) => handleChildChange(index, 'name', e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '6px',border: '1px solid rgba(0,0,0,0.2)' }}
              />
              {stepSubmitted && formik.errors.children?.[index]?.name && (
                <div style={{ color: 'red' }}>{formik.errors.children[index].name}</div>
              )}
            </div>

            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontWeight: 400 }}>
                Age<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                value={child.age}
                onChange={(e) => handleChildChange(index, 'age', e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '6px',border: '1px solid rgba(0,0,0,0.2)' }}
              />
              {stepSubmitted && formik.errors.children?.[index]?.age && (
                <div style={{ color: 'red' }}>{formik.errors.children[index].age}</div>
              )}
            </div>
          </div>
        ))}

        <button
          onClick={addChild}
          style={{
            marginTop: '1rem',
            backgroundColor: '#00E676',
            color: 'white',
            padding: '10px 16px',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 500
          }}
        >
          Add Child
        </button>
      </div>
    </div>
  );
};

export default EducatorFormSectionThree;