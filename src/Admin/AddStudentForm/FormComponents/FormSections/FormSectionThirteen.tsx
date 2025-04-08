import { InputField, SelectField, FileUploadField } from '../../StudentForm';

const FormSectionThirteen = ({ formik, stepSubmitted }: { formik: any; stepSubmitted: boolean }) => {

  const handleNumberOfDueImmunisationsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    formik.setFieldValue('numberOfDueImmunisations', value);

    // Update dueImmunisations array based on the value of numberOfDueImmunisations
    const updatedDueImmunisations = [];
    for (let i = 0; i < value; i++) {
      updatedDueImmunisations.push({ immunisationName: '', dueDate: '' });
    }
    formik.setFieldValue('dueImmunisations', updatedDueImmunisations);
  };

  const handleDueImmunisationChange = (index: number, field: string, value: string) => {
    const updated = [...formik.values.dueImmunisations];
    updated[index] = { ...updated[index], [field]: value };
    formik.setFieldValue('dueImmunisations', updated);
  };

  return (
    <div>
      <h2 style={{ fontFamily: 'Montserrat', color: '#00E676', fontSize: '18px', fontWeight: '500' }}>
        Immunisation History
      </h2>

      <InputField
        label="Immunisation History Date (As at)"
        name="immunisationHistoryDate"
        type="date"
        formik={formik}
        stepSubmitted={stepSubmitted}
      />

      <SelectField
        label="NIP Immunisation Status"
        name="nipImmunisationStatus"
        options={["Up to Date", "Not Updated"]}
        formik={formik}
        stepSubmitted={stepSubmitted}
      />

      <InputField
        label="Number of Due Immunisations"
        name="numberOfDueImmunisations"
        formik={formik}
        stepSubmitted={stepSubmitted}
        type="number"
        onChange={handleNumberOfDueImmunisationsChange} // Handle input change
      />

      {formik.values.numberOfDueImmunisations > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Due Immunisations</h3>
          {formik.values.dueImmunisations?.map((_:any, index:any) => (
            <div key={index} style={{ marginBottom: '1rem', display: 'flex', gap: '3rem' }}>
              <InputField
                label={`Immunisation Name ${index + 1}`}
                name={`dueImmunisations[${index}].immunisationName`}
                formik={formik}
                stepSubmitted={stepSubmitted}
                onChange={(e) => handleDueImmunisationChange(index, 'immunisationName', e.target.value)} // Handle changes
              />
              <InputField
                label={`Due Date ${index + 1}`}
                name={`dueImmunisations[${index}].dueDate`}
                formik={formik}
                stepSubmitted={stepSubmitted}
                type="date"
                onChange={(e) => handleDueImmunisationChange(index, 'dueDate', e.target.value)} // Handle changes
              />
            </div>
          ))}
        </div>
      )}

      <FileUploadField
        label="Upload Immunisation History Statement"
        name="immunisationHistoryFile"
        formik={formik}
        stepSubmitted={stepSubmitted}
      />

      <p style={{ color: 'red', fontSize: '12px', marginTop: '1rem' }}>
        Please note that the Immunisation History Statement is valid for only 3 months. If it has not been updated, kindly ensure that it is updated. For now, this will be accepted.
      </p>
    </div>
  );
};

export default FormSectionThirteen;
