import { InputField, SelectField, FileUploadField } from '../../StudentForm';

const YesNoToggle = ({ label, name, formik }: { label: string; name: string; formik: any }) => (
  <div style={{ marginBottom: '1rem' }}>
    <div style={{ fontFamily: 'Poppins', marginBottom: '0.5rem' }}>{label}</div>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <label style={toggleStyle(formik.values[name] === true)}>
        <input
          type="radio"
          name={name}
          value="yes"
          checked={formik.values[name] === true}
          onChange={() => formik.setFieldValue(name, true)}
          style={{  }}
        />
        Yes
      </label>
      <label style={toggleStyle(formik.values[name] === false)}>
        <input
          type="radio"
          name={name}
          value="no"
          checked={formik.values[name] === false}
          onChange={() => formik.setFieldValue(name, false)}
          style={{ }}
        />
        No
      </label>
    </div>
  </div>
);

const toggleStyle = (isActive: boolean) => ({
  padding: '6px 16px',
  border: '1px solid black',
  borderRadius: '50px',
  fontFamily: 'Poppins',
  fontSize: '13px',
  backgroundColor: isActive ? 'white' : 'white',
  color: isActive ? 'black' : 'black',
  cursor: 'pointer',
});



const FormSectionThirteen = ({ formik, stepSubmitted }: { formik: any; stepSubmitted: boolean }) => {

    const toggleStyle2 = () => ({
        padding: '3px 10px',
        border: '1px solid black',
        borderRadius: '50px',
        fontFamily: 'Poppins',
        fontSize: '13px',
        backgroundColor:'white',
        color:  'black',
        cursor: 'pointer',
        
      });

    const vaccineSchedule = [
        {
          name: 'Hepatitis B',
          notes: {},
        },
        {
          name: 'Diphtheria',
          notes: {},
        },
        {
          name: 'Tetanus',
          notes: {},
        },
        {
          name: 'Pertussis',
          notes: {},
        },
        {
          name: 'Polio',
          notes: {},
        },
        {
          name: 'Hib',
          notes: {},
        },
        {
          name: 'Pneumococcal',
          notes: {
            '6Month': 'Medically at risk and Indigenous',
            '4Year': 'Medically at risk and Indigenous',
          },
        },
        {
          name: 'Rotavirus',
          notes: {},
        },
        {
          name: 'Measles',
          notes: {},
        },
        {
          name: 'Mumps',
          notes: {},
        },
        {
          name: 'Rubella',
          notes: {},
        },
        {
          name: 'Meningococcal B',
          notes: {
            '2Month': 'Indigenous',
            '4Month': 'Indigenous',
            '6Month': 'Indigenous',
            '12Month': 'Indigenous',
          },
        },
        {
          name: 'Meningococcal ACWY',
          notes: {},
        },
        {
          name: 'Varicella',
          notes: {},
        },
        {
          name: 'Hepatitis A',
          notes: {},
        },
        {
          name: 'Influenza',
          notes: {
            '>5Year': 'Medically at risk and Indigenous',
          },
        },
      ];
      
      const ageGroups = [
        'Birth',
        '2Month',
        '4Month',
        '6Month',
        '12Month',
        '18Month',
        '2Year',
        '3Year',
        '4Year',
        '>5Year',
      ];

      const handleCheckboxChange = (vaccine: string, age: string) => {
        const updated = {
          ...formik.values.vaccinations,
          [vaccine]: {
            ...(formik.values.vaccinations?.[vaccine] || {}),
            [age]: !formik.values.vaccinations?.[vaccine]?.[age],
          },
        };
        formik.setFieldValue('vaccinations', updated);
      };
    
      const handleSelectAll = () => {
        const allChecked = ageGroups.every((age) =>
          vaccineSchedule.every((vaccine) => formik.values.vaccinations?.[vaccine.name]?.[age])
        );
      
        const updated: Record<string, Record<string, boolean>> = {};
        for (const v of vaccineSchedule) {
          updated[v.name] = {};
          for (const a of ageGroups) {
            updated[v.name][a] = !allChecked;
          }
        }
        formik.setFieldValue('vaccinations', updated);
      };
      

  return (
    <div>
      <h2 style={{ fontFamily: 'Montserrat', color: '#00E676', fontSize: '18px', fontWeight: '500' }}>
        Health & Medical Information
      </h2>

      <div style={{ display: 'flex', gap: '3%' }}>
        <InputField label="Medicare Number" name="medicareNumber" formik={formik} stepSubmitted={stepSubmitted} />
        <SelectField
          label="Medical Centre Name"
          name="medicalCentreName"
          options={["Centre A", "Centre B"]}
          formik={formik}
          stepSubmitted={stepSubmitted}
        />
        <SelectField
          label="Private Health Insurance"
          name="privateHealthInsurance"
          options={["Insurance A", "Insurance B"]}
          formik={formik}
          stepSubmitted={stepSubmitted}
        />
      </div>

      <FileUploadField
        label="Upload Medicare Document"
        name="medicareDocument"
        formik={formik}
        stepSubmitted={stepSubmitted}
      />

      <div style={{ display: 'flex', gap: '3%' }}>
        <InputField label="Doctor Name" name="doctorName" formik={formik} stepSubmitted={stepSubmitted} />
        <InputField label="Phone" name="doctorPhone" formik={formik} stepSubmitted={stepSubmitted} />
        <InputField label="Address" name="doctorAddress" formik={formik} stepSubmitted={stepSubmitted} />
      </div>

      <div style={{ display: 'flex', gap: '3%' }}>
        <InputField label="Dentist Name" name="dentistName" formik={formik} stepSubmitted={stepSubmitted} />
        <InputField label="Phone" name="dentistPhone" formik={formik} stepSubmitted={stepSubmitted} />
        <InputField label="Address" name="dentistAddress" formik={formik} stepSubmitted={stepSubmitted} />
      </div>

      <div style={{ display: 'flex', gap: '3%' }}>
        <InputField
          label="Maternal and Child Health Centre"
          name="childHealthCentre"
          formik={formik}
          stepSubmitted={stepSubmitted}
        />
        <InputField
          label="Maternal and Child Health Nurse"
          name="childHealthNurse"
          formik={formik}
          stepSubmitted={stepSubmitted}
        />
        <InputField
          label="Phone"
          name="childHealthPhone"
          formik={formik}
          stepSubmitted={stepSubmitted}
        />
      </div>

      <InputField
        label="Address"
        name="childHealthAddress"
        formik={formik}
        stepSubmitted={stepSubmitted}
      />

      {/* You can continue this pattern for all the toggle fields, file uploads, and conditional logic */}
      <YesNoToggle label="Ambulance subscription" name="ambulanceSubscription" formik={formik} />
      <YesNoToggle label="Authorisation for child to self administer medication" name="childSelfMedicate" formik={formik} />
      <YesNoToggle
        label="Do you give consent for the approved provider, a nominated supervisor or an educator to seek medical treatment for your child from a registered medical practitioner, hospital or ambulance service?"
        name="consentMedicalTreatment"
        formik={formik}
      />
      <YesNoToggle
        label="Do you give consent for the approved provider, a nominated supervisor or an educator to seek transportation of your child by an ambulance service?"
        name="consentAmbulance"
        formik={formik}
      />

<div style={{ marginTop: '2rem' }}>
  {/* Purple Box Toggle Questions */}
  <div style={{ background: '#6c63ff', borderRadius: '10px', padding: '1rem', marginBottom: '1rem', color: 'white', fontFamily: 'Poppins' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
      <span>Has your child been diagnosed at risk of Anaphylaxis?</span>
      <div style={{display:'flex', whiteSpace:'nowrap', gap:'4%'}}>
        <label style={toggleStyle2()}><input type="radio" name="hasAnaphylaxisRisk" checked={formik.values.hasAnaphylaxisRisk === true} onChange={() => formik.setFieldValue('hasAnaphylaxisRisk', true)} /> Yes</label>
        <label style={toggleStyle2()}><input type="radio" name="hasAnaphylaxisRisk" checked={formik.values.hasAnaphylaxisRisk === false} onChange={() => formik.setFieldValue('hasAnaphylaxisRisk', false)} /> No</label>
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
      <span>Does your child have Asthma?</span>
      <div style={{display:'flex', whiteSpace:'nowrap', gap:'4%'}}>
        <label style={toggleStyle2()}><input type="radio" name="hasAsthma" checked={formik.values.hasAsthma === true} onChange={() => formik.setFieldValue('hasAsthma', true)} /> Yes</label>
        <label style={toggleStyle2()}><input type="radio" name="hasAsthma" checked={formik.values.hasAsthma === false} onChange={() => formik.setFieldValue('hasAsthma', false)} /> No</label>
      </div>
    </div>
  </div>

  {/* Allergies Block */}
  <div style={{ fontFamily: 'Poppins' }}>
    <h3>Does your child have?</h3>
    <p style={{ marginBottom: '0.5rem' }}>Any allergies: eg. food, medication, animals, insects?</p>
    <div style={{ marginBottom: '0.5rem', display:'flex', whiteSpace:'nowrap', gap:"1%" }}>
      <label style={toggleStyle2()}><input type="radio" name="hasAllergies" checked={formik.values.hasAllergies === true} onChange={() => formik.setFieldValue('hasAllergies', true)} /> Yes</label>
      <label style={toggleStyle2()}><input type="radio" name="hasAllergies" checked={formik.values.hasAllergies === false} onChange={() => formik.setFieldValue('hasAllergies', false)} /> No</label>
    </div>

    {formik.values.hasAllergies && (
      <>
        <textarea
          name="allergyDetails"
          value={formik.values.allergyDetails}
          onChange={formik.handleChange}
          placeholder="Describe allergy..."
          style={{
            width: '100%',
            height: '80px',
            padding: '0.5rem',
            marginBottom: '0.5rem',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontFamily: 'Poppins'
          }}
        />

        <FileUploadField
          label="Upload Allergy Document"
          name="allergyFile"
          formik={formik}
          stepSubmitted={stepSubmitted}
        />

        <p style={{ marginTop: '1rem' }}>Has the Allergies Medical Management Plan been provided to the service?</p>
        <div style={{ marginBottom: '0.5rem', display:'flex', whiteSpace:'nowrap', gap:"1%" }}>
        <label style={toggleStyle2()}><input type="radio" name="allergyPlanProvided" checked={formik.values.allergyPlanProvided === true} onChange={() => formik.setFieldValue('allergyPlanProvided', true)} /> Yes</label>
        <label style={toggleStyle2()}><input type="radio" name="allergyPlanProvided" checked={formik.values.allergyPlanProvided === false} onChange={() => formik.setFieldValue('allergyPlanProvided', false)} /> No</label>
        </div>
        
        {formik.values.allergyPlanProvided && (
          <>
            <textarea
              name="allergyPlanDetails"
              value={formik.values.allergyPlanDetails}
              onChange={formik.handleChange}
              placeholder="Enter details of the Allergy Management Plan..."
              style={{
                width: '100%',
                height: '80px',
                padding: '0.5rem',
                marginTop: '0.5rem',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontFamily: 'Poppins'
              }}
            />

            <FileUploadField
              label="Upload Allergy Management Plan"
              name="allergyPlanFile"
              formik={formik}
              stepSubmitted={stepSubmitted}
            />
          </>
        )}
      </>
    )}
  </div>
</div>

{/* Food Allergy Section */}
<div style={{ fontFamily: 'Poppins', marginTop: '2rem' }}>
  <p>Any food allergies?</p>
  <div style={{ marginBottom: '1rem', display:'flex', whiteSpace:'nowrap', gap:"1%" }}>
    <label style={toggleStyle2()}><input type="radio" name="hasFoodAllergies" checked={formik.values.hasFoodAllergies === true} onChange={() => formik.setFieldValue('hasFoodAllergies', true)} /> Yes</label>
    <label style={toggleStyle2()}><input type="radio" name="hasFoodAllergies" checked={formik.values.hasFoodAllergies === false} onChange={() => formik.setFieldValue('hasFoodAllergies', false)} /> No</label>
  </div>

  {formik.values.hasFoodAllergies && (
    <>
      {/* Food Allergy Checkboxes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
        {[
          'Chocolate',
          'Eggs',
          'Fish, Shellfish and all seafood',
          'Fruits and vegetables',
          'Honey',
          'Milk and all dairy product (lactose)',
          'Nuts (including tree nuts, coconut and legumes)',
          'Seeds (including corn and sesame)',
          'Soy and soybeans',
          'Wheat and gluten (including oats)',
        ].map((item) => (
          <label key={item}>
            <input
              type="checkbox"
              checked={formik.values.foodAllergyItems?.includes(item)}
              onChange={() => {
                const updated = formik.values.foodAllergyItems || [];
                if (updated.includes(item)) {
                  formik.setFieldValue('foodAllergyItems', updated.filter((i:any) => i !== item));
                } else {
                  formik.setFieldValue('foodAllergyItems', [...updated, item]);
                }
              }}
            />{' '}
            {item}
          </label>
        ))}

        {/* Other field */}
        <label>
          <input
            type="checkbox"
            checked={formik.values.foodAllergyItems?.includes('Other')}
            onChange={() => {
              const updated = formik.values.foodAllergyItems || [];
              if (updated.includes('Other')) {
                formik.setFieldValue('foodAllergyItems', updated.filter((i:any) => i !== 'Other'));
              } else {
                formik.setFieldValue('foodAllergyItems', [...updated, 'Other']);
              }
            }}
          />{' '}
          Other
        </label>
        {formik.values.foodAllergyItems?.includes('Other') && (
          <input
            type="text"
            placeholder="Specify other allergy"
            name="foodAllergyOther"
            value={formik.values.foodAllergyOther}
            onChange={formik.handleChange}
            style={{
              padding: '0.5rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontFamily: 'Poppins'
            }}
          />
        )}
      </div>

      {/* Has management plan */}
      <p style={{ marginBlock: '1rem' }}>Has the Food Allergies Medical Management Plan been provided to the service?</p>
      <div style={{ marginBottom: '1rem', display:'flex', whiteSpace:'nowrap', gap:"1%" }}>
      <label style={toggleStyle2()}><input type="radio" name="foodAllergyPlanProvided" checked={formik.values.foodAllergyPlanProvided === true} onChange={() => formik.setFieldValue('foodAllergyPlanProvided', true)} /> Yes</label>
      <label style={toggleStyle2()}><input type="radio" name="foodAllergyPlanProvided" checked={formik.values.foodAllergyPlanProvided === false} onChange={() => formik.setFieldValue('foodAllergyPlanProvided', false)} /> No</label>
      </div>

      <textarea
        name="foodAllergyPlanDetails"
        value={formik.values.foodAllergyPlanDetails}
        onChange={formik.handleChange}
        placeholder="Enter details if applicable"
        style={{
          width: '100%',
          height: '80px',
          padding: '0.5rem',
          margin: '1rem 0',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontFamily: 'Poppins'
        }}
      />

      <FileUploadField
        label="Upload Food Allergy Plan"
        name="foodAllergyPlanFile"
        formik={formik}
        stepSubmitted={stepSubmitted}
      />
    </>
  )}
</div>

{/* Special Dietary Requirements */}
<div style={{ fontFamily: 'Poppins', marginTop: '3rem' }}>
  <p>Any special dietary requirements/restrictions?</p>
  <div style={{ marginBottom: '1rem', display:'flex', whiteSpace:'nowrap', gap:"1%" }}>
    <label style={toggleStyle2()}><input type="radio" name="hasDietaryRequirements" checked={formik.values.hasDietaryRequirements === true} onChange={() => formik.setFieldValue('hasDietaryRequirements', true)} /> Yes</label>
    <label style={toggleStyle2()}><input type="radio" name="hasDietaryRequirements" checked={formik.values.hasDietaryRequirements === false} onChange={() => formik.setFieldValue('hasDietaryRequirements', false)} /> No</label>
  </div>

  {formik.values.hasDietaryRequirements && (
    <>
      <textarea
        name="dietaryRequirementsDetails"
        value={formik.values.dietaryRequirementsDetails}
        onChange={formik.handleChange}
        placeholder="Describe dietary requirements..."
        style={{
          width: '100%',
          height: '80px',
          padding: '0.5rem',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontFamily: 'Poppins'
        }}
      />

      <FileUploadField
        label="Upload Dietary Restrictions Document"
        name="dietaryRequirementsFile"
        formik={formik}
        stepSubmitted={stepSubmitted}
      />
    </>
  )}
</div>

{/* Hearing, Sight, Speech Issues */}
<div style={{ fontFamily: 'Poppins', marginTop: '2rem' }}>
  <p>Any problems with hearing, sight, speech?</p>
  <div style={{ marginBottom: '1rem', display:'flex', whiteSpace:'nowrap', gap:"1%" }}>
    <label style={toggleStyle2()}><input type="radio" name="hasHearingSightSpeechIssues" checked={formik.values.hasHearingSightSpeechIssues === true} onChange={() => formik.setFieldValue('hasHearingSightSpeechIssues', true)} /> Yes</label>
    <label style={toggleStyle2()}><input type="radio" name="hasHearingSightSpeechIssues" checked={formik.values.hasHearingSightSpeechIssues === false} onChange={() => formik.setFieldValue('hasHearingSightSpeechIssues', false)} /> No</label>
  </div>
  {formik.values.hasHearingSightSpeechIssues && (
    <>
      <textarea
        name="hearingSightSpeechDetails"
        value={formik.values.hearingSightSpeechDetails}
        onChange={formik.handleChange}
        placeholder="Provide details..."
        style={{ width: '100%', height: '80px', padding: '0.5rem', marginBottom: '1rem' }}
      />
      <FileUploadField
        label="Upload Document"
        name="hearingSightSpeechFile"
        formik={formik}
        stepSubmitted={stepSubmitted}
      />
    </>
  )}
</div>

{/* Medical Conditions */}
<div style={{ fontFamily: 'Poppins', marginTop: '2rem' }}>
  <p>Any medical conditions, operations, illnesses, disabilities?</p>
  <div style={{ marginBottom: '1rem', display:'flex', whiteSpace:'nowrap', gap:"1%" }}>
    <label style={toggleStyle2()}><input type="radio" name="hasMedicalConditions" checked={formik.values.hasMedicalConditions === true} onChange={() => formik.setFieldValue('hasMedicalConditions', true)} /> Yes</label>
    <label style={toggleStyle2()}><input type="radio" name="hasMedicalConditions" checked={formik.values.hasMedicalConditions === false} onChange={() => formik.setFieldValue('hasMedicalConditions', false)} /> No</label>
  </div>
  {formik.values.hasMedicalConditions && (
    <>
      <textarea
        name="medicalConditionsDetails"
        value={formik.values.medicalConditionsDetails}
        onChange={formik.handleChange}
        placeholder="Provide details..."
        style={{ width: '100%', height: '80px', padding: '0.5rem', marginBottom: '1rem' }}
      />
      <FileUploadField
        label="Upload Document"
        name="medicalConditionsFile"
        formik={formik}
        stepSubmitted={stepSubmitted}
      />
    </>
  )}
</div>

{/* Regular Medication */}
<div style={{ fontFamily: 'Poppins', marginTop: '2rem' }}>
  <p>Does your child take any regular medication?</p>
  <div style={{ marginBottom: '1rem', display:'flex', whiteSpace:'nowrap', gap:"1%" }}>
    <label style={toggleStyle2()}><input type="radio" name="takesRegularMedication" checked={formik.values.takesRegularMedication === true} onChange={() => formik.setFieldValue('takesRegularMedication', true)} /> Yes</label>
    <label style={toggleStyle2()}><input type="radio" name="takesRegularMedication" checked={formik.values.takesRegularMedication === false} onChange={() => formik.setFieldValue('takesRegularMedication', false)} /> No</label>
  </div>
  {formik.values.takesRegularMedication && (
    <>
      <textarea
        name="regularMedicationDetails"
        value={formik.values.regularMedicationDetails}
        onChange={formik.handleChange}
        placeholder="Provide details..."
        style={{ width: '100%', height: '80px', padding: '0.5rem', marginBottom: '1rem' }}
      />
      <FileUploadField
        label="Upload Document"
        name="regularMedicationFile"
        formik={formik}
        stepSubmitted={stepSubmitted}
      />
    </>
  )}
</div>

{/* Physical Disability */}
<div style={{ fontFamily: 'Poppins', marginTop: '2rem' }}>
  <p>Does your child have a physical disability or delay, including intellectual, sensory or physical impairment?</p>
  <div style={{ marginBottom: '1rem', display:'flex', whiteSpace:'nowrap', gap:"1%" }}>
    <label style={toggleStyle2()}><input type="radio" name="hasPhysicalDisability" checked={formik.values.hasPhysicalDisability === true} onChange={() => formik.setFieldValue('hasPhysicalDisability', true)} /> Yes</label>
    <label style={toggleStyle2()}><input type="radio" name="hasPhysicalDisability" checked={formik.values.hasPhysicalDisability === false} onChange={() => formik.setFieldValue('hasPhysicalDisability', false)} /> No</label>
  </div>
  {formik.values.hasPhysicalDisability && (
    <>
      <textarea
        name="physicalDisabilityDetails"
        value={formik.values.physicalDisabilityDetails}
        onChange={formik.handleChange}
        placeholder="Provide details..."
        style={{ width: '100%', height: '80px', padding: '0.5rem', marginBottom: '1rem' }}
      />
      <FileUploadField
        label="Upload Document"
        name="physicalDisabilityFile"
        formik={formik}
        stepSubmitted={stepSubmitted}
      />
    </>
  )}
</div>


{/* Parent Disability */}
<div style={{ fontFamily: 'Poppins', marginTop: '2rem' }}>
  <p>Does either parent have a disability?</p>
  <div style={{ marginBottom: '1rem', display:'flex', whiteSpace:'nowrap', gap:"1%" }}>
    <label style={toggleStyle2()}>
      <input
        type="radio"
        name="parentHasDisability"
        checked={formik.values.parentHasDisability === true}
        onChange={() => formik.setFieldValue('parentHasDisability', true)}
      />{' '}
      Yes
    </label>
    <label style={toggleStyle2()}>
      <input
        type="radio"
        name="parentHasDisability"
        checked={formik.values.parentHasDisability === false}
        onChange={() => formik.setFieldValue('parentHasDisability', false)}
      />{' '}
      No
    </label>
  </div>
  {formik.values.parentHasDisability && (
    <>
      <textarea
        name="parentDisabilityDetails"
        value={formik.values.parentDisabilityDetails}
        onChange={formik.handleChange}
        placeholder="Provide details..."
        style={{ width: '100%', height: '80px', padding: '0.5rem', marginBottom: '1rem' }}
      />
      <FileUploadField
        label="Upload Document"
        name="parentDisabilityFile"
        formik={formik}
        stepSubmitted={stepSubmitted}
      />
    </>
  )}
</div>

{/* Single Parent Family */}
<div style={{ fontFamily: 'Poppins', marginTop: '2rem' }}>
  <p>Is the family a single parent family?</p>
  <div style={{ marginBottom: '1rem', display:'flex', whiteSpace:'nowrap', gap:"1%" }}>
    <label style={toggleStyle2()}>
      <input
        type="radio"
        name="isSingleParentFamily"
        checked={formik.values.isSingleParentFamily === true}
        onChange={() => formik.setFieldValue('isSingleParentFamily', true)}
      />{' '}
      Yes
    </label>
    <label style={toggleStyle2()}>
      <input
        type="radio"
        name="isSingleParentFamily"
        checked={formik.values.isSingleParentFamily === false}
        onChange={() => formik.setFieldValue('isSingleParentFamily', false)}
      />{' '}
      No
    </label>
  </div>
  {formik.values.isSingleParentFamily && (
    <>
      <textarea
        name="singleParentFamilyDetails"
        value={formik.values.singleParentFamilyDetails}
        onChange={formik.handleChange}
        placeholder="Provide details..."
        style={{ width: '100%', height: '80px', padding: '0.5rem', marginBottom: '1rem' }}
      />
      <FileUploadField
        label="Upload Document"
        name="singleParentFamilyFile"
        formik={formik}
        stepSubmitted={stepSubmitted}
      />
    </>
  )}
</div>

<div style={{marginTop:'4rem'}}>
      <h2 style={{ fontFamily: 'Montserrat', color: '#00E676', fontSize: '18px', fontWeight: '500' }}>Vaccination Schedule</h2>

      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th></th>
            {ageGroups.map((age) => (
              <th key={age} style={{ padding: '6px 12px', backgroundColor: '#6C63FF', color: 'white', borderRadius: '6px', textAlign: 'center' }}>{age}</th>
            ))}
            <th>
              <button
                type="button"
                onClick={handleSelectAll}
                style={{ backgroundColor: '#ccc', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}
              >
                Select All
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {vaccineSchedule.map((vaccine) => (
            <tr key={vaccine.name}>
              <td style={{ padding: '8px', fontSize: '14px' }}>{vaccine.name}</td>
              {ageGroups.map((age) => (
                <td key={age} style={{ textAlign: 'center', padding: '8px' }}>
                  <input
                    type="checkbox"
                    checked={formik.values.vaccinations?.[vaccine.name]?.[age] || false}
                    onChange={() => handleCheckboxChange(vaccine.name, age)}
                  />
                  {(vaccine.notes as Record<string, string>)[age] && (
  <div style={{ fontSize: '8px', color: 'red' }}>
    {(vaccine.notes as Record<string, string>)[age]}
  </div>
)}


                </td>
              ))}
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div style={{fontSize:'12px', fontFamily:'Poppins', color:"rgba(0,0,0,0.7)", marginTop:'3rem'}}>(Please note additional vaccines for Aboriginal and Torres Strait Islander children and medically at risk children)
*The term Indigenous in the Immunisations table is inclusive of Aboriginal and Torres Strait Islander people (QLD, NT, WA and SA)
National Immunisation Program Schedule current from 1 July 2023</div>

    <div style={{ marginTop: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
          <input
            type="checkbox"
            checked={formik.values.notImmunised}
            onChange={(e) => formik.setFieldValue('notImmunised', e.target.checked)}
            id="notImmunised"
          />
          <label htmlFor="notImmunised" style={{ fontWeight: 600, fontSize: '16px' }}>Not Immunised?</label>
        </div>

        {formik.values.notImmunised && (
          <>
            <SelectField
              label="Reason for not immunising"
              name="notImmunisedReason"
              options={[
                'Information not available',
                'Religious beliefs',
                'Medical reasons',
                'Personal reasons',
              ]}
              formik={formik}
              stepSubmitted={stepSubmitted}
            />

            <FileUploadField
              label="Upload supporting document"
              name="notImmunisedFile"
              formik={formik}
              stepSubmitted={stepSubmitted}
            />
          </>
        )}
      </div>




    </div>
  );
};

export default FormSectionThirteen;
