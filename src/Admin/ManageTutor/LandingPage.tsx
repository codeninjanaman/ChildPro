import React from 'react';
import { Table, Row, Col, Input } from 'antd';
import { Edit, Delete, ArrowForwardIos } from '@mui/icons-material';
import Layout from '../Layout/Layout';
import "../ManageChild/manageChild.css";
import { useNavigate } from 'react-router-dom';


const TutorDashboardcontent: React.FC = () => {
    const data = new Array(10).fill(null).map((_, i) => ({
        key: i,
        name: 'Naman Verma',
        proda: '4466995597FJ',
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
          title: 'Proda No.',
          dataIndex: 'proda',
        },
        {
          title: 'Action',
          render: (_: any, record: any) => (
            <span
              style={{ color: '#00cc66', cursor: 'pointer' }}
              onClick={() => navigate(`/registered-educator/${record.proda}`)}
            >
              see full details <ArrowForwardIos style={{ fontSize: 12 }} />
            </span>
          ),
        },
      ];
      
      
      const columnsError = [
        {
          title: 'Tutor Name',
          dataIndex: 'name',
        },
        {
          title: 'Age',
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
              <div style={{ marginBottom: 0, padding: '12px 16px', fontWeight: 600, fontFamily:"Montserrat" }}>Registered Educators</div>
              <Input.Search placeholder="Search" style={{padding: '8px 16px', marginBottom:12}} />
              <Table
              className="custom-ant-table-child"
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
         
          {/* Error Child */}

          <Col span={24} >
            <div style={{ background: '#fff',boxShadow:"0px 0px 4px 0px rgba(0,0,0,0.25)", padding: '0px', borderRadius: 8 }}>
              <div style={{ marginBottom: 0, padding: '12px 16px', fontWeight: 600, fontFamily:"Montserrat" }}>Queries</div>
              <Input.Search placeholder="Search" style={{padding: '8px 16px', marginBottom:12}} />
              <Table
              className="custom-ant-table-absent"
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

const TutorDashboard = () => {
    return (
      <div >
       <Layout content={<TutorDashboardcontent/>} activeIndex={2}/>
      </div>
    )
  }

export default TutorDashboard;




