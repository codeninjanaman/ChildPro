
const EducatorFormSectionFive = ({
  formik,
  stepSubmitted
}: {
  formik: any;
  stepSubmitted: boolean;
}) => {
  const { values, handleChange, handleBlur } = formik;

  return (
    <div>
      <h2
        style={{
          fontFamily: 'Montserrat',
          color: '#00E676',
          fontSize: '18px',
          fontWeight: '500',
          borderBottom: '2px solid #00E676',
          paddingBottom: '4px',
          marginBottom: '1.5rem'
        }}
      >
        Bank Details
      </h2>

      <p style={{ fontWeight: 400 }}>
        Your Bank Details<span style={{ color: 'red' }}>*</span>
      </p>
      <p style={{ fontSize: '12px', fontStyle: 'italic', marginTop: '2px' }}>
        Please Provide Your BSB No, Account Number, Bank Name, Account Holder Name
      </p>

      <div
        style={{
          backgroundColor: '#f0f0f0',
          padding: '1rem',
          borderRadius: '8px',
          marginTop: '1rem'
        }}
      >
        {/* Row 1: Bank Name & Account Name */}
        <div style={{ display: 'flex', gap: '5%', marginBottom: '1rem' }}>
          {/* Bank Name */}
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 400 }}>Bank Name</label>
            <input
              name="bankName"
              placeholder=""
              value={values.bankName}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '6px',
                marginTop: '4px',
                border: '1px solid rgba(0,0,0,0.2)'
              }}
            />
          </div>

          {/* Account Name */}
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 400 }}>Account Name</label>
            <input
              name="accountName"
              placeholder=""
              value={values.accountName}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '6px',
                marginTop: '4px',
                border: '1px solid rgba(0,0,0,0.2)'
              }}
            />
          </div>
        </div>

        {/* Row 2: Account Number & BSB */}
        <div style={{ display: 'flex', gap: '5%' }}>
          {/* Account Number */}
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 400 }}>Account Number</label>
            <input
              name="accountNumber"
              placeholder="xxxxxxxxxx"
              value={values.accountNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '6px',
                marginTop: '4px',
                border: '1px solid rgba(0,0,0,0.2)'
              }}
            />
          </div>

          {/* BSB */}
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 400 }}>BSB</label>
            <input
              name="bsb"
              placeholder=""
              value={values.bsb}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '6px',
                marginTop: '4px',
                border: '1px solid rgba(0,0,0,0.2)'
              }}
            />
          </div>
        </div>
      </div>

      {stepSubmitted && <div style={{ color: 'red' }}>We are in a submitted step!</div>}
    </div>
  );
};

export default EducatorFormSectionFive;