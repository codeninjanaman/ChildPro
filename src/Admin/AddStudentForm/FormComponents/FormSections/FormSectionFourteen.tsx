// FormSectionFourteen.tsx

import { InputField } from '../../StudentForm';

const FormSectionFourteen = ({ formik, stepSubmitted }: { formik: any; stepSubmitted: boolean }) => {
  const yesNoToggle = (name: string) => (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
      <label style={toggleStyle(formik.values[name] === true)}>
        <input
          type="radio"
          name={name}
          value="yes"
          checked={formik.values[name] === true}
          onChange={() => formik.setFieldValue(name, true)}
          
        />
        Yes
      </label>
      <label style={toggleStyle(formik.values[name] === false)}>
        <input
          type="radio"
          name={name}
          value="no"
          checked={formik.values[name] === false}
          onChange={() => formik.setFieldValue(name, false)}
          
        />
        No
      </label>
    </div>
  );

  const toggleStyle = (isActive: boolean) => ({
    padding: '4px 10px',
    border: '1px solid black',
    borderRadius: '50px',
    fontFamily: 'Poppins',
    fontSize: '13px',
    backgroundColor: isActive ? 'white' : 'white',
    color: isActive ? 'black' : 'black',
    cursor: 'pointer',
  });
  

  return (
    <div>
      <h2 style={{ fontFamily: 'Montserrat', color: '#00E676', fontSize: '18px', fontWeight: '500' }}>
        Other
      </h2>

      <div>
        <p>Has your child begun toilet training?</p>
        {yesNoToggle('toiletTraining')}
        <InputField name="toiletTrainingDetails" label="" formik={formik} stepSubmitted={stepSubmitted} />

        <p>Is your child used to being with other children?</p>
        {yesNoToggle('withOtherChildren')}
        <InputField name="withOtherChildrenDetails" label="" formik={formik} stepSubmitted={stepSubmitted} />

        <p>Is your child used to being with other adults?</p>
        {yesNoToggle('withOtherAdults')}
        <InputField name="withOtherAdultsDetails" label="" formik={formik} stepSubmitted={stepSubmitted} />

        <p>Is this the first time your child has been cared for by someone other than a family member?</p>
        {yesNoToggle('firstTimeNonFamilyCare')}
        <InputField name="firstTimeNonFamilyCareDetails" label="" formik={formik} stepSubmitted={stepSubmitted} />

        <p>Are there any aspects of your child's cultural, ethnic, and/or religious background that you would like us to be aware of?</p>
        {yesNoToggle('culturalBackgroundAwareness')}
        <InputField name="culturalBackgroundAwarenessDetails" label="" formik={formik} stepSubmitted={stepSubmitted} />

        <p>Any special considerations for your child? For example cultural, religious or additional needs?</p>
        {yesNoToggle('specialConsiderations')}
        <InputField name="specialConsiderationsDetails" label="" formik={formik} stepSubmitted={stepSubmitted} />
      </div>
    </div>
  );
};

export default FormSectionFourteen;
