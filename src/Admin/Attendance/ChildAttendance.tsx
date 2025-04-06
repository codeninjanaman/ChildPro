import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input, Select, Radio } from 'antd';
import { Print } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import "./ChildAttendance.css";

interface AttendanceRecord {
  date: string;
  day: string;
  status: 'Present' | 'Absent' | 'Holiday' | 'Leave';
  schedule: string;
  reason?: string;
  checkIn?: string;
  checkOut?: string;
  payment: string;
}

const sampleData: AttendanceRecord[] = [
  {
    date: '12 April 2024',
    day: 'Monday',
    status: 'Present',
    schedule: '7:30 am - 5:00 pm',
    checkIn: '7:30 am',
    checkOut: '4:30 pm',
    payment: '$110',
  },
  {
    date: '13 April 2024',
    day: 'Tuesday',
    status: 'Absent',
    schedule: '7:30 am - 5:00 pm',
    reason: 'Sick Leave',
    payment: '$110',
  },
  {
    date: '14 April 2024',
    day: 'Thursday',
    status: 'Holiday',
    schedule: '7:30 am - 5:00 pm',
    reason: 'Holiday',
    payment: '--',
  },
  {
    date: '15 April 2024',
    day: 'Monday',
    status: 'Present',
    schedule: '8:00 am - 4:00 pm',
    checkIn: '8:05 am',
    checkOut: '3:50 pm',
    payment: '$110',
  },
];

const getCheckStatus = (checkTime: string | undefined, schedule: string, isCheckIn: boolean) => {
  if (!checkTime) return '--';

  const [start, end] = schedule.split('-').map(t => t.trim());
  const scheduledTime = isCheckIn ? start : end;

  const toMinutes = (timeStr: string) => {
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    if (modifier.toLowerCase() === 'pm' && hours !== 12) hours += 12;
    if (modifier.toLowerCase() === 'am' && hours === 12) hours = 0;
    return hours * 60 + minutes;
  };

  const actual = toMinutes(checkTime);
  const scheduled = toMinutes(scheduledTime);

  if (actual < scheduled) return <span style={{marginLeft:'4px', color: '#00700B',padding:'4px', borderRadius:'5px', backgroundColor:"#7DB683" }}>Early</span>;
  if (actual === scheduled) return <span style={{marginLeft:'4px', color: '#00700B',padding:'4px', borderRadius:'5px', backgroundColor:"#7DB683" }}>On Time</span>;
  return <span style={{marginLeft:'4px', color: '#EB2222',padding:'4px', borderRadius:'5px', backgroundColor:"#F9BDBD" }}>Late</span>;
};


const AttendanceDetails = () => {
    return (
      <Layout content={<AttendanceDetailscontent />} activeIndex={1} />
    );
  };
  
  export default AttendanceDetails;

const AttendanceDetailscontent: React.FC = () => {
  const { crn } = useParams<{ crn: string }>();
  const [attendanceData, setAttendanceData] = useState<AttendanceRecord[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<AttendanceRecord | null>(null);
  

  useEffect(() => {
    // Here you will fetch data from backend using crn
    // axios.get(`/api/attendance/${crn}`).then(response => setAttendanceData(response.data));
    setAttendanceData(sampleData); // mock data
  }, [crn]);


  const showModal = (record: AttendanceRecord) => {
    setSelectedRecord(record);
    setModalVisible(true);
  };

  const handleOk = () => {
    // Save changes here
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      render: (date: string) => (
        <span style={{ color: 'rgba(0,0,0,0.65)' }}>
          {date}
        </span>
      ),
    },
    {
      title: 'Day',
      dataIndex: 'day',
      render: (day: string) => (
        <span style={{ color: 'rgba(0,0,0,0.65)' }}>
          {day}
        </span>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status: string) => {
        let color = '';
        if (status === 'Present') color = '#7DB683';
        else if (status === 'Absent') color = '#F9BDBD';
        else if (status === 'Holiday') color = '#BDBDBD';
        else color = '#1890ff';
        return <span style={{ backgroundColor: color ,display:'flex', justifyContent:'center', alignItems:'center', color: '#fff', padding: '2px 8px', borderRadius: 4 }}>{status}</span>;
      },
    },
    {
      title: 'Scheduled',
      render: (_: any, record: AttendanceRecord) => (
        <div>
          <div style={{ backgroundColor: '#e6f7ff', padding: '2px 8px',color: 'rgba(0,0,0,0.65)', borderRadius: 4, display: 'inline-block' }}>{record.schedule}</div>
          {record.reason && <div style={{ fontSize: 12, color: '#888' }}>{record.reason}</div>}
        </div>
      ),
    },
    {
      title: 'Check In',
      render: (_: any, record: AttendanceRecord) => (
        record.status === 'Present'
          ? <div >
           <span style={{alignItems:'center',alignContent:'center', boxShadow:"0px 0px 4px 0px rgba(0,0,0,0.25)", color:'rgba(0,0,0,0.65)',padding:'3px',borderRadius:"4px"}}> {record.checkIn}</span>
            <span>{getCheckStatus(record.checkIn, record.schedule, true)}</span></div>
          : <div style={{display: 'inline-block', boxShadow:"0px 0px 4px 0px rgba(0,0,0,0.25)", color:'rgba(0,0,0,0.7)',padding:'3px',borderRadius:"4px"}}> {record.reason} </div>
      ),
    },
    {
      title: 'Check Out',
      render: (_: any, record: AttendanceRecord) => (
        record.status === 'Present'
          ? <div> <span style={{alignItems:'center',alignContent:'center', boxShadow:"0px 0px 4px 0px rgba(0,0,0,0.25)", color:'rgba(0,0,0,0.65)',padding:'3px',borderRadius:"4px"}}> {record.checkOut}</span> 
          <span>{getCheckStatus(record.checkOut, record.schedule, false)}</span></div>
          : <div style={{display: 'inline-block', boxShadow:"0px 0px 4px 0px rgba(0,0,0,0.25)", color:'rgba(0,0,0,0.7)',padding:'3px',borderRadius:"4px"}}> {record.reason} </div>
      ),
    },
    {
      title: 'Payment',
      dataIndex: 'payment',
      render: (payment: string) => (
        <span style={{ color: 'rgba(0,0,0,0.65)' }}>
          {payment}
        </span>
      ),
    },
    {
        title: 'Action',
        render: (_: any, record: AttendanceRecord) => (
          <Button type="link" onClick={() => showModal(record)}>
            Edit
          </Button>
        ),
      },
  ];

  return (
    <div style={{ padding: 16 }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1e40af', color: '#fff', padding: '12px 16px', borderRadius: 8 }}>
        <div style={{ fontWeight: 600 }}>Naman Verma</div>
        <div style={{ fontWeight: 600 }}>{crn}</div>
      </div>

      {/* Table */}
      <div style={{ background: '#fff', marginTop: 16, padding: 16, borderRadius: 8 }}>
        <Table
        className='custom-ant-table'
          columns={columns}
          dataSource={attendanceData}
          pagination={false}
          rowKey="date"
        />
        <div style={{ textAlign: 'right', marginTop: 16 }}>
          <Button icon={<Print />} onClick={() => window.print()}>
            Print Attendance
          </Button>
        </div>
      </div>


      {/* Modal */}
      <Modal visible={modalVisible} onOk={handleOk} onCancel={handleCancel} footer={null} width={600}>
  {selectedRecord && (
    <Form layout="vertical" initialValues={selectedRecord}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '3%' }}>
        <div
          style={{
            boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.24)',
            display: 'inline-flex',
            padding: '3px 20px',
            fontSize: '20px',
            color: '#00E676',
            borderTopRightRadius: '50px',
            borderBottomRightRadius: '50px',
            border: '1px solid rgba(0,0,0,0.1)',
          }}
        >
          Naman Verma
        </div>

        <div style={{ fontWeight: '500' }}>
          Date : <span style={{ fontWeight: '400', color: 'rgba(0,0,0,0.7)' }}>{selectedRecord.date}</span>
        </div>
        <div style={{ fontWeight: '500' }}>
          Day : <span style={{ fontWeight: '400', color: 'rgba(0,0,0,0.7)' }}>{selectedRecord.day}</span>
        </div>
      </div>

      <Form.Item label="Status" name="status">
        <Radio.Group defaultValue={selectedRecord.status}>
          <Radio.Button value="Present" style={{ marginRight: '10px', backgroundColor: '#00E676' }}>Present</Radio.Button>
          <Radio.Button value="Absent" style={{ marginRight: '10px' }}>Absent</Radio.Button>
          <Radio.Button value="Holiday">Holiday</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <div style={{display:'flex', fontWeight:"500"}}>
        Schedule&nbsp;&nbsp; <span style={{border:'1px solid rgba(0,0,0,0.1)',color:'rgba(0,0,0,0.65)',fontWeight:'400', paddingInline:"1%", borderRadius:"5px"}}>{selectedRecord.schedule}</span>
      </div>

      {selectedRecord.status === 'Present' && (
        <>
          <Form.Item label="Check In" name="checkIn">
            <Input type="time" style={{ marginLeft: '20px' }} />
            <span style={{ color: 'red', fontSize: '12px', marginLeft: '10px' }}>Late In</span>
          </Form.Item>
          <Form.Item label="Check Out" name="checkOut">
            <Input type="time" style={{ marginLeft: '20px' }} />
            <span style={{ color: 'red', fontSize: '12px', marginLeft: '10px' }}>Late In</span>
          </Form.Item>
        </>
      )}

      {selectedRecord.status === 'Absent' && (
        <Form.Item label="Reason" name="reason">
          <Select defaultValue={selectedRecord.reason}>
            <Select.Option value="Sick Leave">Sick Leave</Select.Option>
            <Select.Option value="Personal Leave">Personal Leave</Select.Option>
          </Select>
        </Form.Item>
      )}

      {selectedRecord.status === 'Holiday' && (
        <Form.Item label="Holiday Type" name="holiday">
          <Select defaultValue={selectedRecord.reason}>
            <Select.Option value="National Holiday">National Holiday</Select.Option>
            <Select.Option value="Public Holiday">Public Holiday</Select.Option>
          </Select>
        </Form.Item>
      )}

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button type="primary" onClick={handleOk} style={{ backgroundColor: '#00E676', borderColor: '#00E676' }}>
          Save
        </Button>
      </div>
    </Form>
  )}
</Modal>

    </div>
  );
};


