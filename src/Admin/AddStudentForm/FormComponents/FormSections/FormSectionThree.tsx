import { FileUploadField, InputField, SelectField } from "../../StudentForm";

const FormSectionThree = ({
  formik,
  stepSubmitted,
  parentPrefix,
}: {
  formik: any;
  stepSubmitted: boolean;
  parentPrefix: string;
}) => (
  <div>
    <h2 style={{ fontFamily: 'Montserrat', color: '#00E676', fontSize: '18px', fontWeight: '500' }}>
      {parentPrefix === 'Parent1' ? 'Parent 1' : 'Parent 2'}
    </h2>

    <div style={{ display: 'flex', width: '100%', gap: '3%' }}>
      <InputField label="First Name" name={`${parentPrefix}firstName`} formik={formik} stepSubmitted={stepSubmitted} />
      <InputField label="Middle Name" name={`${parentPrefix}middleName`} formik={formik} stepSubmitted={stepSubmitted} />
      <InputField label="Last Name" name={`${parentPrefix}lastName`} formik={formik} stepSubmitted={stepSubmitted} />
    </div>

    <div style={{ display: 'flex', width: '100%', gap: '3%' }}>
      <InputField label="Preferred Name" name={`${parentPrefix}preferredName`} formik={formik} stepSubmitted={stepSubmitted} />
      <SelectField label="Gender" name={`${parentPrefix}gender`} options={['Male', 'Female', 'Other']} formik={formik} stepSubmitted={stepSubmitted} />
      <InputField label="CRN" name={`${parentPrefix}crn`} formik={formik} stepSubmitted={stepSubmitted} />
    </div>

    <div style={{ display: 'flex', width: '100%', gap: '3%' }}>
      <InputField label="Date of Birth" name={`${parentPrefix}dateOfBirth`} type="date" formik={formik} stepSubmitted={stepSubmitted} />
      <div style={{ width: '100%' }}></div>
      <div style={{ width: '100%' }}></div>
    </div>

    <FileUploadField
      label="Upload Birth Certificate"
      name={`${parentPrefix}birthCertificate`}
      formik={formik}
      stepSubmitted={stepSubmitted}
    />

    <h2 style={{ fontFamily: 'Montserrat', color: '#00E676', fontSize: '18px', fontWeight: '500' }}>Address</h2>

    <div style={{ display: 'flex', width: '100%', gap: '3%' }}>
      <SelectField label="Country of Birth" name={`${parentPrefix}countryOfBirth`} options={['Australia', 'Other Than Australia']} formik={formik} stepSubmitted={stepSubmitted} />
      <InputField label="Home Address" name={`${parentPrefix}homeAddress`} formik={formik} stepSubmitted={stepSubmitted} />
      <InputField label="Suburb" name={`${parentPrefix}suburb`} formik={formik} stepSubmitted={stepSubmitted} />
    </div>

    <div style={{ display: 'flex', width: '100%', gap: '3%' }}>
      <SelectField label="State" name={`${parentPrefix}state`} options={['HP', 'Sydney']} formik={formik} stepSubmitted={stepSubmitted} />
      <InputField label="Postcode" name={`${parentPrefix}postcode`} formik={formik} stepSubmitted={stepSubmitted} />
      <div style={{ width: '100%' }}></div>
    </div>
  </div>
);

export default FormSectionThree;
