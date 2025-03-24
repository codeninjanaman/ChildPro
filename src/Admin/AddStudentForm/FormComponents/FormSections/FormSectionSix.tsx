import { useState, useEffect } from "react";
import { InputField } from "../../StudentForm";

const FormSectionSix = ({
  formik,
  stepSubmitted,
  parentPrefix,
}: {
  formik: any;
  stepSubmitted: boolean;
  parentPrefix: string;
}) => {
  const hasBankKey = `${parentPrefix}hasBankDetails`;
  const [hasBankDetails, setHasBankDetails] = useState<boolean>(
    formik.values[hasBankKey] || false
  );

  useEffect(() => {
    formik.setFieldValue(hasBankKey, hasBankDetails);
  }, [hasBankDetails]);

  const handleClear = () => {
    setHasBankDetails(false);
    const fields = [
      "bankName",
      "bankBranch",
      "accountName",
      "accountNumber",
      "bsb",
    ];
    fields.forEach((field) => formik.setFieldValue(`${parentPrefix}${field}`, ""));
  };

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
        Bank Account Details
      </h2>

      <div
        style={{ fontFamily: "Poppins", fontSize: "15px", marginBottom: "1rem" }}
      >
        Bank Account Details?
      </div>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button
          type="button"
          onClick={() => setHasBankDetails(true)}
          style={{
            backgroundColor: hasBankDetails ? "#00E676" : "white",
            color: hasBankDetails ? "white" : "black",
            border: "1px solid black",
            borderRadius: "6px",
            padding: "5px 15px",
            fontFamily: "Poppins",
          }}
        >
          Yes
        </button>

        <button
          type="button"
          onClick={handleClear}
          style={{
            backgroundColor: !hasBankDetails ? "#00E676" : "white",
            color: !hasBankDetails ? "white" : "black",
            border: "1px solid black",
            borderRadius: "6px",
            padding: "5px 15px",
            fontFamily: "Poppins",
          }}
        >
          No
        </button>
      </div>

      {hasBankDetails && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", width: "100%", gap: "3%" }}>
            <InputField
              label="Bank Name"
              name={`${parentPrefix}bankName`}
              formik={formik}
              stepSubmitted={stepSubmitted}
            />
            <InputField
              label="Bank Branch"
              name={`${parentPrefix}bankBranch`}
              formik={formik}
              stepSubmitted={stepSubmitted}
            />
            <InputField
              label="Account Name"
              name={`${parentPrefix}accountName`}
              formik={formik}
              stepSubmitted={stepSubmitted}
            />
          </div>

          <div style={{ display: "flex", width: "100%", gap: "3%" }}>
            <InputField
              label="Account Number"
              name={`${parentPrefix}accountNumber`}
              formik={formik}
              stepSubmitted={stepSubmitted}
            />
            <InputField
              label="BSB"
              name={`${parentPrefix}bsb`}
              formik={formik}
              stepSubmitted={stepSubmitted}
            />
            <div style={{ width: "100%" }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormSectionSix;
