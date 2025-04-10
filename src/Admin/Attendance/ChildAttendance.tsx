import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input, Select, Checkbox } from 'antd';
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
      <Modal visible={modalVisible} onOk={handleOk} onCancel={handleCancel} footer={null} width={900}>
  {selectedRecord && (
    <Form
      layout="vertical"
      initialValues={selectedRecord}
      onValuesChange={(_changedValues, allValues) => {
        setSelectedRecord(prev => ({
          ...prev!,
          ...allValues,
        }));
      }}
    >
      {/** Helper variable for disabling */}
      {(() => {
        var isDisabled = selectedRecord.status === 'Absent' || selectedRecord.status === 'Holiday';
        return (
          <>
            {/* Status Row */}
            <div style={{ backgroundColor: '#F4E390', padding: '15px 20px', borderRadius: '12px', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>Absence</span>
                <Checkbox
                  checked={selectedRecord.status === 'Absent'}
                  onChange={(e) => {
                    setSelectedRecord(prev => ({
                      ...prev!,
                      status: e.target.checked ? 'Absent' : 'Present',
                    }));
                  }}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>Holiday</span>
                <Checkbox
                  checked={selectedRecord.status === 'Holiday'}
                  onChange={(e) => {
                    setSelectedRecord(prev => ({
                      ...prev!,
                      status: e.target.checked ? 'Holiday' : 'Present',
                    }));
                  }}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>Fees</span>
                <Form.Item name="payment" noStyle>
                  <Input style={{ width: 100 }} placeholder="$" />
                </Form.Item>
              </div>
            </div>

            {/* Time Inputs */}
            <div style={{ display: 'flex', gap: '20px',paddingInline:"10%", marginBottom: '10px' }}>
              <Form.Item label="Start Time" name="startTime" style={{ flex: 1 }}>
                <Input type="time" disabled={isDisabled} />
              </Form.Item>
              <Form.Item label="End Time" name="endTime" style={{ flex: 1 }}>
                <Input type="time" disabled={isDisabled} />
              </Form.Item>
            </div>

            {/* Actual In/Out Times */}
            {[1, 2, 3, 4].map(num => (
              <div style={{ display: 'flex', gap: '20px', marginBottom: '10px', paddingInline:"10%" }} key={num}>
                <Form.Item label={`Actual in Time ${num}`} name={`actualInTime${num}`} style={{ flex: 1 }}>
                  <Input type="time" disabled={isDisabled} />
                </Form.Item>
                <Form.Item label={`Actual Out Time ${num}`} name={`actualOutTime${num}`} style={{ flex: 1 }}>
                  <Input type="time" disabled={isDisabled} />
                </Form.Item>
              </div>
            ))}

            {/* Dropdowns */}
            <div style={{ display: 'flex', gap: '20px',paddingInline:"10%", marginBottom: '10px' }}>
              <Form.Item label="Session Type" name="sessionType" style={{ flex: 1 }}>
                <Select>
                  <Select.Option value="Standard">Standard</Select.Option>
                  <Select.Option value="Half Day">Half Day</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Preschool" name="preschool" style={{ flex: 1 }}>
                <Select>
                  <Select.Option value="Yes">Yes</Select.Option>
                  <Select.Option value="No">No</Select.Option>
                </Select>
              </Form.Item>
            </div>

            {/* Absence documents + Reason */}
            <div style={{ display: 'flex', gap: '20px',paddingInline:"10%", marginBottom: '10px' }}>
              <Form.Item label="Absence documents held" name="absenceDocument" valuePropName="checked">
                <Checkbox />
              </Form.Item>
              <Form.Item label="Reason" name="reason" style={{ flex: 1 }}>
                <Select placeholder="Select Reason">
                  <Select.Option value="Sick Leave">Sick Leave</Select.Option>
                  <Select.Option value="Personal Leave">Personal Leave</Select.Option>
                  <Select.Option value="Holiday">Holiday</Select.Option>
                </Select>
              </Form.Item>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <Button style={{ backgroundColor: '#D9D9D9', borderColor: '#D9D9D9', color: '#fff' }}>
                delete
              </Button>
              <Button type="primary" htmlType="submit" style={{ backgroundColor: '#00E676', borderColor: '#00E676' }}>
                Resubmit
              </Button>
            </div>
          </>
        );
      })()}
    </Form>
  )}
</Modal>




    </div>
  );
};


