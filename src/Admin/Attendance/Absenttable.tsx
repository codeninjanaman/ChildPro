import React from 'react';
import { Table, Col, Input, Button } from 'antd';
import { ArrowForwardIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import "../ManageChild/manageChild.css"

const AbsentChildcontent: React.FC = () => {
  const navigate = useNavigate();

  const absentData = new Array(10).fill(null).map((_, i) => ({
    key: i,
    name: 'Naman Verma',
    crn: '6467376H',
  }));

  

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
      
        {/* Present Child Table */}
        <Col span={24}>
          <div style={{ background: '#fff', boxShadow: '0px 0px 4px rgba(0,0,0,0.25)', borderRadius: 8 }}>
            <div style={{  color: 'black',fontSize:"16px", padding: '12px 16px', fontWeight: 600, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
              Presents Child
            </div>
            <div >
              <Input.Search placeholder="Search" style={{ marginBottom: 12, paddingInline:'16px' }} />
              <Table
                className="custom-ant-table-absent"
                columns={absentColumns}
                dataSource={absentData}
                pagination={{ pageSize: 10 }}
                size="small"
              />             
            </div>
          </div>
        </Col>

        
    </div>
  );
};

const AbsentChild = () => {
  return (
    <Layout content={<AbsentChildcontent />} activeIndex={3} />
  );
};

export default AbsentChild;
