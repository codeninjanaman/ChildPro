import { useState } from 'react';
import { InputField, SelectField } from '../../StudentForm';

const FormSectionNine = ({ formik, stepSubmitted }: { formik: any; stepSubmitted: boolean }) => {
  const [isThirdParty, setIsThirdParty] = useState(false);

  const handleYes = () => {
    setIsThirdParty(true);
    formik.setFieldValue('hasThirdPartyBilling', true);
  };

  const handleNo = () => {
    setIsThirdParty(false);
    formik.setFieldValue('hasThirdPartyBilling', false);

    // Optionally clear fields
    formik.setFieldValue('thirdPartyName', '');
    formik.setFieldValue('thirdPartyAddress', '');
    formik.setFieldValue('thirdPartySuburb', '');
    formik.setFieldValue('thirdPartyState', '');
    formik.setFieldValue('thirdPartyPostcode', '');
    formik.setFieldValue('thirdPartyEmail', '');
    formik.setFieldValue('thirdPartyPhone', '');
    formik.setFieldValue('thirdPartyContactPerson', '');
  };

  return (
    <div style={{ paddingRight: '1%' }}>
      <h2 style={{ fontFamily: 'Montserrat', color: '#00E676', fontSize: '18px', fontWeight: '500' }}>
        Third Party Billing
      </h2>

      <div style={{ fontFamily: 'Poppins', fontSize: '15px', marginBottom: '1rem' }}>
        Do you require third-party billing?
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button
          type="button"
          onClick={handleYes}
          style={{
            backgroundColor: isThirdParty ? '#00E676' : 'white',
            color: isThirdParty ? 'white' : 'black',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '5px 15px',
            fontFamily: 'Poppins',
          }}
        >
          Yes
        </button>

        <button
          type="button"
          onClick={handleNo}
          style={{
            backgroundColor: !isThirdParty ? '#00E676' : 'white',
            color: !isThirdParty ? 'white' : 'black',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '5px 15px',
            fontFamily: 'Poppins',
          }}
        >
          No
        </button>
      </div>

      {isThirdParty && (
        <div>
          
          <div style={{ display: 'flex',width:'100%', marginBottom:'1rem', gap: '3%', }}>
          <InputField label="Name on Invoice" name="thirdPartyName" formik={formik} stepSubmitted={stepSubmitted} />
          <InputField label="Address" name="thirdPartyAddress" formik={formik} stepSubmitted={stepSubmitted} />
          <InputField label="Suburb" name="thirdPartySuburb" formik={formik} stepSubmitted={stepSubmitted} />
          </div>

          <div style={{ display: 'flex',width:'100%', marginBottom:'1rem', gap: '3%', }}>
          <SelectField label="State" name="thirdPartyState" options={['NSW', 'VIC', 'QLD']} formik={formik} stepSubmitted={stepSubmitted} />
          <InputField label="Postcode" name="thirdPartyPostcode" formik={formik} stepSubmitted={stepSubmitted} />
          <InputField label="Email" name="thirdPartyEmail" formik={formik} stepSubmitted={stepSubmitted} />
          </div>
          <div style={{ display: 'flex',width:'100%', marginBottom:'1rem', gap: '3%', }}>
          <InputField label="Phone" name="thirdPartyPhone" formik={formik} stepSubmitted={stepSubmitted} />
          <InputField label="Contact Person" name="thirdPartyContactPerson" formik={formik} stepSubmitted={stepSubmitted} />
          <div style={{width:'100%'}} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FormSectionNine;
