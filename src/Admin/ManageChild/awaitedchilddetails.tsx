import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Col, Row, Select, Checkbox } from 'antd';
import { CheckOutlined, CloseOutlined } from '@mui/icons-material';
import Layout from '../Layout/Layout';



const AwaitedChildDetails = () => {
    return (
      <div >
       <Layout content={<AwaitedChildDetailscontent/>} activeIndex={3}/>
      </div>
    )
  }

export default AwaitedChildDetails;

const AwaitedChildDetailscontent: React.FC = () => {
    const { name } = useParams();
  
    const childData = {
      child: {
        name: name || 'Naman Verma',
        crn: '673454878',
        childName: 'Naman',
        childCRN: '4 July 2019',
        dob: '14 Aug 2017',
        start: '22 March 2024',
        end: 'None',
      },
      parent: {
        name: 'Swapnil Chndra',
        crn: '4563879645I',
        dob: '13 July 1996',
      },
    };
  
    return (
      <div style={{ padding: 24 }}>
        <div
          style={{
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0px 0px 6px rgba(0,0,0,0.1)',
            padding: '24px',
            fontFamily: 'Montserrat',
          }}
        >
          {/* Page Header */}
          <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 16 }}>
            Manage Child / Awaited Child
          </div>
  
          {/* Green Banner */}
          <div
            style={{
              backgroundColor: '#00cc66',
              color: 'white',
              padding: '1% 2%',
              borderTopLeftRadius: 6,
              borderTopRightRadius:6,
              fontWeight: 600,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>{childData.child.name}</span>
            <span>{childData.child.crn}</span>
          </div>
  
          {/* Data Section */}
          <Row style={{ paddingBlock: '2%',paddingInline:'2%', backgroundColor:"#F5F5F5", borderBottomLeftRadius:6, borderBottomRightRadius:6 }}>
            {/* Labels and values aligned line by line */}
            <Col span={12}>
              <div style={{ marginBottom: 16 }}>
                <strong>Child name:</strong> <span style={{ marginLeft: 8 }}>{childData.child.childName}</span>
              </div>
              <div style={{ marginBottom: 16 }}>
                <strong>CRN:</strong> <span style={{ marginLeft: 8 }}>{childData.child.childCRN}</span>
              </div>
              <div style={{ marginBottom: 16 }}>
                <strong>DOB:</strong> <span style={{ marginLeft: 8 }}>{childData.child.dob}</span>
              </div>
              <div style={{ marginBottom: 16 }}>
                <strong>Arrangement Start:</strong>
                <span style={{ marginLeft: 8 }}>📅 {childData.child.start}</span>
              </div>
              <div style={{ marginBottom: 16 }}>
                <strong>Assign To Family:</strong>
                <Select
                  defaultValue="New"
                  style={{ width: 120, marginLeft: 8 }}
                  options={[{ value: 'New', label: 'New' }]}
                />
              </div>
              <div>
                <strong>Invite parent to log in:</strong>
                <Checkbox style={{ marginLeft: 8 }} />
                <span style={{ color: 'red', fontSize: 14, marginLeft: 6 }}>🔴</span>
              </div>
            </Col>
  
            <Col span={12}>
              <div style={{ marginBottom: 16 }}>
                <strong>Parent Name:</strong> <span style={{ marginLeft: 8 }}>{childData.parent.name}</span>
              </div>
              <div style={{ marginBottom: 16 }}>
                <strong>CRN:</strong> <span style={{ marginLeft: 8 }}>{childData.parent.crn}</span>
              </div>
              <div style={{ marginBottom: 16 }}>
                <strong>DOB:</strong> <span style={{ marginLeft: 8 }}>{childData.parent.dob}</span>
              </div>
              <div style={{ marginBottom: 16 }}>
                <strong>Arrangement End:</strong>
                <span style={{ marginLeft: 8 }}>✅ {childData.child.end}</span>
              </div>
              <div>
                <strong>Arrangement Type:</strong>
                <Select
                  defaultValue="CWA"
                  style={{ width: 120, marginLeft: 8 }}
                  options={[{ value: 'CWA', label: 'CWA' }]}
                />
              </div>
            </Col>
          </Row>
  
          {/* Action Buttons aligned to right */}
          <Row justify="end" style={{ marginTop: 32 }}>
            <Col>
              <div style={{ display: 'flex', gap: 12 }}>
                <Button style={{ background: 'black', color: 'white', border: 'none' }}>
                  Add to waitlist
                </Button>
                <Button danger icon={<CloseOutlined />}>
                  Deny
                </Button>
                <Button type="primary" icon={<CheckOutlined />}>
                  Accept
                </Button>
              </div>
            </Col>
          </Row>
        </div>
  
        {/* Footer */}
        <div style={{ textAlign: 'right', marginTop: 12 }}>
          <a href="#" style={{ fontSize: 13 }}>See more</a>
        </div>
      </div>
    );
  };


