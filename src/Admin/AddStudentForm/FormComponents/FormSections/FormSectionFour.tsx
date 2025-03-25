import { InputField, MultiSelectTagField, SelectField } from "../../StudentForm";

const FormSectionFour = ({
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
      
    </h2>

    <div style={{ display: 'flex', width: '100%', gap: '3%' }}>
      <InputField label="Home Phone" name={`${parentPrefix}homephone`} formik={formik} stepSubmitted={stepSubmitted} />
      <InputField label="Work Phone" name={`${parentPrefix}workphone`} formik={formik} stepSubmitted={stepSubmitted} />
      <InputField label="Mobile" name={`${parentPrefix}mobile`} formik={formik} stepSubmitted={stepSubmitted} />
    </div>

    <div style={{ display: 'flex', width: '100%', gap: '3%' }}>
      <InputField label="Email" name={`${parentPrefix}email`} formik={formik} stepSubmitted={stepSubmitted} />
      <SelectField
        label="Occupation"
        name={`${parentPrefix}occupation`}
        options={['Working', 'Not Working']}
        formik={formik}
        stepSubmitted={stepSubmitted}
      />
      <InputField label="Place of Work" name={`${parentPrefix}placeofwork`} formik={formik} stepSubmitted={stepSubmitted} />
    </div>

    <div style={{ display: 'flex', width: '100%', gap: '3%' }}>
      <InputField label="Work Start" name={`${parentPrefix}workstart`} formik={formik} stepSubmitted={stepSubmitted} />
      <InputField label="Work Finish" name={`${parentPrefix}workfinish`} formik={formik} stepSubmitted={stepSubmitted} />
      <MultiSelectTagField
        label="Languages Spoken at Home"
        name={`${parentPrefix}language`}
        options={['English', 'Hindi', 'Tamil', 'Spanish', 'Punjabi']}
        formik={formik}
        stepSubmitted={stepSubmitted}
      />
    </div>

    <div>
      <InputField
        label="Cultural Background"
        name={`${parentPrefix}CulturalBackground`}
        formik={formik}
        stepSubmitted={stepSubmitted}
      />
    </div>
  </div>
);

export default FormSectionFour;
