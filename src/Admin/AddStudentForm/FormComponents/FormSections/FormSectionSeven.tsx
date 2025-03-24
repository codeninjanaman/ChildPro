import { SelectField } from "../../StudentForm";

const FormSectionSeven = ({
  formik,
  stepSubmitted,
  parentPrefix,
}: {
  formik: any;
  stepSubmitted: boolean;
  parentPrefix: string;
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
        Contact Method & Disability
      </h2>

      <div style={{ display: "flex", gap: "3%", marginBottom: "2rem" }}>
        <SelectField
          label="Preferred Method of Contact"
          name={`${parentPrefix}methodofcontact`}
          options={["Work Phone", "Home Phone", "Mobile"]}
          formik={formik}
          stepSubmitted={stepSubmitted}
        />
        <SelectField
          label="Indigenous State"
          name={`${parentPrefix}Indigenousstate`}
          options={["Hello", "Hi"]}
          formik={formik}
          stepSubmitted={stepSubmitted}
        />

        <div style={{ width: "100%" }}></div>
      </div>

      <hr style={{ marginBottom: "1rem" }} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          fontFamily: "Poppins",
        }}
      >
        <label>
          <input
            type="checkbox"
            name={`${parentPrefix}hasDisability`}
            checked={formik.values[`${parentPrefix}hasDisability`] || false}
            onChange={formik.handleChange}
          />{" "}
          Disability?
        </label>

        <label>
          <input
            type="checkbox"
            name={`${parentPrefix}isPrimaryCareGiver`}
            checked={formik.values[`${parentPrefix}isPrimaryCareGiver`] || false}
            onChange={formik.handleChange}
          />{" "}
          Primary Care Giver?
        </label>
      </div>
    </div>
  );
};

export default FormSectionSeven;
