import { InputField, SelectField } from "../../StudentForm";

const FormSectionEleven = ({
  formik,
  stepSubmitted,
}: {
  formik: any;
  stepSubmitted: boolean;
}) => {
  return (
    <div style={{ paddingRight: "1%" }}>
      <h2
        style={{
          fontFamily: "Montserrat",
          color: "#00E676",
          fontSize: "18px",
          fontWeight: "500",
        }}
      >
        Emergency Contact & Information
      </h2>

      <div style={{ display: "flex", width: "100%", gap: "3%" }}>
        <InputField
          label="Name"
          name="emergencyContactName"
          formik={formik}
          stepSubmitted={stepSubmitted}
        />
        <SelectField
          label="Relationship to Child"
          name="emergencyContactRelationship"
          options={["Father", "Mother", "Guardian", "Relative", "Friend", "Other"]}
          formik={formik}
          stepSubmitted={stepSubmitted}
        />
        <InputField
          label="Date of Birth"
          name="emergencyContactDOB"
          type="date"
          formik={formik}
          stepSubmitted={stepSubmitted}
        />
      </div>

      <div style={{ display: "flex", width: "100%", gap: "3%" }}>
        <InputField
          label="Address"
          name="emergencyContactAddress"
          formik={formik}
          stepSubmitted={stepSubmitted}
        />
        <InputField
          label="Home Telephone"
          name="emergencyContactHomePhone"
          formik={formik}
          stepSubmitted={stepSubmitted}
        />
        <InputField
          label="Work Telephone"
          name="emergencyContactWorkPhone"
          formik={formik}
          stepSubmitted={stepSubmitted}
        />
      </div>

      <div style={{ display: "flex", width: "100%", gap: "3%" }}>
        <InputField
          label="Occupation"
          name="emergencyContactOccupation"
          formik={formik}
          stepSubmitted={stepSubmitted}
        />
        <InputField
          label="Mobile"
          name="emergencyContactMobile"
          formik={formik}
          stepSubmitted={stepSubmitted}
        />
        <div style={{ width: "100%" }}></div>
      </div>
    </div>
  );
};

export default FormSectionEleven;
