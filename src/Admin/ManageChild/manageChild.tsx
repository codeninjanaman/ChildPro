import React from 'react';
import { Table, Row, Col, Input, Button } from 'antd';
import { Edit, Delete, ArrowForwardIos } from '@mui/icons-material';
import Layout from '../Layout/Layout';
import "./manageChild.css";
import { useNavigate } from 'react-router-dom';


const ChildDashboardcontent: React.FC = () => {
    const data = new Array(20).fill(null).map((_, i) => ({
        key: i,
        name: 'Naman Verma',
        crn: '4466995597FJ',
      }));
      
      const awaitedData = new Array(5).fill(null).map((_, i) => ({
        key: i,
        name: 'Naman Verma',
        crn: '6467376H',
      }));
      
      const errorData = new Array(5).fill(null).map((_, i) => ({
        key: i,
        name: 'Naman Verma',
        crn: 'Naman Verma',
      }));
      
      const navigate = useNavigate();
      
      const columnsRegistered = [
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
              onClick={() => navigate(`/registered-child/${record.crn}`)}
            >
              see full details <ArrowForwardIos style={{ fontSize: 12 }} />
            </span>
          ),
        },
      ];
      
      const columnsAwaited = [
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
            <Button size="small" onClick={() => navigate(`/awaited-child/${record.name}`)}>
              View details <ArrowForwardIos style={{ fontSize: 12 }} />
            </Button>
          ),
        },
      ];
      
      const columnsError = [
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
          render: () => (
            <div style={{ display: 'flex', gap: 8 }}>
              <Edit style={{ color: '#00cc66', cursor: 'pointer' }} />
              <Delete style={{ color: '#ff4d4f', cursor: 'pointer' }} />
            </div>
          ),
        },
      ];

      
      
    return (
      <div style={{ padding: 16 }}>
        <Row gutter={[16, 16]}>
          {/* Registered Children */}
          <Col span={12}>
            <div style={{ background: '#fff',boxShadow:"0px 0px 4px 0px rgba(0,0,0,0.25)", padding: '0px', borderRadius: 8 }}>
              <div style={{ marginBottom: 0, padding: '12px 16px', fontWeight: 600, fontFamily:"Montserrat" }}>Registered Children</div>
              <Input.Search placeholder="Search" style={{padding: '8px 16px', marginBottom:12}} />
              <Table
              className="custom-ant-table"
                columns={columnsRegistered}
                dataSource={data}
                pagination={{ pageSize: 16 }}
                size="small"
              />
              <div onClick={()=>navigate('/registered-children-table')} style={{cursor:'pointer', textAlign: 'center', marginTop: 0,borderTop:'1px solid rgba(0,0,0,0.1)', padding:'16px', color: '#00cc66' }}>
                View All
              </div>
            </div>
          </Col>
  
       <Col span={12}>
          {/* Awaited Child */}
          

          <Col span={24}>
            <div style={{ background: '#fff',boxShadow:"0px 0px 4px 0px rgba(0,0,0,0.25)", padding: '0px', borderRadius: 8 }}>
              <div style={{ marginBottom: 0, padding: '12px 16px', fontWeight: 600, fontFamily:"Montserrat" }}>Awaited Child</div>
              <Input.Search placeholder="Search" style={{padding: '8px 16px', marginBottom:12}} />
              <Table
              className="custom-ant-table"
                columns={columnsAwaited}
                dataSource={awaitedData}
                pagination={{ pageSize: 7 }}
                size="small"
              />
              <div style={{ textAlign: 'center', marginTop: 0,borderTop:'1px solid rgba(0,0,0,0.1)', padding:'16px', color: '#00cc66' }}>
                View All
              </div>
            </div>
          </Col>


  
          {/* Error Child */}

          <Col span={24} style={{marginTop:"4%"}}>
            <div style={{ background: '#fff',boxShadow:"0px 0px 4px 0px rgba(0,0,0,0.25)", padding: '0px', borderRadius: 8 }}>
              <div style={{ marginBottom: 0, padding: '12px 16px', fontWeight: 600, fontFamily:"Montserrat" }}>Error Child</div>
              <Input.Search placeholder="Search" style={{padding: '8px 16px', marginBottom:12}} />
              <Table
              className="custom-ant-table"
                columns={columnsError}
                dataSource={errorData}
                pagination={{ pageSize: 7 }}
                size="small"
              />
              <div style={{ textAlign: 'center', marginTop: 0,borderTop:'1px solid rgba(0,0,0,0.1)', padding:'16px', color: '#00cc66' }}>
                View All
              </div>
            </div>
          </Col>

          
          </Col>
        </Row>
      </div>
    );
  };

const ChildDashboard = () => {
    return (
      <div >
       <Layout content={<ChildDashboardcontent/>} activeIndex={3}/>
      </div>
    )
  }

export default ChildDashboard;




