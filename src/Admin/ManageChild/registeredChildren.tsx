import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Input, Select, Button } from 'antd';
import { FileOpenOutlined, Print } from '@mui/icons-material';
import Layout from '../Layout/Layout';
import ArrangementOfCare from './showarrangementofcare';




const RegisteredChildDetails = () => {
    return (
      <div >
       <Layout content={<RegisteredChildDetailscontent/>} activeIndex={3}/>
      </div>
    )
  }
  
  export default RegisteredChildDetails;


const { Option } = Select;

const RegisteredChildDetailscontent: React.FC = () => {
  const { crn } = useParams();

  // For now, hardcoded mock data (based on CRN)
  const data = {
    name: 'Naman Verma',
    crn,
    childDob: '12 July 2024',
    ccs: '96%',
    phone: 'xxxxxxxxx',
    accs: 'Unknown',
    absences: { ytd: '00', paid: '00', unpaid: '00', remaining: '00' },
    educators: {
      primary: 'xxxxxxxxx',
      secondary: 'xxxxxxxxx',
      relief: 'xxxxxxxxx',
      childCRN: 'xxxxxxxxx',
      enrolID: 'xxxxxxxxx',
      hours: 'xxxxxxxxx',
      withholding: 'xxxxxxxxx',
      assign: 'xxxxxxxxx',
    },
    parent: {
      name: 'xxxxxxxxx',
      crn: 'xxxxxxxxx',
    },
    startDate: '25 March 2024',
    endDate: '25 March 2024',
    signingParty: { first: 'xxxxxxxxx', last: 'xxxxxxxxx' },
    usualEducator: {
      personId: 'xxxxxxxxx',
      address1: 'xxxxxxxxx',
      address2: 'xxxxxxxxx',
      suburb: 'xxxxxxxxx',
      state: 'Western Australia',
      postcode: 'xxxxxxxxx',
    },
  };

  const InputBox = (label: string, value: string) => (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontSize:"12px", fontFamily:"Poppins", color:"rgba(0,0,0,0.8)" }}>{label}</div>
      <Input value={value} disabled={!isEditable} />
    </div>
  );

  const [showArrangement, setShowArrangement] = useState(false);
  const [isEditable, setIsEditable] = useState(false);



  return (
    <div style={{ padding: 24 }}>
      <div
        style={{
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0px 0px 6px rgba(0,0,0,0.15)',
          padding: 24,
          fontFamily: 'Montserrat',
        }}
      >
        {/* Breadcrumb */}
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 16 }}>
          Manage Child <span style={{ color: '#999' }}>/ Registered</span>
        </div>

        {/* Banner */}
        <div
          style={{
            background: '#00E676',
            color: 'white',
            padding: '10px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems:'center',
            borderRadius: 6,
            fontWeight: 600,
          }}
        >
          <span>{data.name}</span>
          <span>{data.crn}</span>
          <Button
  type="primary"
  style={{ backgroundColor:"white", color:"black", padding:"0.5%" }}
  onClick={() => setIsEditable(!isEditable)}
>
  {isEditable ? 'Cancel Edit' : 'Edit Form'}
</Button>

        </div>

        {/* Top section */}
        <Row gutter={16} style={{ marginTop: 24 }}>
          <Col span={6}>{InputBox('Child Name', 'xxxxxxxxx')}</Col>
          <Col span={6}>{InputBox('Child DOB', data.childDob)}</Col>
          <Col span={6}>{InputBox('CCS Percentage', data.ccs)}</Col>
          <Col span={6}>{InputBox('Parent Name', data.parent.name)}</Col>
          <Col span={6}>{InputBox('Phone', data.phone)}</Col>
          <Col span={6}>{InputBox('ACCS Eligibility', data.accs)}</Col>
        </Row>

        {/* Absences */}
        <div style={{ fontWeight: 600, margin: '24px 0 8px' }}>Absences:</div>
        <Row gutter={16}>
          <Col span={6}>{InputBox('Year to Date Absences', data.absences.ytd)}</Col>
          <Col span={6}>{InputBox('Paid Absences', data.absences.paid)}</Col>
          <Col span={6}>{InputBox('Unpaid Absences', data.absences.unpaid)}</Col>
          <Col span={6}>{InputBox('Allowable Absences Remaining', data.absences.remaining)}</Col>
        </Row>
        <Button icon={<FileOpenOutlined />} style={{ marginTop: 12 }}>
          Claim ACCS CW Subsidy
        </Button>

        {/* Educator */}
        <div style={{ fontWeight: 600, margin: '24px 0 8px' }}>Educator:</div>
        <Row gutter={16}>
          <Col span={6}>{InputBox('Primary Educator', data.educators.primary)}</Col>
          <Col span={6}>{InputBox('Secondary Educator', data.educators.secondary)}</Col>
          <Col span={6}>{InputBox('Relief Educator', data.educators.relief)}</Col>
          <Col span={6}>{InputBox('Enrollment ID', data.educators.enrolID)}</Col>
          <Col span={6}>{InputBox('Child CRN', data.educators.childCRN)}</Col>
          <Col span={6}>{InputBox('Hours per Fortnight', data.educators.hours)}</Col>
          <Col span={6}>{InputBox('Assign To Family', data.educators.assign)}</Col>
          <Col span={6}>{InputBox('Withholding Percentage', data.educators.withholding)}</Col>
        </Row>

        <div style={{ marginTop: 8 }}>
          <strong>Arrangement Type:</strong> <span style={{ margin: '0 12px' }}>CWA</span>
          <strong>In State Care:</strong> <span style={{ color: 'red' }}>🔴</span>
        </div>

        <Button icon={<FileOpenOutlined />} style={{ marginTop: 12 }}>
          Enrollment Occurrences
        </Button>

        <div style={{ marginTop: 24 }}>
          <strong>Status:</strong>{' '}
          <span
            style={{
              background: '#008000',
              color: 'white',
              padding: '4px 12px',
              borderRadius: 6,
              marginLeft: 8,
            }}
          >
            Confirmed
          </span>
        </div>

        <Row gutter={16} style={{ marginTop: 12 }}>
          <Col span={6}>{InputBox('Parent CRN', data.parent.crn)}</Col>
        </Row>

        <Row gutter={16} style={{backgroundColor:"#F6F6F6", paddingInline:"3%", paddingBlock:"2%"}}>
          <Col span={12}>
            <div >
              Arrangement Start Date:{' '}
              <span style={{ marginLeft: 8 }}>📅 {data.startDate}</span>
            </div>
          </Col>
          <Col span={12}>
            <div >
              Arrangement End Date:{' '}
              <span style={{ marginLeft: 8 }}>📅 {data.endDate}</span>
            </div>
          </Col>
        </Row>

        {/* Signing Party */}
        <div style={{ fontWeight: 600, margin: '32px 0 8px', color: 'red' }}>
          Signing Party:
        </div>
        <Row gutter={16}>
          <Col span={6}>{InputBox('Individual First Name', data.signingParty.first)}</Col>
          <Col span={6}>{InputBox('Individual Last Name', data.signingParty.last)}</Col>
        </Row>

        {/* Usual Educator */}
        <div style={{ fontWeight: 600, margin: '32px 0 8px' }}>Usual Educator:</div>
        <Row gutter={16}>
          <Col span={6}>{InputBox('Person ID', data.usualEducator.personId)}</Col>
          <Col span={6}>{InputBox('Address Line 1', data.usualEducator.address1)}</Col>
          <Col span={6}>{InputBox('Address Line 2', data.usualEducator.address2)}</Col>
          <Col span={6}>{InputBox('Suburb', data.usualEducator.suburb)}</Col>
          <Col span={6}>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontWeight: 500 }}>State</div>
              <Select value={data.usualEducator.state} disabled={!isEditable} style={{ width: '100%' }}>
                <Option value="Western Australia">Western Australia</Option>
              </Select>
            </div>
          </Col>
          <Col span={6}>{InputBox('Postcode', data.usualEducator.postcode)}</Col>
        </Row>

        <Button
  danger
  style={{ marginTop: 12, backgroundColor:"#D70000", color:'white' }}
  onClick={() => setShowArrangement(!showArrangement)}
>
  Show Arrangement of Care
</Button>


        <div style={{ marginTop: 24 }}>
          <span style={{ cursor: 'pointer' }}>
            Print CWA <Print />
          </span>
        </div>

        {showArrangement && (
  <div style={{ marginTop: 32 }}>
    <ArrangementOfCare isEditable={isEditable} toggleEdit={() => setIsEditable(!isEditable)} />

  </div>
)}

<Button type="primary" style={{ marginTop: 24 ,alignItems:'center'}} onClick={()=>setIsEditable(false)} disabled={!isEditable}>Submit Enrollment Notice</Button>


        
      </div>
    </div>
  );
};


