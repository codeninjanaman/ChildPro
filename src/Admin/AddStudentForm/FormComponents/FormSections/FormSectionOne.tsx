import { FileUploadField, InputField, SelectField } from "../../StudentForm";

const FormSectionOne = ({ formik, stepSubmitted }: { formik: any, stepSubmitted: boolean }) => (
    <div>
      <h2 style={{fontFamily:'Montserrat', color:"#00E676", fontSize:'18px', fontWeight:"500"}}>Child Introduction</h2>
      <div style={{ display: 'flex',width:'100%', gap: '3%' }}>
        <InputField label="First Name" name="firstName" formik={formik} stepSubmitted={stepSubmitted} />
        <InputField label="Middle Name" name="middleName" formik={formik} stepSubmitted={stepSubmitted} />
        <InputField label="Last Name" name="lastName" formik={formik} stepSubmitted={stepSubmitted} />
      </div>
  
      <div style={{ display: 'flex',width:'100%', gap: '3%' }}>
      <InputField label="Preferred Name" name="preferredName" formik={formik} stepSubmitted={stepSubmitted} />
      <SelectField label="Gender" name="gender" options={['Male', 'Female', 'Other']} formik={formik} stepSubmitted={stepSubmitted} />
      <InputField label="CRN" name="crn" formik={formik} stepSubmitted={stepSubmitted} />
      </div>
      <div style={{ display: 'flex',width:'100%', gap: '3%' }}>
      <InputField label="Date of Birth" name="dateOfBirth" type="date" formik={formik} stepSubmitted={stepSubmitted} />
      <div style={{width:'100%'}}></div>
      <div style={{width:'100%'}}></div>
      </div>
      <FileUploadField
    label="Upload Birth Certificate"
    name="birthCertificate"
    formik={formik}
    stepSubmitted={stepSubmitted}
  />
  
  
      <h2 style={{fontFamily:'Montserrat', color:"#00E676", fontSize:'18px', fontWeight:"500"}}>Address</h2>
      <div style={{ display: 'flex',width:'100%', gap: '3%' }}>
      <SelectField label="Country of Birth" name="countryOfBirth" options={['Australia', 'Other Than Australia']} formik={formik} stepSubmitted={stepSubmitted} />
      <InputField label="Home Address" name="homeAddress" formik={formik} stepSubmitted={stepSubmitted} />
      <InputField label="Suburb" name="suburb" formik={formik} stepSubmitted={stepSubmitted} />
      </div>
      <div style={{ display: 'flex',width:'100%', gap: '3%' }}>
      
      <SelectField label="State" name="state" options={['HP', 'Sydney']} formik={formik} stepSubmitted={stepSubmitted} />
      <InputField label="Postcode" name="postcode" formik={formik} stepSubmitted={stepSubmitted} />
      <div style={{width:'100%'}}></div>
      </div>
    </div>
  );


  export default FormSectionOne;