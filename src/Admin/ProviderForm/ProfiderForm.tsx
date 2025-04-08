import React, { useEffect } from "react";
import { useFormik, FormikErrors } from "formik";
import * as Yup from "yup";
import Layout from "../Layout/Layout";

const STORAGE_KEY = "provider_form_data";

interface StaffMember {
  firstName: string;
  middleName: string;
  lastName: string;
}

interface ProviderFormValues {
  licenseeCompany: string;
  acnAbn: string;
  phone: string;
  coordinatorName: string;
  coordinatorEmail: string;
  licensee: string;
  serviceName: string;
  licenseeEmail: string;
  address: string;
  unitManagerName: string;
  unitManagerEmail: string;
  ccsProviderId: string;
  ccsServiceId: string;
  organisationId: string;
  authorisedPersonId: string;
  activationCode: string;
  deviceName: string;
  serviceType: string;
  existingSoftware: string;
  startDateCCSS: string;
  serviceStartDate: string;
  loginAccessDate: string;
  loginRecipientName: string;
  loginRecipientEmail: string;
  staffLogins: StaffMember[];
  serviceOperationDetails: string;
}

const blankStaffRow: StaffMember = {
  firstName: "",
  middleName: "",
  lastName: "",
};

const initialStaffLogins = Array.from({ length: 5 }, () => ({
  ...blankStaffRow,
}));

const initialValues: ProviderFormValues = {
  licenseeCompany: "",
  acnAbn: "",
  phone: "",
  coordinatorName: "",
  coordinatorEmail: "",
  licensee: "",
  serviceName: "",
  licenseeEmail: "",
  address: "",
  unitManagerName: "",
  unitManagerEmail: "",
  ccsProviderId: "",
  ccsServiceId: "",
  organisationId: "",
  authorisedPersonId: "",
  activationCode: "",
  deviceName: "",
  serviceType: "Existing",
  existingSoftware: "",
  startDateCCSS: "",
  serviceStartDate: "",
  loginAccessDate: "",
  loginRecipientName: "",
  loginRecipientEmail: "",
  staffLogins: initialStaffLogins,
  serviceOperationDetails: "",
};

const validationSchema = Yup.object({
  licenseeCompany: Yup.string().required("Required"),
  acnAbn: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  coordinatorName: Yup.string().required("Required"),
  coordinatorEmail: Yup.string().email("Invalid email").required("Required"),
  licensee: Yup.string().required("Required"),
  serviceName: Yup.string().required("Required"),
  licenseeEmail: Yup.string().email("Invalid email").required("Required"),
  address: Yup.string().required("Required"),
  unitManagerName: Yup.string().required("Required"),
  unitManagerEmail: Yup.string().email("Invalid email").required("Required"),
  ccsProviderId: Yup.string().required("Required"),
  ccsServiceId: Yup.string().required("Required"),
  organisationId: Yup.string().required("Required"),
  authorisedPersonId: Yup.string().required("Required"),
  activationCode: Yup.string().required("Required"),
  deviceName: Yup.string().required("Required"),
  serviceType: Yup.string().required("Required"),
  existingSoftware: Yup.string().required("Required"),
  startDateCCSS: Yup.string().required("Required"),
  serviceStartDate: Yup.string().required("Required"),
  loginAccessDate: Yup.string().required("Required"),
  loginRecipientName: Yup.string().required("Required"),
  loginRecipientEmail: Yup.string().email("Invalid email").required("Required"),
  // staffLogins validation commented out; add if needed
  // serviceOperationDetails can be optional
});

const renderNestedError = (errorObj: any): React.ReactNode => {
  return (
    <div style={{ color: "red", fontSize: "0.9rem" }}>
      {Object.entries(errorObj).map(([key, val]) => (
        <div key={key}>
          {key}: {typeof val === "string" ? val : renderNestedError(val)}
        </div>
      ))}
    </div>
  );
};

const renderFormikError = (
  error: string | FormikErrors<any> | string[] | FormikErrors<any>[] | undefined
): React.ReactNode => {
  if (!error) return null;
  if (typeof error === "string") {
    return <div style={{ color: "red" }}>{error}</div>;
  }
  if (Array.isArray(error)) {
    return (
      <div style={{ color: "red" }}>
        {error.map((item, idx) => (
          <div key={idx}>
            {typeof item === "string" ? item : renderNestedError(item)}
          </div>
        ))}
      </div>
    );
  }
  return renderNestedError(error);
};



const ProviderForm: React.FC = () => {
  const getInitialValues = (): ProviderFormValues => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error("Error parsing saved form data:", error);
    }
    return initialValues;
  };

  const formik = useFormik<ProviderFormValues>({
    initialValues: getInitialValues(),
    validationSchema,
    onSubmit: (values) => {
      console.log("Submitted Data:", values);
      localStorage.removeItem(STORAGE_KEY);
      alert("Provider Form submitted!");
    },
    validateOnBlur: false,
    validateOnChange: false,
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formik.values));
  }, [formik.values]);

  // Custom submit handler to check for errors before submission
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const errors = await formik.validateForm();
    if (Object.keys(errors).length > 0) {
      alert("Please fill all the required fields");
    } else {
      formik.handleSubmit(e);
    }
  };

  const renderField = (
    label: string,
    name: keyof ProviderFormValues,
    type: string = "text"
  ) => (
    <div style={{ flex: 1 }}>
      <label style={{ display: "block", marginBottom: "4px" }}>{label}</label>
      <input
        type={type}
        name={name}
        value={(formik.values[name] as string) || ""}
        onChange={formik.handleChange}
        style={{
          width: "100%",
          padding: "0.5rem",
          color: "rgba(0,0,0,0.6)",
          borderRadius: "5px",
          border: "1px solid rgba(0,0,0,0.2)",
        }}
      />
      {renderFormikError(formik.errors[name])}
    </div>
  );

  const renderSelect = (
    label: string,
    name: keyof ProviderFormValues,
    options: string[]
  ) => (
    <div style={{ flex: 1 }}>
      <label style={{ display: "block", marginBottom: "4px" }}>{label}</label>
      <select
        name={name}
        value={(formik.values[name] as string) || ""}
        onChange={formik.handleChange}
        style={{
          width: "100%",
          padding: "0.5rem",
          borderRadius: "5px",
          border: "1px solid rgba(0,0,0,0.2)",
          color: "rgba(0,0,0,0.6)",
        }}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {renderFormikError(formik.errors[name])}
    </div>
  );

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Poppins, sans-serif",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "600",
          fontFamily: "Roboto",
        }}
      >
        GSQ
      </div>
      <h1 style={{ color: "#00E676", fontSize: "20px" }}>Provider Details</h1>
      <hr
        style={{
          marginTop: "-15px",
          marginBottom: "15px",
          width: "40%",
          marginLeft: 0,
          borderColor: "#00E676",
        }}
      />

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        {/* Existing Fields */}
        <div style={{ display: "flex", gap: "3rem" }}>
          {renderField("Licensee Company", "licenseeCompany")}
          {renderField("ACN/ABN", "acnAbn")}
          {renderField("Phone", "phone")}
        </div>

        <div style={{ display: "flex", gap: "3rem" }}>
          {renderField("Coordinator Name", "coordinatorName")}
          {renderField("Coordinator Email", "coordinatorEmail", "email")}
          {renderField("Licensee", "licensee")}
        </div>

        <div style={{ display: "flex", gap: "3rem" }}>
          {renderField("Service Name", "serviceName")}
          {renderField("Licensee Email", "licenseeEmail", "email")}
          {renderField("Address", "address")}
        </div>

        <div style={{ display: "flex", gap: "3rem" }}>
          {renderField("Unit Manager Name", "unitManagerName")}
          {renderField("Unit Manager Email", "unitManagerEmail", "email")}
        </div>

        {/* CCS Section */}
        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            padding: "2rem",
            backgroundColor: "#fff",
            marginTop: "2rem",
          }}
        >
          <div style={{ marginBottom: "1.5rem" }}>
            <p style={{ color: "#00c853", fontWeight: 500 }}>
              The following 6 pieces of information MUST be delivered 100%
              accurately or HubWorks! cannot connect to, or query CCSS
            </p>
            <p style={{ color: "#00c853" }}>
              If you are unsure YOU must login to your PRODA account to view
              this information. You can also call PRODA Helpdesk on 1800 700
              199.
            </p>
            <p style={{ color: "#000", marginTop: "1rem" }}>
              If details supplied are incorrect a Development fee will apply of
              $500 per day to resolve the issue.
            </p>
          </div>

          <div style={{ display: "flex", gap: "3rem" }}>
            {renderField("CCS Provider ID", "ccsProviderId")}
            {renderField("CCS Service ID", "ccsServiceId")}
            {renderField("Organisation ID", "organisationId")}
          </div>

          <div style={{ display: "flex", gap: "3rem", marginTop: "1rem" }}>
            {renderField("Authorised Person ID", "authorisedPersonId")}
            {renderField("Activation Code", "activationCode")}
            {renderField("Device Name", "deviceName")}
          </div>

          <div style={{ margin: "2rem 0", fontWeight: 500 }}>
            Send a copy of CCS certificate to <strong>xx@gmail.com</strong>
          </div>

          <div style={{ display: "flex", gap: "3rem", marginTop: "1rem" }}>
            {renderSelect("Is your service New or Existing", "serviceType", [
              "New",
              "Existing",
            ])}
            {renderField(
              "Name the existing software service provider",
              "existingSoftware"
            )}
            {renderField(
              "Your Service CCSS Start Date",
              "serviceStartDate",
              "date"
            )}
          </div>

          <div style={{ display: "flex", gap: "3rem", marginTop: "1rem" }}>
            {renderField(
              "Date to start CCSS submissions through your new HubWorks!",
              "startDateCCSS",
              "date"
            )}
          </div>
        </div>

        {/* Login Access Section */}
        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            padding: "2rem",
            backgroundColor: "#fff",
            marginTop: "2rem",
          }}
        >
          <label style={{ fontWeight: 500 }}>
            Logins Access Date (Must be a Monday)
          </label>
          <p style={{ fontSize: "13px", marginBottom: "1rem", color: "#444" }}>
            This is the date you would like to receive your login details.
            Please be aware that HubHello cannot activate data migration for
            service setup without license payment being applied. Logins will
            only be delivered once service setup and data migration (if opting
            for) is deemed complete and payment, as requested, has been
            received. Your Logins Access Date will be your license start date.
          </p>
          <div style={{ display: "flex", gap: "3rem", marginTop: "0.5rem" }}>
            {renderField(" ", "loginAccessDate", "date")}
          </div>

          <div style={{ display: "flex", gap: "3rem", marginTop: "1rem" }}>
            {renderField(
              "Please nominate the authorised recipient of Login",
              "loginRecipientName"
            )}
            {renderField("Email", "loginRecipientEmail", "email")}
          </div>

          <p
            style={{
              marginTop: "1rem",
              fontSize: "13px",
              color: "#d50000",
              fontStyle: "italic",
            }}
          >
            This person will be listed as the Primary Staff Login in and known
            as the ‘Master User’ as referenced in our SA. We suggest you
            nominate your Director or Owner as the ‘Master User’.
          </p>
        </div>

        {/* Staff Table Section */}
        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            marginTop: "2rem",
            backgroundColor: "#fff",
          }}
        >
          <p style={{ padding: "1rem" }}>
            Please list all further staff who will require Logins.  Please note
            that only staff who have participated in HubWorks! Complimentary
            Training will be eligible for their Login to remain in the System. 
            Please also view ‘Online Training & Expectations’ content below.
          </p>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              tableLayout: "fixed",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#00c853", color: "#fff" }}>
                <th style={{ padding: "8px" }}>First Name</th>
                <th style={{ padding: "8px" }}>Middle Name</th>
                <th style={{ padding: "8px" }}>Last Name</th>
              </tr>
            </thead>
            <tbody>
              {formik.values.staffLogins.map((staff, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid #ccc" }}>
                  <td style={{ padding: "4px" }}>
                    <input
                      type="text"
                      style={{
                        width: "95%",
                        padding: "0.5rem",
                        border: "1px solid rgba(0,0,0,0.2)",
                        borderRadius: "4px",
                        color: "rgba(0,0,0,0.8)",
                      }}
                      value={staff.firstName}
                      onChange={(e) => {
                        const updated = [...formik.values.staffLogins];
                        updated[idx].firstName = e.target.value;
                        formik.setFieldValue("staffLogins", updated);
                      }}
                    />
                    {renderFormikError(
                      (
                        formik.errors.staffLogins?.[
                          idx
                        ] as FormikErrors<StaffMember>
                      )?.firstName
                    )}
                  </td>
                  <td style={{ padding: "4px" }}>
                    <input
                      type="text"
                      style={{
                        width: "95%",
                        padding: "0.5rem",
                        border: "1px solid rgba(0,0,0,0.2)",
                        borderRadius: "4px",
                        color: "rgba(0,0,0,0.8)",
                      }}
                      value={staff.middleName}
                      onChange={(e) => {
                        const updated = [...formik.values.staffLogins];
                        updated[idx].middleName = e.target.value;
                        formik.setFieldValue("staffLogins", updated);
                      }}
                    />
                    {renderFormikError(
                      (
                        formik.errors.staffLogins?.[
                          idx
                        ] as FormikErrors<StaffMember>
                      )?.middleName
                    )}
                  </td>
                  <td style={{ padding: "4px" }}>
                    <input
                      type="text"
                      style={{
                        width: "95%",
                        padding: "0.5rem",
                        border: "1px solid rgba(0,0,0,0.2)",
                        borderRadius: "4px",
                        color: "rgba(0,0,0,0.8)",
                      }}
                      value={staff.lastName}
                      onChange={(e) => {
                        const updated = [...formik.values.staffLogins];
                        updated[idx].lastName = e.target.value;
                        formik.setFieldValue("staffLogins", updated);
                      }}
                    />
                    {renderFormikError(
                      (
                        formik.errors.staffLogins?.[
                          idx
                        ] as FormikErrors<StaffMember>
                      )?.lastName
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Service Operation Section */}
        <div style={{ marginTop: "2rem" }}>
          <h2 style={{ color: "#00c853" }}>Service operation</h2>
          <p>
            Please list any service levies in detail. (Please indicate all
            levies applicable, N/A if not applicable.)
          </p>
          <p
            style={{ color: "#666", fontStyle: "italic", marginTop: "0.5rem" }}
          >
            Example:
            <br />
            If a child attends an educator from 8am - 6pm (10 hours) and is
            charged $5 an hour, that is $50 for the day and service levy is
            $0.50
            <br />
            Scenario 1 - Included in fee: the parent still pays the educator $50
            for the day.
            <br />
            Scenario 2 - Added on top of fee: the family pays $55.0 for the day.
          </p>
          <textarea
            name="serviceOperationDetails"
            value={formik.values.serviceOperationDetails}
            onChange={formik.handleChange}
            rows={5}
            style={{
              width: "100%",
              marginTop: "1rem",
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid rgba(0,0,0,0.2)",
              color: "rgba(0,0,0,0.8)",
            }}
            placeholder="Describe your service levies here..."
          />
        </div>

        {/* Submit */}
        <div style={{ marginTop: "2rem" }}>
          <button
            type="submit"
            style={{
              backgroundColor: "#00E676",
              color: "#fff",
              border: "none",
              padding: "0.8rem 1.5rem",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};


export default ProviderForm;
