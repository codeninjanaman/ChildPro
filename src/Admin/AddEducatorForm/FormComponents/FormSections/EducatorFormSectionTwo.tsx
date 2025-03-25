import { InputField, FileUploadField } from '../../../AddStudentForm/StudentForm';

const EducatorFormSectionTwo = ({ formik, stepSubmitted }: { formik: any; stepSubmitted: boolean }) => {
  return (
    <div>
      <h2 style={{ fontFamily: 'Montserrat', color: "#00E676", fontSize: '18px', fontWeight: "500", marginBottom: '1.5rem' }}>FDC</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2%', width: '100%' }}>
        <InputField label="Expected FDC Start Date" name="fdcStartDate" type="date" formik={formik} stepSubmitted={stepSubmitted} />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2%', width: '100%' }}>
        <FileUploadField label="100 Points ID* Your Passport Photo" name="passport1" formik={formik} stepSubmitted={stepSubmitted} />
        <FileUploadField label="100 Points ID* Your Passport Photo" name="passport2" formik={formik} stepSubmitted={stepSubmitted} />
        <FileUploadField label="100 Points ID* Your Passport Photo" name="passport3" formik={formik} stepSubmitted={stepSubmitted} />
      </div>

      <div style={{ width: '100%', marginTop: '1rem' }}>
        <InputField label="Your Phone" name="phone" formik={formik} stepSubmitted={stepSubmitted} />
      </div>

      <div style={{ width: '100%' }}>
        <label style={{ fontFamily: 'Poppins', color: "rgba(0,0,0,0.8)", fontSize: '14px' }}>Intended FDC Name?</label>
        <textarea
          name="fdcName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fdcName}
          placeholder="Please write the Name of your FDC"
          style={{
            width: '100%',
            minHeight: '100px',
            padding: '10px',
            fontFamily: 'Poppins',
            fontSize: '14px',
            borderRadius: '5px',
            boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.55)',
            border: 'none',
            marginTop: '4px'
          }}
        />
        {stepSubmitted && formik.errors.fdcName && (
          <div style={{ color: 'red' }}>{formik.errors.fdcName}</div>
        )}
      </div>
    </div>
  );
};

export default EducatorFormSectionTwo;
