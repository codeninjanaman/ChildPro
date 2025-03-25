import { useEffect } from 'react';

const AuthorityToggle = ({
  label,
  name,
  formik,
  stepSubmitted,
}: {
  label: string;
  name: string;
  formik: any;
  stepSubmitted: boolean;
}) => {
  const value = formik.values[name];

  const setValue = (val: boolean) => {
    formik.setFieldValue(name, val);
  };

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ fontFamily: 'Poppins', fontSize: '15px', marginBottom: '0.5rem' }}>
        {label} <span style={{ color: 'red' }}>*</span>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          type="button"
          onClick={() => setValue(true)}
          style={{
            backgroundColor: value ? '#00E676' : 'white',
            color: value ? 'white' : 'black',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '5px 15px',
            fontFamily: 'Poppins',
            fontWeight: 500,
          }}
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => setValue(false)}
          style={{
            backgroundColor: value === false ? '#00E676' : 'white',
            color: value === false ? 'white' : 'black',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '5px 15px',
            fontFamily: 'Poppins',
            fontWeight: 500,
          }}
        >
          No
        </button>
      </div>
      {stepSubmitted && formik.errors[name] && (
        <div style={{ color: 'red', marginTop: '0.5rem' }}>{formik.errors[name]}</div>
      )}
    </div>
  );
};

const FormSectionTwelve = ({
  formik,
  stepSubmitted,
}: {
  formik: any;
  stepSubmitted: boolean;
}) => {
  useEffect(() => {
    // Persist values in localStorage if needed
  }, [formik.values]);

  return (
    <div style={{ paddingRight: '1%' }}>
      <h2 style={{ fontFamily: 'Montserrat', color: '#00E676', fontSize: '18px', fontWeight: '500' }}>
        Authority To
      </h2>
      <p style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '15px', marginTop: '1rem' }}>
        This person has authority to
      </p>

      <AuthorityToggle
        label="Collect/Deliver your child to/from the service"
        name="authCollectDelivery"
        formik={formik}
        stepSubmitted={stepSubmitted}
      />
      <AuthorityToggle
        label="Give permission to authorise an educator to take the child outside the education and care service premises"
        name="authExcursion"
        formik={formik}
        stepSubmitted={stepSubmitted}
      />
      <AuthorityToggle
        label="Consent to medical treatment for your child"
        name="authMedical"
        formik={formik}
        stepSubmitted={stepSubmitted}
      />
      <AuthorityToggle
        label="Permit transportation of your child by an ambulance service"
        name="authAmbulance"
        formik={formik}
        stepSubmitted={stepSubmitted}
      />
      <AuthorityToggle
        label="Give permission to authorise the education and care service to transport the child or arrange transportation of the child"
        name="authTransport"
        formik={formik}
        stepSubmitted={stepSubmitted}
      />
      <AuthorityToggle
        label="Request/Permit medication to be given to your child"
        name="authMedication"
        formik={formik}
        stepSubmitted={stepSubmitted}
      />
      <AuthorityToggle
        label="If the parent/guardians cannot be contacted, this person should be notified of any accident, injury, trauma or illness involving your child"
        name="authNotifyEmergencies"
        formik={formik}
        stepSubmitted={stepSubmitted}
      />
    </div>
  );
};

export default FormSectionTwelve;
