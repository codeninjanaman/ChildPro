import React from 'react';
import { Upload } from '@mui/icons-material'; // or any icon library you prefer

interface EducatorFormSectionEightProps {
  formik: any;
  stepSubmitted: boolean; // If needed, otherwise remove
}

const EducatorFormSectionEight: React.FC<EducatorFormSectionEightProps> = ({
  formik,
  stepSubmitted
}) => {
  const { values, setFieldValue } = formik;

  return (
    <div>
      {/* Heading */}
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
        Documents 2
      </h2>

      {/* 2-column grid layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start'
        }}
      >
        {/* 1) Certificates of Education in Childcare (full width) */}
        <div style={{ gridColumn: '1 / 3' }}>
          <label style={{ fontWeight: 400, marginBottom: '4px', display: 'block' }}>
            Please attach your certificates of Education in Childcare
          </label>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input
              type="text"
              readOnly
              value={values.certEducationFile ? values.certEducationFile.name : ''}
              placeholder=""
              style={{
                flex: 1,
                border: '1px solid rgba(0,0,0,0.2)',
                borderRadius: '6px',
                padding: '8px'
              }}
            />
            <label
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'black',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              <Upload />
              Add File
              <input
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setFieldValue('certEducationFile', file);
                }}
              />
            </label>
          </div>
        </div>

        {/* 2) Date (mm-yy) #1 */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 400, marginBottom: '4px', display: 'block' }}>
            Date (mm-yy) #1
          </label>
          <input
            type="date"
            value={values.dateOne || ''}
            onChange={(e) => setFieldValue('dateOne', e.target.value)}
            style={{
              width: '100%',
              border: '1px solid rgba(0,0,0,0.2)',
              borderRadius: '6px',
              padding: '8px'
            }}
          />
        </div>

        {/* 3) Upload File #1 */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 400, marginBottom: '4px', display: 'block' }}>
            Upload Photo of First Aid
          </label>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input
              type="text"
              readOnly
              value={values.fileOne ? values.fileOne.name : ''}
              style={{
                flex: 1,
                border: '1px solid rgba(0,0,0,0.2)',
                borderRadius: '6px',
                padding: '8px'
              }}
            />
            <label
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'black',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              <Upload />
              Add File
              <input
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setFieldValue('fileOne', file);
                }}
              />
            </label>
          </div>
        </div>

        {/* 4) CPR Date */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 400, marginBottom: '4px', display: 'block' }}>
            CPR Date
          </label>
          <input
            type="date"
            value={values.dateTwo || ''}
            onChange={(e) => setFieldValue('dateTwo', e.target.value)}
            style={{
              width: '100%',
              border: '1px solid rgba(0,0,0,0.2)',
              borderRadius: '6px',
              padding: '8px'
            }}
          />
        </div>

        {/* 5) Upload File #2 */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 400, marginBottom: '4px', display: 'block' }}>
            Your CPR Photo
          </label>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input
              type="text"
              readOnly
              value={values.fileTwo ? values.fileTwo.name : ''}
              style={{
                flex: 1,
                border: '1px solid rgba(0,0,0,0.2)',
                borderRadius: '6px',
                padding: '8px'
              }}
            />
            <label
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'black',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              <Upload />
              Add File
              <input
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setFieldValue('fileTwo', file);
                }}
              />
            </label>
          </div>
        </div>

        {/* 6) Child Protection Course => date input now */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 400, marginBottom: '4px', display: 'block' }}>
            Child Protection Course Date
          </label>
          <input
            type="date"
            value={values.childProtectionCourse || ''}
            onChange={(e) => setFieldValue('childProtectionCourse', e.target.value)}
            style={{
              width: '100%',
              border: '1px solid rgba(0,0,0,0.2)',
              borderRadius: '6px',
              padding: '8px'
            }}
          />
        </div>

        {/* 7) File #3 Child Protection */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 400, marginBottom: '4px', display: 'block' }}>
            Child Protection Course Photo
          </label>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input
              type="text"
              readOnly
              value={values.childProtectionCoursePhoto ? values.childProtectionCoursePhoto.name : ''}
              style={{
                flex: 1,
                border: '1px solid rgba(0,0,0,0.2)',
                borderRadius: '6px',
                padding: '8px'
              }}
            />
            <label
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'black',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              <Upload />
              Add File
              <input
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setFieldValue('childProtectionCoursePhoto', file);
                }}
              />
            </label>
          </div>
        </div>

        {/* 8) Any Professional Development */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 400, marginBottom: '4px', display: 'block' }}>
            Any Professional Development Courses?
          </label>
          <input
            type="text"
            value={values.profDevCourses || ''}
            onChange={(e) => setFieldValue('profDevCourses', e.target.value)}
            placeholder="write your course description"
            style={{
              width: '100%',
              border: '1px solid rgba(0,0,0,0.2)',
              borderRadius: '6px',
              padding: '8px'
            }}
          />
        </div>

        {/* 9) File #4 PD Photo */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 400, marginBottom: '4px', display: 'block' }}>
            Professional Development CoursePhoto
          </label>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input
              type="text"
              readOnly
              value={values.profDevCoursesPhoto ? values.profDevCoursesPhoto.name : ''}
              style={{
                flex: 1,
                border: '1px solid rgba(0,0,0,0.2)',
                borderRadius: '6px',
                padding: '8px'
              }}
            />
            <label
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'black',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              <Upload />
              Add File
              <input
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setFieldValue('profDevCoursesPhoto', file);
                }}
              />
            </label>
          </div>
        </div>

        {/* 10) Police Clearance Date */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 400, marginBottom: '4px', display: 'block' }}>
            Your Police Clearance Date?
          </label>
          <input
            type="date"
            value={values.policeClearanceDate || ''}
            onChange={(e) => setFieldValue('policeClearanceDate', e.target.value)}
            style={{
              width: '100%',
              border: '1px solid rgba(0,0,0,0.2)',
              borderRadius: '6px',
              padding: '8px'
            }}
          />
        </div>

        {/* 11) Police Clearance File */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 400, marginBottom: '4px', display: 'block' }}>
            Please upload Police Check or Clearance
          </label>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input
              type="text"
              readOnly
              value={values.policeClearanceFile ? values.policeClearanceFile.name : ''}
              style={{
                flex: 1,
                border: '1px solid rgba(0,0,0,0.2)',
                borderRadius: '6px',
                padding: '8px'
              }}
            />
            <label
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'black',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              <Upload />
              Add File
              <input
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setFieldValue('policeClearanceFile', file);
                }}
              />
            </label>
          </div>
        </div>

        {/* 12) Family member policy clearance date => now a date input */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 400, marginBottom: '4px', display: 'block' }}>
            Family member policy clearance date Age 18 or above (Must not be older than 6 months)
          </label>
          <input
            type="date"
            value={values.familyMemberPolicyClearanceDates || ''}
            onChange={(e) => setFieldValue('familyMemberPolicyClearanceDates', e.target.value)}
            style={{
              width: '100%',
              border: '1px solid rgba(0,0,0,0.2)',
              borderRadius: '6px',
              padding: '8px'
            }}
          />
        </div>

        {/* 13) Family member policy clearance file */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 400, marginBottom: '4px', display: 'block' }}>
            Please upload Police Clearance for adult family members
          </label>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input
              type="text"
              readOnly
              value={
                values.familyMemberPolicyClearanceFile
                  ? values.familyMemberPolicyClearanceFile.name
                  : ''
              }
              style={{
                flex: 1,
                border: '1px solid rgba(0,0,0,0.2)',
                borderRadius: '6px',
                padding: '8px'
              }}
            />
            <label
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'black',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              <Upload />
              Add File
              <input
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setFieldValue('familyMemberPolicyClearanceFile', file);
                }}
              />
            </label>
          </div>
        </div>

        {/* Subheading (full width) */}
        <div style={{ gridColumn: '1 / 3', marginTop: '2rem' }}>
          <h3 style={{ fontWeight: 400, marginBottom: '1rem' }}>
            Upload some basic documents.
          </h3>
        </div>

        {/* 14) Vaccination Evidence (Educator's) */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 400, marginBottom: '4px', display: 'block' }}>
            Please Provide Evidence of Vaccination (Educator's)
          </label>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input
              type="text"
              readOnly
              value={values.vaccinationEvidenceFile ? values.vaccinationEvidenceFile.name : ''}
              style={{
                flex: 1,
                border: '1px solid rgba(0,0,0,0.2)',
                borderRadius: '6px',
                padding: '8px'
              }}
            />
            <label
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'black',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              <Upload />
              Add File
              <input
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setFieldValue('vaccinationEvidenceFile', file);
                }}
              />
            </label>
          </div>
        </div>

        {/* 15) Safety Glass Inspection */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 400, marginBottom: '4px', display: 'block' }}>
            Please Provide Evidence of Safety Glass Inspection
          </label>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input
              type="text"
              readOnly
              value={values.safetyGlassInspectionFile ? values.safetyGlassInspectionFile.name : ''}
              style={{
                flex: 1,
                border: '1px solid rgba(0,0,0,0.2)',
                borderRadius: '6px',
                padding: '8px'
              }}
            />
            <label
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'black',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              <Upload />
              Add File
              <input
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setFieldValue('safetyGlassInspectionFile', file);
                }}
              />
            </label>
          </div>
        </div>

        {/* 16) Council Approval */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 400, marginBottom: '4px', display: 'block' }}>
            Please Provide Evidence of Council Approval
          </label>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input
              type="text"
              readOnly
              value={values.councilApprovalFile ? values.councilApprovalFile.name : ''}
              style={{
                flex: 1,
                border: '1px solid rgba(0,0,0,0.2)',
                borderRadius: '6px',
                padding: '8px'
              }}
            />
            <label
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'black',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              <Upload />
              Add File
              <input
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setFieldValue('councilApprovalFile', file);
                }}
              />
            </label>
          </div>
        </div>

        {/* 17) Pest Control */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 400, marginBottom: '4px', display: 'block' }}>
            Please Provide Evidence of Pest Control
          </label>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input
              type="text"
              readOnly
              value={values.pestControlFile ? values.pestControlFile.name : ''}
              style={{
                flex: 1,
                border: '1px solid rgba(0,0,0,0.2)',
                borderRadius: '6px',
                padding: '8px'
              }}
            />
            <label
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'black',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              <Upload />
              Add File
              <input
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setFieldValue('pestControlFile', file);
                }}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducatorFormSectionEight;