import {  InputField, MultiSelectTagField, SelectField } from "../../StudentForm";

const FormSectionTwo = ({ formik, stepSubmitted }: { formik: any, stepSubmitted: boolean }) => (
  <div style={{paddingRight:'1%'}}>
    <h2 style={{fontFamily:'Montserrat', color:"#00E676", fontSize:'18px', fontWeight:"500"}}>School, Language & Class Schedule</h2>
    <div style={{ display: 'flex',width:'100%', gap: '3%' }}>
    <InputField label="School" name="school" formik={formik} stepSubmitted={stepSubmitted} />
    <MultiSelectTagField
  label="Languages Spoken at Home"
  name="languagesSpoken"
  options={['English', 'Hindi', 'Tamil', 'Spanish', 'Punjabi']}
  formik={formik}
  stepSubmitted={stepSubmitted}
/>

    
    <SelectField label="Indigenous Status" name="indigenousStatus" options={['Not Started', 'hello', 'Other']} formik={formik} stepSubmitted={stepSubmitted} />
    </div>

    
    <InputField label="Cultural Background" name="culturalBackground" formik={formik} stepSubmitted={stepSubmitted} />

    <h2 style={{fontFamily:'Montserrat', color:"#00E676", fontSize:'18px', fontWeight:"500"}}>Class Schedule</h2>

    <div style={{ display: 'flex',width:'100%', gap: '3%' }}>
    
    <SelectField label="Select Session Type" name="sessionType" options={['Regular', 'alternative day']} formik={formik} stepSubmitted={stepSubmitted} />

<MultiSelectTagField
  label="Preferred Days"
  name="preferenceDays"
  options={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', "Sunday"]}
  formik={formik}
  stepSubmitted={stepSubmitted}
/>
    <InputField label="Preferred Start Date" name="preferredStartDate" type="date" formik={formik} stepSubmitted={stepSubmitted} />
    </div>
    
    <div style={{ display: 'flex',width:'100%', gap: '3%' }}>
    <SelectField label="Preferred Educator" name="preferredEducator" options={['Naman', 'Naman Verma', 'Naman Singh Verma']} formik={formik} stepSubmitted={stepSubmitted} />
    <div style={{width:'100%'}}></div>
    <div style={{width:'100%'}}></div>
    </div>

  </div>
);

export default FormSectionTwo;