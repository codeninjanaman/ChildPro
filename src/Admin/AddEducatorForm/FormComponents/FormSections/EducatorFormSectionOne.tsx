import { InputField } from "../../../AddStudentForm/StudentForm";

const EducatorFormSectionOne = ({ formik, stepSubmitted }: { formik: any; stepSubmitted: boolean }) => {
  return (
    <div>
      <h2 style={{ fontFamily: 'Montserrat', color: "#00E676", fontSize: '18px',  fontWeight: "500" }}>Educator Introduction</h2>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '5%', width: '100%' }}>
        <InputField label="Educator First Name" name="firstName" formik={formik} stepSubmitted={stepSubmitted} />
        <InputField label="Educator Last Name" name="lastName" formik={formik} stepSubmitted={stepSubmitted} />
        <InputField label="Educator Address" name="address" formik={formik} stepSubmitted={stepSubmitted} />
      </div>

      <div style={{ display: 'flex',  flexDirection: 'row', gap: '5%', width: '100%' }}>
        <InputField label="Date Of Birth" name="dob" type="date" formik={formik} stepSubmitted={stepSubmitted} />
        <InputField label="Email" name="email" formik={formik} stepSubmitted={stepSubmitted} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5%', width: '100%' }}>
          <InputField label="Date of Engagement with Service" name="engagementDate" type="date" formik={formik} stepSubmitted={stepSubmitted} />
          <span style={{ fontSize: '12px', color: '#6b7280' }}>
            Please  provide the date you engage with Nurture e.g. first you contact to service to start the registration process. You can fill the date of First interaction with Service directors
          </span>
        </div>
      </div>
    </div>
  );
};

export default EducatorFormSectionOne;
