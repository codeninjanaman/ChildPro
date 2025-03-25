import { useEffect, useState } from 'react';
import { InputField, FileUploadField } from '../../StudentForm';

const FormSectionTen = ({ formik, stepSubmitted }: { formik: any, stepSubmitted: boolean }) => {
  const [isDivorced, setIsDivorced] = useState(formik.values.isDivorced || false);
  const [hasCourtOrders, setHasCourtOrders] = useState(formik.values.hasCourtOrders || false);
  const [hasOtherCourtOrders, setHasOtherCourtOrders] = useState(formik.values.hasOtherCourtOrders || false);

  useEffect(() => {
    formik.setFieldValue('isDivorced', isDivorced);
    formik.setFieldValue('hasCourtOrders', hasCourtOrders);
    formik.setFieldValue('hasOtherCourtOrders', hasOtherCourtOrders);
  }, [isDivorced, hasCourtOrders, hasOtherCourtOrders]);

  return (
    <div style={{ paddingRight: '1%' }}>
      <h2 style={{ fontFamily: 'Montserrat', color: '#00E676', fontSize: '18px', fontWeight: '500' }}>
        Custody Arrangement
      </h2>

      <div style={{ marginBottom: '1rem' }}>Are you divorced?</div>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button type="button" onClick={() => setIsDivorced(true)} style={getButtonStyle(isDivorced)}>Yes</button>
        <button type="button" onClick={() => setIsDivorced(false)} style={getButtonStyle(!isDivorced)}>No</button>
      </div>

      {isDivorced && (
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ marginBottom: '0.5rem' }}>Who has legal custody of the child?</div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {['Parent1', 'Parent2', 'Both'].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => formik.setFieldValue('legalCustody', value)}
                style={getButtonStyle(formik.values.legalCustody === value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      )}

      <h3>Parent 1 Access Arrangements?</h3>
      <RadioTextBlock formik={formik} stepSubmitted={stepSubmitted} prefix="parent1" />

      <h3>Parent 2 Access Arrangements?</h3>
      <RadioTextBlock formik={formik} stepSubmitted={stepSubmitted} prefix="parent2" />

      <YesNoTextFile
        label="Are there any court orders, parent orders or parenting plans..."
        yesState={hasCourtOrders}
        setYesState={setHasCourtOrders}
        textField="courtOrderDetails"
        fileField="courtOrderFile"
        formik={formik}
        stepSubmitted={stepSubmitted}
      />

      <YesNoTextFile
        label="Are there any other court orders provided to the approved provider..."
        yesState={hasOtherCourtOrders}
        setYesState={setHasOtherCourtOrders}
        textField="otherCourtOrderDetails"
        fileField="otherCourtOrderFile"
        formik={formik}
        stepSubmitted={stepSubmitted}
      />
    </div>
  );
};

const getButtonStyle = (active: boolean) => ({
  backgroundColor: active ? '#00E676' : 'white',
  color: active ? 'white' : 'black',
  border: '1px solid black',
  borderRadius: '6px',
  padding: '5px 15px',
  fontFamily: 'Poppins'
});

const RadioTextBlock = ({ formik, stepSubmitted, prefix }: any) => (
  <div style={{ marginBottom: '1rem' }}>
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
      {['Full', 'Limited'].map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => formik.setFieldValue(`${prefix}AccessType`, value)}
          style={getButtonStyle(formik.values[`${prefix}AccessType`] === value)}
        >
          {value}
        </button>
      ))}
    </div>
    <InputField
      label="Details"
      name={`${prefix}AccessDetails`}
      formik={formik}
      stepSubmitted={stepSubmitted}
    />
  </div>
);

const YesNoTextFile = ({ label, yesState, setYesState, textField, fileField, formik, stepSubmitted }: any) => (
  <div style={{ marginTop: '2rem' }}>
    <div>{label}</div>
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
      <button type="button" onClick={() => setYesState(true)} style={getButtonStyle(yesState)}>Yes</button>
      <button type="button" onClick={() => setYesState(false)} style={getButtonStyle(!yesState)}>No</button>
    </div>
    {yesState && (
      <>
        <InputField label="Details" name={textField} formik={formik} stepSubmitted={stepSubmitted} />
        <FileUploadField label="Upload Document" name={fileField} formik={formik} stepSubmitted={stepSubmitted} />
      </>
    )}
  </div>
);

export default FormSectionTen;
