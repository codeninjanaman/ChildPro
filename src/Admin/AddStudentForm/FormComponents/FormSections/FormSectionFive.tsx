import { Upload } from "@mui/icons-material";
import { useState } from "react";

const FormSectionFive = ({
  formik,
  stepSubmitted,
  parentPrefix,
}: {
  formik: any;
  stepSubmitted: boolean;
  parentPrefix: string; // e.g., 'Parent1' or 'Parent2'
}) => {
  const [isHolder, setIsHolder] = useState(false);

  const cardTypes = [
    'Commonwealth Senior Health Card',
    'Ex- Carer Allowance (Child) Health Care Card',
    'Foster Child Health Care Card',
    'Health Care Card',
    'Low Income Health Card',
    'Pensioner Concession Card'
  ];

  const toggleCardType = (type: string) => {
    const selected = formik.values[`${parentPrefix}healthCardType`] || [];
    if (selected.includes(type)) {
      const updated = selected.filter((t: any) => t !== type);
      const updatedDocs = { ...formik.values[`${parentPrefix}healthCardDocuments`] };
      const updatedExp = { ...formik.values[`${parentPrefix}healthCardExpiries`] };
      delete updatedDocs[type];
      delete updatedExp[type];

      formik.setFieldValue(`${parentPrefix}healthCardType`, updated);
      formik.setFieldValue(`${parentPrefix}healthCardDocuments`, updatedDocs);
      formik.setFieldValue(`${parentPrefix}healthCardExpiries`, updatedExp);
    } else {
      formik.setFieldValue(`${parentPrefix}healthCardType`, [...selected, type]);
    }
  };

  return (
    <div style={{ paddingRight: '1%' }}>
      <h2 style={{ fontFamily: 'Montserrat', color: '#00E676', fontSize: '18px', fontWeight: '500' }}>
        Health Care Card
      </h2>

      <div style={{ fontFamily: 'Poppins', fontSize: '15px', marginBottom: '1rem' }}>
        Concession/Health care card holder?
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button
          type="button"
          onClick={() => setIsHolder(true)}
          style={{
            backgroundColor: isHolder ? '#00E676' : 'white',
            color: isHolder ? 'white' : 'black',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '5px 15px',
            fontFamily: 'Poppins'
          }}
        >
          Yes
        </button>

        <button
          type="button"
          onClick={() => {
            setIsHolder(false);
            formik.setFieldValue(`${parentPrefix}healthCardType`, []);
            formik.setFieldValue(`${parentPrefix}healthCardDocuments`, {});
            formik.setFieldValue(`${parentPrefix}healthCardExpiries`, {});
          }}
          style={{
            backgroundColor: !isHolder ? '#00E676' : 'white',
            color: !isHolder ? 'white' : 'black',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '5px 15px',
            fontFamily: 'Poppins'
          }}
        >
          No
        </button>
      </div>

      {isHolder && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {cardTypes.map((type) => (
            <div key={type}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'Poppins' }}>
                <input
                  type="checkbox"
                  checked={(formik.values[`${parentPrefix}healthCardType`] || []).includes(type)}
                  onChange={() => toggleCardType(type)}
                />
                {type}
              </label>

              {(formik.values[`${parentPrefix}healthCardType`] || []).includes(type) && (
                <div style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                  <input
                    type="date"
                    value={formik.values[`${parentPrefix}healthCardExpiries`]?.[type] || ''}
                    onChange={(e) => formik.setFieldValue(`${parentPrefix}healthCardExpiries.${type}`, e.target.value)}
                    style={{
                      padding: '0.5rem',
                      border: '1px solid #ccc',
                      borderRadius: '5px',
                      fontFamily: 'Poppins'
                    }}
                  />

                  <div style={{ fontSize: '10px', color: 'rgba(0,0,0,0.8)', fontFamily: 'Poppins', marginTop: '0.5rem' }}>
                    Only JPEG and PDFs are accepted.
                  </div>

                  <label htmlFor={`healthCardDocument-${parentPrefix}-${type}`} style={{
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
                    lineHeight: '1',
                    marginTop: '0.5rem'
                  }}>
                    <Upload /> Upload Document
                    <input
                      id={`healthCardDocument-${parentPrefix}-${type}`}
                      type="file"
                      accept=".pdf,.jpeg,.jpg"
                      style={{ display: 'none' }}
                      onChange={(event) => {
                        const file = event.currentTarget.files?.[0];
                        if (file && file.size <= 5 * 1024 * 1024) {
                          formik.setFieldValue(`${parentPrefix}healthCardDocuments.${type}`, file);
                        } else {
                          alert('File too large or invalid type. Max 5MB');
                        }
                      }}
                    />
                  </label>

                  {formik.values[`${parentPrefix}healthCardDocuments`]?.[type] && (
                    <div style={{ marginTop: '0.5rem', fontSize: '13px', fontFamily: 'Poppins', color: 'rgba(0,0,0,0.7)' }}>
                      {formik.values[`${parentPrefix}healthCardDocuments`][type].name}
                    </div>
                  )}

                  {stepSubmitted && (
                    (!formik.values[`${parentPrefix}healthCardDocuments`]?.[type] ||
                      !formik.values[`${parentPrefix}healthCardExpiries`]?.[type]) && (
                      <div style={{ color: 'red', marginTop: '0.5rem' }}>
                        Expiry date and document are required for this card.
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormSectionFive;
