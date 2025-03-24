import  { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Upload } from '@mui/icons-material';
import { Col, Row } from 'antd';
import FormSectionOne from './FormComponents/FormSections/FormSectionOne';
import FormSectionTwo from './FormComponents/FormSections/FormSectionTwo';
import FormSectionThree from './FormComponents/FormSections/FormSectionThree';
import FormSectionFour from './FormComponents/FormSections/FormSectionFour';
import FormSectionFive from './FormComponents/FormSections/FormSectionFive';
import FormSectionSix from './FormComponents/FormSections/FormSectionSix';
import FormSectionSeven from './FormComponents/FormSections/FormSectionSeven';
import Sidebar from './FormComponents/SideBar/Sidebar';
import FormSectionEight from './FormComponents/FormSections/FormSectionEight';

const STORAGE_KEY = 'child_form_data';

const initialValues = {
  firstName: '',
  middleName: '',
  lastName: '',
  preferredName: '',
  gender: '',
  crn: '',
  dateOfBirth: '',
  birthCertificate: null,
  countryOfBirth: '',
  homeAddress: '',
  suburb: '',
  state: '',
  postcode: '',
  school: '',
  languagesSpoken: [],
  indigenousStatus: '',
  culturalBackground: '',
  sessionType: '',
  preferenceDays: [],
  preferredStartDate: '',
  preferredEducator: '',
  Parent1firstName: '',
  Parent1middleName: '',
  Parent1lastName: '',
  Parent1preferredName: '',
  Parent1gender: '',
  Parent1crn: '',
  Parent1dateOfBirth: '',
  Parent1birthCertificate: null,
  Parent1countryOfBirth: '',
  Parent1homeAddress: '',
  Parent1suburb: '',
  Parent1state: '',
  Parent1postcode: '',
  Parent1homephone: '',
  Parent1workphone: '',
  Parent1mobile: '',
  Parent1email:'',
  Parent1occupation:'',
  Parent1placeofwork:'',
  Parent1workstart:'',
  Parent1workfinish:'',
  Parent1language:[],
  Parent1CulturalBackground:'',
  healthCardType: [],
healthCardDocuments: {},
healthCardExpiries: {},
Parent1hasBankDetails: false,
Parent1bankName: '',
Parent1accountName: '',
Parent1accountNumber: '',
Parent1bsb: '',
Parent1bankBranch:'', 
Parent1methodofcontact:'',
Parent1Indigenousstate :''
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  middleName: Yup.string(),
  lastName: Yup.string().required('Required'),
  preferredName: Yup.string(),
  gender: Yup.string().required('Required'),
  dateOfBirth: Yup.date().required('Required'),
  birthCertificate: Yup.mixed().required('Birth Certificate is required'),
  countryOfBirth: Yup.string().required('Required'),
  homeAddress: Yup.string().required('Required'),
  suburb: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  postcode: Yup.string().required('Required'),
  school: Yup.string().required('Required'),
  languagesSpoken: Yup.array().min(1, 'At least one language is required'),
  indigenousStatus: Yup.string().required('Required'),
  culturalBackground: Yup.string().required('Required'),
  sessionType: Yup.string().required('Required'),
  preferenceDays: Yup.array().min(1, 'Select at least one day'),
  preferredStartDate: Yup.date().required('Required'),
  preferredEducator: Yup.string(),
  Parent1firstName: Yup.string().required('Required'),
  Parent1middleName: Yup.string(),
  Parent1lastName: Yup.string().required('Required'),
  Parent1preferredName: Yup.string(),
  Parent1gender: Yup.string().required('Required'),
  Parent1dateOfBirth: Yup.date().required('Required'),
  Parent1birthCertificate: Yup.mixed().required('Birth Certificate is required'),
  Parent1countryOfBirth: Yup.string().required('Required'),
  Parent1homeAddress: Yup.string().required('Required'),
  Parent1suburb: Yup.string().required('Required'),
  Parent1state: Yup.string().required('Required'),
  Parent1postcode: Yup.string().required('Required'),
  Parent1homephone: Yup.string().required('Required'),
  Parent1mobile: Yup.string().required('Required'),
  Parent1email: Yup.string().required('Required'),
  Parent1occupation: Yup.string().required('Required'),
  Parent1language: Yup.array().min(1, 'Select atleast one language'),
  Parent1CulturalBackground: Yup.string().required('Required'),
  Parent1bankName: Yup.string().when('Parent1hasBankDetails', {
    is: (val: boolean) => val === true,
    then: () => Yup.string().required('Required'),
    otherwise: () => Yup.string()
  }),
  Parent1bankBranch: Yup.string().when('Parent1hasBankDetails', {
    is: (val: boolean) => val === true,
    then: () => Yup.string().required('Required'),
    otherwise: () => Yup.string()
  }),
  Parent1accountName: Yup.string().when('Parent1hasBankDetails', {
    is: (val: boolean) => val === true,
    then: () => Yup.string().required('Required'),
    otherwise: () => Yup.string()
  }),
  Parent1accountNumber: Yup.string().when('Parent1hasBankDetails', {
    is: (val: boolean) => val === true,
    then: () => Yup.string().required('Required'),
    otherwise: () => Yup.string()
  }),
  Parent1bsb: Yup.string().when('Parent1hasBankDetails', {
    is: (val: boolean) => val === true,
    then: () => Yup.string().length(6, 'BSB must be 6 digits').required('Required'),
    otherwise: () => Yup.string()
  }),
  Parent1methodofcontact: Yup.string().required('Required'),
  Parent1Indigenousstate: Yup.string().required('Required'),
  
  
  
});

export const InputField = ({ label, name, type = 'text', formik, stepSubmitted }: { label: string, name: string, type?: string, formik: any, stepSubmitted: boolean }) => (
  <div style={{ marginBottom: '1rem', width:'100%' }}>
    <label style={{fontFamily:'Poppins', color:"rgba(0,0,0,0.8)", fontSize:'14px'}}>{label}</label><br />
    <input
      name={name}
      type={type}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
      style={{ padding: '0.5rem', width: '100%', border:'none',color:'rgba(0,0,0,0.8)',fontSize:'14px', fontFamily:'Poppins', boxShadow:'0px 0px 1px 0px rgba(0,0,0,0.55)', borderRadius:'5px' }}
    />
    {stepSubmitted && formik.errors[name] && (
      <div style={{ color: 'red' }}>{formik.errors[name]}</div>
    )}
  </div>
);

export const SelectField = ({
    label,
    name,
    options,
    formik,
    stepSubmitted
  }: {
    label: string;
    name: string;
    options: string[];
    formik: any;
    stepSubmitted: boolean;
  }) => (
    <div style={{ marginBottom: '1rem', width:"100%" }}>
      <label style={{fontFamily:'Poppins', color:"rgba(0,0,0,0.8)", fontSize:'14px'}}>{label}</label><br />
      <select
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        style={{ padding: '0.7rem', width: '100%', border:'none', backgroundColor:"white", borderRadius:'5px', boxShadow:'0px 0px 1px 0px rgba(0,0,0,0.55)' }}
      >
        <option value="">Select</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      {stepSubmitted && formik.errors[name] && (
        <div style={{ color: 'red' }}>{formik.errors[name]}</div>
      )}
    </div>
  );


export const MultiSelectTagField = ({
    label,
    name,
    options,
    formik,
    stepSubmitted
  }: {
    label: string;
    name: string;
    options: string[];
    formik: any;
    stepSubmitted: boolean;
  }) => {
    const selected = formik.values[name] as string[];
  
    const toggleOption = (option: string) => {
      const updated = selected.includes(option)
        ? selected.filter((lang) => lang !== option)
        : [...selected, option];
      formik.setFieldValue(name, updated);
    };
  
    return (
      <div style={{ marginBottom: '1rem', width:'100%' }}>
        <label style={{ fontFamily: 'Poppins', fontSize: '14px', color:"rgba(0,0,0,0.8)" }}>{label}</label><br />
        <div style={{
          border: 'none',
          backgroundColor:'white',
          borderRadius: '5px',
          padding: '4px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginTop: '0px',
          boxShadow:'0px 0px 1px 0px rgba(0,0,0,0.55)'
        }}>
          {selected.map((lang: string) => (
            <div key={lang} style={{
              backgroundColor: '#8b7dff',
              borderRadius: '999px',
              color: 'white',
              padding: '5px 10px',
              fontSize: '13px',
              fontFamily: 'Poppins',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              {lang}
              <span
                onClick={() => toggleOption(lang)}
                style={{ cursor: 'pointer', fontWeight: 'bold' }}
              >
                ×
              </span>
            </div>
          ))}
          <select
            onChange={(e) => {
              const value = e.target.value;
              if (value && !selected.includes(value)) {
                toggleOption(value);
              }
              e.target.value = '';
            }}
            style={{ border: 'none', outline: 'none', fontFamily: 'Poppins', fontSize: '13px' }}
          >
            <option value="">+ Add</option>
            {options.filter(o => !selected.includes(o)).map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        {stepSubmitted && formik.errors[name] && (
          <div style={{ color: 'red', marginTop: '4px' }}>{formik.errors[name]}</div>
        )}
      </div>
    );
  };
  

 export const FileUploadField = ({
    label,
    name,
    formik,
    stepSubmitted,
    accept = '.pdf,.jpeg,.jpg',
    maxSizeMB = 5
  }: {
    label: string;
    name: string;
    formik: any;
    stepSubmitted: boolean;
    accept?: string;
    maxSizeMB?: number;
  }) => (
    <div style={{ marginBottom: '1rem', display:'flex', flexDirection:'column', width:'100%' }}>
        <div style={{fontSize:"10px", color:"rgba(0,0,0,0.8)", fontFamily:"Poppins", fontWeight:'400'}}>Only JPEG and PDFs are accepted.</div>
        <div style={{display:'flex', alignItems:'center', gap:"1%"}}>
        <label htmlFor={name} style={{
  backgroundColor: 'black',
  borderRadius: '5px',
  color: 'white',
  padding: '6px 12px',
  fontFamily: 'Poppins',
  fontSize: '14px',
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  gap: '0.5rem',
  width: 'fit-content',
  lineHeight: '1'
}}>
  <Upload /> Upload Document
  <input
    id={name}
    type="file"
    accept={accept}
    style={{ display: 'none' }}
    onChange={(event) => {
      const file = event.currentTarget.files?.[0];
      if (file && file.size <= maxSizeMB * 1024 * 1024) {
        formik.setFieldValue(name, file);
      } else {
        alert(`File too large or invalid type. Max ${maxSizeMB}MB`);
      }
    }}
  />
</label>

<div style={{color:"#FF3333", fontSize:'14px',fontFamily:'Poppins' }}>{label}. The file size limit is 5MB.</div>


        </div>
        

{formik.values[name] && (
  <div style={{ marginTop: '0.5rem', fontSize: '13px', fontFamily: 'Poppins', color: 'rgba(0,0,0,0.7)' }}>
    {formik.values[name].name}
  </div>
)}

{stepSubmitted && formik.errors[name] && (
        <div style={{ color: 'red' }}>{formik.errors[name]}</div>
      )}




    </div>


  );
  
  
const sections = [
  'Child Introduction & Address',
  'School, Language & Class Schedule',
  'Parent 1 & Address',
  'Contact & Occupation',
  'Health Care Card',
  'Bank Account Details',
  'Contact Method & Disability',
  'Parent 2',
  'Third Party Billing',
  'Custody Arrangement',
  'Emergency Contact & Information',
  'Authority To',
  'Add Person',
  'Health & Medical Information',
  'Add Another Children'
];

const stepFields: { [key: number]: (keyof typeof initialValues)[] } = {
  0: [
    'firstName', 'middleName', 'lastName', 'preferredName', 'gender', 'crn',
    'dateOfBirth', 'birthCertificate',
    'countryOfBirth', 'homeAddress', 'suburb', 'state', 'postcode'
  ],
  1: [
    'school', 'languagesSpoken', 'indigenousStatus', 'culturalBackground',
    'sessionType', 'preferenceDays', 'preferredStartDate', 'preferredEducator'
  ],
  2: [
    'Parent1firstName', 'Parent1middleName', 'Parent1lastName', 'Parent1preferredName', 'Parent1gender', 'Parent1crn',
    'Parent1dateOfBirth', 'Parent1birthCertificate',
    'Parent1countryOfBirth', 'Parent1homeAddress', 'Parent1suburb', 'Parent1state', 'Parent1postcode'
  ],
  3: [
    'Parent1homephone','Parent1workphone','Parent1mobile','Parent1email', 'Parent1occupation', 'Parent1placeofwork', 'Parent1workstart',
  'Parent1workfinish',  'Parent1language', 'Parent1CulturalBackground'
  ],
  4: ['healthCardType',
  'healthCardDocuments',
  'healthCardExpiries'],
  5: ['Parent1bankName', 'Parent1accountName', 'Parent1accountNumber', 'Parent1bsb'],
  6: ['Parent1methodofcontact', 'Parent1Indigenousstate'],
};

const ChildForm = () => {
  const [step, setStep] = useState(0);
  const [stepSubmitted, setStepSubmitted] = useState(false);
  const [showParent2Sections, setShowParent2Sections] = useState(false);

  

  const formik = useFormik({
    initialValues: JSON.parse(localStorage.getItem(STORAGE_KEY) || JSON.stringify(initialValues)),
    validationSchema,
    onSubmit: (values) => {
      console.log('Submitted Data', values);
      localStorage.removeItem(STORAGE_KEY);
      alert('Form submitted!');
    },
    validateOnBlur: false,
    validateOnChange: false
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formik.values));
  }, [formik.values]);

  const next = async () => {
    setStepSubmitted(true);
    const fieldsToValidate = stepFields[step];
    const errors = await formik.validateForm();
    const stepErrors = Object.keys(errors).filter(key => fieldsToValidate.includes(key as keyof typeof initialValues));
    console.log(formik.values)

    if (stepErrors.length === 0) {
      setStep((s) => Math.min(s + 1, sections.length - 1));
      setStepSubmitted(false);
    } else {
      formik.setTouched(
        fieldsToValidate.reduce((acc, key) => ({ ...acc, [key]: true }), {}),
        true
      );
    }
  };

  const back = () => {
    setStep((s) => Math.max(s - 1, 0));
    setStepSubmitted(false);
  };

  const goToStep = (index: number) => {
    setStep(index);
    setStepSubmitted(false);
  };

  return (
    
    <Row style={{ height: '100vh', backgroundColor: '#FFFEFA', overflow: 'hidden' }}>

        
<Col span={5}>
  <div style={{ height: '100vh', overflow: 'hidden' }}>
    <Sidebar sections={sections} currentStep={step} goToStep={goToStep} />
  </div>
</Col>

      <Col span={19} style={{ overflow: 'auto', maxHeight: '100vh'}} >
      <form onSubmit={formik.handleSubmit} style={{ padding: '2rem', flex: 1 }}>
        {step === 0 && <FormSectionOne formik={formik} stepSubmitted={stepSubmitted} />}
        {step === 1 && <FormSectionTwo formik={formik} stepSubmitted={stepSubmitted} />}
        {step === 2 && <FormSectionThree formik={formik} stepSubmitted={stepSubmitted} parentPrefix='Parent1' />}
        {step === 3 && <FormSectionFour formik={formik} stepSubmitted={stepSubmitted} parentPrefix='Parent1' />}
        {step === 4 && <FormSectionFive formik={formik} stepSubmitted={stepSubmitted} parentPrefix='Parent1' />}
        {step === 5 && <FormSectionSix formik={formik} stepSubmitted={stepSubmitted} parentPrefix='Parent1' />}
        {step === 6 && <FormSectionSeven formik={formik} stepSubmitted={stepSubmitted} parentPrefix='Parent1'/>}
        {step === 7 && <FormSectionEight formik={formik} stepSubmitted={stepSubmitted} setShowParent2Sections={setShowParent2Sections}/>}
        <div style={{ marginTop: '2rem' , display:'flex', justifyContent:'space-between',marginBlock:"5%"}}>
          <button type="button" onClick={back} style={{ border:'1px solid rgba(0,0,0,0.8)', borderRadius:'12px', backgroundColor:"transparent", padding:'0.7% 2.5%'}}>Back</button>
          <button type="button" onClick={next} style={{ border:"none", color:'white', borderRadius:'12px', backgroundColor:"#00E676", padding:'0.7% 2.5%'}}>{step === sections.length - 1 ? 'Submit' : 'Next'}</button>
        </div>
      </form>
      </Col>
      </Row>
    
  );
};

export default ChildForm;
