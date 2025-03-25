
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { useState } from 'react';
// import { Row, Col } from 'antd';
// import EducatorFormSectionOne from './FormComponents/FormSections/EducatorFormSectionOne';
// import EducatorFormSectionTwo from './FormComponents/FormSections/EducatorFormSectionTwo';
// import EducatorFormSectionThree from './FormComponents/FormSections/EducatorFormSectionThree';
// import EducatorFormSectionFour from './FormComponents/FormSections/EducatorFormSectionFour';
// import EducatorFormSectionFive from './FormComponents/FormSections/EducatorFormSectionFive';
// import EducatorFormSectionSix from './FormComponents/FormSections/EducatorFormSectionSix';
// import EducatorFormSectionSeven from './FormComponents/FormSections/EducatorFormSectionSeven';
// import EducatorFormSectionEight from './FormComponents/FormSections/EducatorFormSectionEight';
// import EducatorFormSectionNine from './FormComponents/FormSections/EducatorFormSectionNine';
// import EducatorSidebar from './FormComponents/SideBar/EducatorSideBar';

// // 1) Multi-select qualifications => array
// const initialValues = {
//   firstName: '',
//   lastName: '',
//   address: '',
//   dob: '',
//   email: '',
//   engagementDate: '',
//   familyMembers: [{ relation: '', name: '', age: '' }],
//   children: [{ name: '', age: '' }],
//   prodaRA: '',
//   abn: '',

//   // Bank detail fields
//   bankName: '',
//   accountName: '',
//   accountNumber: '',
//   bsb: '',

//   insurancePhoto: null,
//   medicalCheckFile: null,
//   fitProperFile: null,
//   complianceFile: null,
//   workingWithChildrenFile: null,
//   qualification: [] as string[], // <-- multi-select array

//   // For SectionEight
//   certEducationFile: null,
//   dateOne: '',
//   fileOne: null,
//   dateTwo: '',
//   fileTwo: null,
//   childProtectionCourse: '',
//   childProtectionCoursePhoto: null,
//   profDevCourses: '',
//   profDevCoursesPhoto: null,
//   policeClearanceDate: '',
//   policeClearanceFile: null,
//   familyMemberPolicyClearanceDates: '',
//   familyMemberPolicyClearanceFile: null,
//   vaccinationEvidenceFile: null,
//   safetyGlassInspectionFile: null,
//   councilApprovalFile: null,
//   pestControlFile: null,

//   // For SectionNine
//   operationHours: [] as string[]
// };

// const validationSchema = Yup.object({
//   childProtectionCourse: Yup.date(),
//   familyMemberPolicyClearanceDates: Yup.date(),
//   operationHours: Yup.array()
//     .min(1, 'Select at least one')
//     .required('Required'),

//   // 2) If you want at least one qualification selected:
//   qualification: Yup.array()
//     .min(1, 'Select at least one qualification')
//     .required('Required'),
//   // ...
// });

// const EducatorForm = () => {
//   const [step, setStep] = useState(0);

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit: (values) => {
//       console.log('Form Submitted:', values);
//       alert('Form submitted successfully!');
//     },
//     validateOnBlur: false,
//     validateOnChange: false
//   });

//   const sections = [
//     'Educator Introduction',
//     'FDC',
//     'Family Member',
//     'Your Proda & ABM',
//     'Bank Details',
//     'Documents 1',
//     'Qualification',
//     'Documents 2',
//     'Operation Hours'
//   ];

//   const goToStep = (index: number) => {
//     setStep(index);
//   };

//   const visibleSteps = [
//     <EducatorFormSectionOne formik={formik} stepSubmitted={false} />,
//     <EducatorFormSectionTwo formik={formik} stepSubmitted={false} />,
//     <EducatorFormSectionThree formik={formik} stepSubmitted={false} />,
//     <EducatorFormSectionFour formik={formik} stepSubmitted={false} />,
//     <EducatorFormSectionFive formik={formik} stepSubmitted={false} />,
//     <EducatorFormSectionSix formik={formik} stepSubmitted={false} />,
//     <EducatorFormSectionSeven formik={formik} stepSubmitted={false} />,
//     <EducatorFormSectionEight formik={formik} stepSubmitted={false} />,
//     <EducatorFormSectionNine formik={formik} stepSubmitted={false} />
//   ];

//   const handleNext = () => {
//     if (step === visibleSteps.length - 1) {
//       formik.handleSubmit();
//     } else {
//       setStep((prev) => Math.min(prev + 1, visibleSteps.length - 1));
//     }
//   };

//   const handleBack = () => {
//     setStep((prev) => Math.max(prev - 1, 0));
//   };

//   return (
//     <Row style={{ minHeight: '100vh', backgroundColor: '#FFFEFA', overflow: 'hidden' }}>
//       <Col xs={24} md={5}>
//         <div style={{ height: '100%', overflowY: 'auto' }}>
//           <EducatorSidebar sections={sections} currentStep={step} goToStep={goToStep} />
//         </div>
//       </Col>

//       <Col xs={24} md={19} style={{ overflowY: 'auto', maxHeight: '100vh' }}>
//         <form style={{ padding: '2rem' }} onSubmit={formik.handleSubmit}>
//           {visibleSteps[step]}

//           <div
//             style={{
//               marginTop: '2rem',
//               display: 'flex',
//               justifyContent: 'space-between',
//               flexWrap: 'wrap'
//             }}
//           >
//             <button
//               type="button"
//               onClick={handleBack}
//               style={{
//                 border: '1px solid rgba(0,0,0,0.8)',
//                 borderRadius: '12px',
//                 backgroundColor: 'transparent',
//                 padding: '0.7rem 2.5rem'
//               }}
//             >
//               Back
//             </button>

//             <button
//               type="button"
//               onClick={handleNext}
//               style={{
//                 border: 'none',
//                 color: 'white',
//                 borderRadius: '12px',
//                 backgroundColor: '#00E676',
//                 padding: '0.7rem 2.5rem'
//               }}
//             >
//               {step === visibleSteps.length - 1 ? 'Submit' : 'Next'}
//             </button>
//           </div>
//         </form>
//       </Col>
//     </Row>
//   );
// };

// export default EducatorForm;


import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { Row, Col } from 'antd';

import EducatorFormSectionOne from './FormComponents/FormSections/EducatorFormSectionOne';
import EducatorFormSectionTwo from './FormComponents/FormSections/EducatorFormSectionTwo';
import EducatorFormSectionThree from './FormComponents/FormSections/EducatorFormSectionThree';
import EducatorFormSectionFour from './FormComponents/FormSections/EducatorFormSectionFour';
import EducatorFormSectionFive from './FormComponents/FormSections/EducatorFormSectionFive';
import EducatorFormSectionSix from './FormComponents/FormSections/EducatorFormSectionSix';
import EducatorFormSectionSeven from './FormComponents/FormSections/EducatorFormSectionSeven';
import EducatorFormSectionEight from './FormComponents/FormSections/EducatorFormSectionEight';
import EducatorFormSectionNine from './FormComponents/FormSections/EducatorFormSectionNine';
import EducatorSidebar from './FormComponents/SideBar/EducatorSideBar';

const initialValues = {
  firstName: '',
  lastName: '',
  address: '',
  dob: '',
  email: '',
  engagementDate: '',
  familyMembers: [{ relation: '', name: '', age: '' }],
  children: [{ name: '', age: '' }],
  prodaRA: '',
  abn: '',

  // Bank detail fields
  bankName: '',
  accountName: '',
  accountNumber: '',
  bsb: '',

  insurancePhoto: null,
  medicalCheckFile: null,
  fitProperFile: null,
  complianceFile: null,
  workingWithChildrenFile: null,

  qualification: [] as string[],

  // SectionEight
  certEducationFile: null,
  dateOne: '',
  fileOne: null,
  dateTwo: '',
  fileTwo: null,
  childProtectionCourse: '',
  childProtectionCoursePhoto: null,
  profDevCourses: '',
  profDevCoursesPhoto: null,
  policeClearanceDate: '',
  policeClearanceFile: null,
  familyMemberPolicyClearanceDates: '',
  familyMemberPolicyClearanceFile: null,
  vaccinationEvidenceFile: null,
  safetyGlassInspectionFile: null,
  councilApprovalFile: null,
  pestControlFile: null,

  // SectionNine
  operationHours: [] as string[]
};

const validationSchema = Yup.object({
  // If you want validations, you can add them here
  // e.g. bankName: Yup.string().required('Required'),
});

const EducatorForm = () => {
  const [step, setStep] = useState(0);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log('Form Submitted:', values);
      alert('Form submitted successfully!');
    },
    validateOnBlur: false,
    validateOnChange: false
  });

  // 1) Section Titles
  const sections = [
    'Educator Introduction',
    'FDC',
    'Family Member',
    'Your Proda & ABM',
    'Bank Details',
    'Documents 1',
    'Qualification',
    'Documents 2',
    'Operation Hours'
  ];

  // 2) The step components
  const visibleSteps = [
    <EducatorFormSectionOne formik={formik} stepSubmitted={false} />,
    <EducatorFormSectionTwo formik={formik} stepSubmitted={false} />,
    <EducatorFormSectionThree formik={formik} stepSubmitted={false} />,
    <EducatorFormSectionFour formik={formik} stepSubmitted={false} />,
    <EducatorFormSectionFive formik={formik} stepSubmitted={false} />,
    <EducatorFormSectionSix formik={formik} stepSubmitted={false} />,
    <EducatorFormSectionSeven formik={formik} stepSubmitted={false} />,
    <EducatorFormSectionEight formik={formik} stepSubmitted={false} />,
    <EducatorFormSectionNine formik={formik} stepSubmitted={false} />
  ];

  // 3) Sidebar click
  const goToStep = (index: number) => {
    setStep(index);
  };

  // 4) Next Button => always go next except final => submit
  const handleNext = () => {
    if (step === visibleSteps.length - 1) {
      formik.handleSubmit();
    } else {
      setStep((prev) => Math.min(prev + 1, visibleSteps.length - 1));
    }
  };

  // 5) Back Button => always go previous
  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <Row style={{ minHeight: '100vh', backgroundColor: '#FFFEFA', overflow: 'hidden' }}>
      {/* Sidebar */}
      <Col xs={24} md={5}>
        <div style={{ height: '100%', overflowY: 'auto' }}>
          <EducatorSidebar sections={sections} currentStep={step} goToStep={goToStep} />
        </div>
      </Col>

      {/* Form Content */}
      <Col xs={24} md={19} style={{ overflowY: 'auto', maxHeight: '100vh' }}>
        <form style={{ padding: '2rem' }} onSubmit={formik.handleSubmit}>
          {visibleSteps[step]}

          <div
            style={{
              marginTop: '2rem',
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap'
            }}
          >
            <button
              type="button"
              onClick={handleBack}
              style={{
                border: '1px solid rgba(0,0,0,0.8)',
                borderRadius: '12px',
                backgroundColor: 'transparent',
                padding: '0.7rem 2.5rem'
              }}
            >
              Back
            </button>

            <button
              type="button"
              onClick={handleNext}
              style={{
                border: 'none',
                color: 'white',
                borderRadius: '12px',
                backgroundColor: '#00E676',
                padding: '0.7rem 2.5rem'
              }}
            >
              {step === visibleSteps.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        </form>
      </Col>
    </Row>
  );
};

export default EducatorForm;