import React from 'react';
import { Table, Col, Input } from 'antd';
import { ArrowForwardIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import '../ManageChild/manageChild.css';

const PresentChildcontent: React.FC = () => {
  const navigate = useNavigate();

  const presentData = new Array(10).fill(null).map((_, i) => ({
    key: i,
    name: 'Naman Verma',
    crn: '4466995597FJ',
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
          onClick={() => navigate(`/present-child/${record.crn}`)}
        >
          View attendance <ArrowForwardIos style={{ fontSize: 12 }} />
        </span>
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
                className="custom-ant-table"
                columns={presentColumns}
                dataSource={presentData}
                pagination={{ pageSize: 10 }}
                size="small"
              />
              
            </div>
          </div>
        </Col>

        
    </div>
  );
};

const PresentChild = () => {
  return (
    <Layout content={<PresentChildcontent />} activeIndex={3} />
  );
};

export default PresentChild;
