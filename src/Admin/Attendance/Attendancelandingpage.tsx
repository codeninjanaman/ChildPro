import React from 'react';
import { Table, Row, Col, Input, Button } from 'antd';
import { ArrowForwardIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import '../ManageChild/manageChild.css';

const AttendanceDashboard: React.FC = () => {
  const navigate = useNavigate();

  const presentData = new Array(10).fill(null).map((_, i) => ({
    key: i,
    name: 'Naman Verma',
    crn: '4466995597FJ',
  }));

  const absentData = new Array(10).fill(null).map((_, i) => ({
    key: i,
    name: 'Naman Verma',
    crn: '6467376H',
  }));

  const presentColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'CRN No.',
      dataIndex: 'crn',
    },
    {
      title: 'Action',
      render: (_: any, record: any) => (
        <span
          style={{ color: '#00cc66', cursor: 'pointer' }}
          onClick={() => navigate(`/attendancedetails/${record.crn}`)}
        >
          View attendance <ArrowForwardIos style={{ fontSize: 12 }} />
        </span>
      ),
    },
  ];

  const absentColumns = [
    {
      title: 'Child',
      dataIndex: 'name',
    },
    {
      title: 'CRN No.',
      dataIndex: 'crn',
    },
    {
      title: 'Action',
      render: (_: any, record: any) => (
        <Button
          size="small"
          onClick={() => navigate(`/attendancedetails/${record.crn}`)}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <ArrowForwardIos style={{ fontSize: 12 }} />
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: 16 }}>
      <Row gutter={[16, 16]}>
        {/* Present Child Table */}
        <Col span={12}>
          <div style={{ background: '#fff', boxShadow: '0px 0px 4px rgba(0,0,0,0.25)', borderRadius: 8 }}>
            <div style={{  color: 'black',fontSize:"16px", padding: '12px 16px', fontWeight: 600, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
              Presents Child
            </div>
            <div >
              <Input.Search placeholder="Search" style={{ marginBottom: 12, paddingInline:'16px' }} />
              <Table
                className="custom-ant-table-child"
                columns={presentColumns}
                dataSource={presentData}
                pagination={false}
                size="small"
              />
              <div style={{ textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.1)', padding: '16px', color: '#00cc66', cursor: 'pointer' }} onClick={() => navigate('/present-children')}>
                View All
              </div>
            </div>
          </div>
        </Col>

        {/* Absent Child Table */}
        <Col span={12}>
          <div style={{ background: '#fff', boxShadow: '0px 0px 4px rgba(0,0,0,0.25)', borderRadius: 8 }}>
            <div style={{ color: 'black',fontSize:"16px", padding: '12px 16px', fontWeight: 600, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
              Absents Child
            </div>
            <div >
              <Input.Search placeholder="Search" style={{ marginBottom: 12, paddingInline:'16px' }} />
              <Table
                className="custom-ant-table-absent"
                columns={absentColumns}
                dataSource={absentData}
                pagination={false}
                size="small"
              />
              <div style={{ textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.1)', padding: '16px', color: '#00cc66', cursor: 'pointer' }} onClick={() => navigate('/absent-children')}>
                View All
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const AttendanceDashboardPage = () => {
  return (
    <Layout content={<AttendanceDashboard />} activeIndex={1} />
  );
};

export default AttendanceDashboardPage;
