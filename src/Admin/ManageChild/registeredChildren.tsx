import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Input, Select, Button, Table, Form, DatePicker, Checkbox } from 'antd';
import { DeleteOutlined, FileOpenOutlined, Print, Schedule } from '@mui/icons-material';
import Layout from '../Layout/Layout';
import ArrangementOfCare from './showarrangementofcare';
import dayjs from 'dayjs';




const RegisteredChildDetails = () => {
    return (
      <div >
       <Layout content={<RegisteredChildDetailscontent/>} activeIndex={3}/>
      </div>
    )
  }
  
  export default RegisteredChildDetails;


const { Option } = Select;

interface Session {
  day: string;
  startTime: string;
  endTime: string;
  fee: string;
  feeType: 'Hourly' | 'Full Day';
  description: string;
}

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

  const [activeTab, setActiveTab] = useState("Past Attendance");


  const TabBar = () => {
    const tabs = ["Past Attendance", "Payment", "Schedule"];
    return (
      <div style={{
        display: "flex",
        backgroundColor: "#00E676",
        // borderRadius: "8px",
        boxShadow:'0px 0px 4px 0px rgba(0,0,0,0.25)',
        overflow: "hidden",
        // marginTop:"2%",
        paddingInline:"20%"
        // margin: "16px 16px 24px 16px",
      }}>
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1,
              textAlign: "center",
              padding: "12px 0",
              cursor: "pointer",
              fontFamily:"Poppins",
              borderRight: tab !== "Enrollment Form" ? "1px solid rgba(255,255,255,0.3)" : "none",
              backgroundColor: activeTab === tab ? "white" : "#00E676",
              color: activeTab === tab ? "#1e54c7" : "white",
              fontWeight: activeTab === tab ? "bold" : "normal",
              transition: "all 0.3s",
              borderLeft : tab === "Fee" ? "1px solid rgba(255,255,255,0.3)":"none",
            }}
          >
            {tab}
          </div>
        ))}
      </div>
    );
  };


  const sampleData = [
    { day: "Monday", checkIn: "9:00 am", checkOut: "4:00 pm", status: "Present" },
    { day: "Tuesday", checkIn: "9:00 am", checkOut: "4:00 pm", status: "Present" },
    { day: "Wednesday", checkIn: "9:00 am", checkOut: "4:00 pm", status: "Present" },
    { day: "Thursday", checkIn: "9:00 am", checkOut: "4:00 pm", status: "Absent" },
    { day: "Friday", checkIn: "9:00 am", checkOut: "4:00 pm", status: "Absent" },
    { day: "Saturday", checkIn: "9:00 am", checkOut: "4:00 pm", status: "Present" },
    { day: "Sunday", checkIn: "9:00 am", checkOut: "4:00 pm", status: "Present" },
  ];

  const [pastAttendance, _setPastAttendance] = useState(sampleData);

  const columns = [
    { title: "Day", dataIndex: "day", key: "day" },
    { title: "Check In", dataIndex: "checkIn", key: "checkIn" },
    { title: "Check Out", dataIndex: "checkOut", key: "checkOut" },
    { 
      title: "Action", 
      key: "action", 
      render: ( record: any) => (
        <div style={{color: record.status==="Present"? "#00700B":"#EB2222"}}>
          {record.status}
          </div>
      ),
    },
  ];

  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const times = Array.from({ length: 19 }, (_, i) =>
    dayjs().hour(i + 6).minute(0).format('h A')
  );
 
   const [sessions, setSessions] = useState<Session[]>([]);

   useEffect(() => {
       const backendSessions: Session[] = [
         {
           day: 'Mon',
           startTime: '08:00',
           endTime: '18:00',
           fee: '12',
           feeType: 'Hourly',
           description: 'Routine',
         },
         {
           day: 'Tue',
           startTime: '08:00',
           endTime: '18:00',
           fee: '12',
           feeType: 'Hourly',
           description: 'Routine',
         },
       ];
       setSessions(backendSessions);
     }, []);

     const [paymentHistory, setPaymentHistory] = useState([
      { date: '12/12/2012', description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', amount: '100.00', key: 1 },
    ]);

    const addPayment = (values: any) => {
      const newPayment = {
        date: values.date.format('DD/MM/YYYY'),
        description: values.description,
        amount: values.amount,
        key: paymentHistory.length + 1,
      };
      setPaymentHistory([...paymentHistory, newPayment]);
    };
  
    // Handle Delete of a payment row
    const deletePayment = (key: number) => {
      setPaymentHistory(paymentHistory.filter(payment => payment.key !== key));
    };

    const paymentcolumns = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Description', dataIndex: 'description', key: 'description' },
      { title: 'Amount', dataIndex: 'amount', key: 'amount' },
      { 
        title: 'Action', 
        key: 'action', 
        render: ( record: any) => (
          <Button 
            
            icon={<DeleteOutlined />} 
            onClick={() => deletePayment(record.key)} 
          >
            Remove
          </Button>
        )
      },
    ];


  return (
    <div style={{ padding: 24, display:'flex', flexDirection:'column' }}>
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

      <div style={{boxShadow:'0px 0px 4px 0px rgba(0,0,0,0.25)', borderRadius:'12px', marginTop:'2%', overflow:'hidden'}}>
      <TabBar />

      {activeTab ==="Past Attendance" && (
        <div style={{padding:'3%',}}>
        <Table
        dataSource={pastAttendance}
        columns={columns}
        rowKey="day"
        pagination={false}
        bordered
        style={{cursor:"pointer", width: "100%", boxShadow:'0px 0px 4px 0px rgba(0,0,0,0.25)', borderRadius:'12px', overflow:'hidden' }}
      />
      </div>
      )}

      {activeTab ==="Schedule" && (
        <div style={{display:'flex', flexDirection:'column' ,paddingInline:"4%", marginBlock:"3%"}}>

          <div style={{fontFamily:'Poppins', display:'flex', alignItems:'center'}}> <Schedule/> Schedule </div>
          <div style={{display:'flex', alignItems:'center', gap:'2%'}}>
            <div style={{color:'rgba(0,0,0,0.6)', fontFamily:'Poppins', marginTop:"5px"}}>From: 19/04/2024</div>
            <div style={{color:'rgba(0,0,0,0.6)', fontFamily:'Poppins',}}>To: No further</div>
          </div>
            <div style={{color:'rgba(0,0,0,0.6)', fontFamily:'Poppins', marginTop:"5px"}}>Editing Schedule From: 12/10/2024</div>
        <div style={{ marginBottom: 12,marginTop:'3%'  }}>
                {weekdays.map((day) => (
                  <div key={day} style={{ display: 'flex', alignItems: 'center', marginBottom: 6 }}>
                    <div style={{ width: 40,fontFamily:'Poppins' }}>{day}</div>
                    <div style={{ flex: 1, display: 'flex', height: 30 }}>
                      {times.map((_t, i) => {
                        const session = sessions.find(s => s.day === day);
                        const hour = i + 6;
                        const filled =
                          session &&
                          hour >= dayjs(session.startTime, 'HH:mm').hour() &&
                          hour < dayjs(session.endTime, 'HH:mm').hour();
                        return (
                          <div
                            key={i}
                            style={{
                              flex: 1,
                              backgroundColor: filled ? 'green' : '#eee',
                              marginLeft: i === 0 ? 0 : 1,
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: 12, marginTop: 4 }}>
                  {times.map((t, i) => (
                    <div key={i} style={{ flex: 1, textAlign: 'center', fontFamily:'Poppins' }}>{t}</div>
                  ))}
                </div>
              </div>
          
          </div>

      )}

{activeTab ==="Payment" && (
    <div style={{ padding: '20px', fontFamily: 'Poppins' }}>
    {/* Table for Payment History */}
    <Table 
      dataSource={paymentHistory} 
      columns={paymentcolumns} 
      rowKey="key" 
      pagination={false} 
      bordered 
      style={{ marginBottom: '20px', boxShadow:'0px 0px 4px 0px rgba(0,0,0,0.4)', borderRadius:'12px', overflow:'hidden' }}
    />
    
    {/* Action Buttons */}
    <div style={{ marginBottom: '20px' }}>
      <Button style={{ marginRight: '10px' }} type="primary">Charge</Button>
      <Button style={{ marginRight: '10px' }} type="primary">Payment</Button>
      <Button style={{ marginRight: '10px' }} type="primary">Discount</Button>
      <Button type="primary">Create Invoice</Button>
    </div>

    {/* Add Parent Payment Form */}
    <div style={{ marginBottom: '20px' }}>
      <h3>Add Parent Payment</h3>
      <Form onFinish={addPayment} layout="vertical">
        <Form.Item name="date" label="Date" rules={[{ required: true }]}>
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item name="amount" label="Amount" rules={[{ required: true }]}>
          <Input placeholder="$0.00" />
        </Form.Item>

        <Form.Item name="description" label="Description" rules={[{ required: true }]}>
          <Input placeholder="Parent Payment" />
        </Form.Item>

        <Form.Item name="paymentMethod" label="Payment Method" rules={[{ required: true }]}>
          <Select>
            <Option value="Cash">Cash</Option>
            <Option value="Credit">Credit</Option>
            <Option value="Bank Transfer">Bank Transfer</Option>
          </Select>
        </Form.Item>

        <Form.Item name="addToBond" valuePropName="checked">
          <Checkbox>Add portion to bond</Checkbox>
        </Form.Item>

        <Form.Item name="bondPortion" label="Bond Portion" rules={[{ required: false }]}>
          <Input placeholder="$0.00" />
        </Form.Item>

        <div>
          <Button style={{ marginRight: '10px' }} type="default">Cancel</Button>
          <Button type="primary" htmlType="submit">Save</Button>
        </div>
      </Form>
    </div>
  </div>
    )}

      </div>
    </div>
  );
};


