import React, { useEffect, useState } from 'react';
import { Avatar, Col, Row } from 'antd';
import { Notifications } from '@mui/icons-material';

const SuperAdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [day, setDay] = useState('');
  const [date, setDate] = useState('');
  const [monthYear, setMonthYear] = useState('');

  useEffect(() => {
    const today = new Date();
    setDay(today.toLocaleDateString('en-US', { weekday: 'long' }));
    setDate(today.getDate().toString());
    setMonthYear(today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }));
  }, []);

  return (
    <div style={{ marginLeft: '250px', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Row style={{
        backgroundColor: 'white',
        padding: '15px 30px',
        alignItems: 'center',
        borderBottom: '1px solid #ddd',
      }}>
        <Col span={6}>
          <div>
            <div style={{ color: '#667085' }}>Good Morning, Peter</div>
            <div style={{ fontWeight: 'bold', fontSize: '22px' }}>Welcome to CHILDO</div>
          </div>
        </Col>

        <Col span={6}>
          <div style={{
            backgroundColor: '#00E676',
            display: 'flex',
            alignItems: 'center',
            padding: '8px 16px',
            borderRadius: '10px',
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: '1px solid black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: '10px',
            }}>{date}</div>
            <div>
              <div>{day},</div>
              <div>{monthYear}</div>
            </div>
          </div>
        </Col>

        <Col span={8}>
          <input
            type="text"
            placeholder="Search..."
            style={{
              width: '100%',
              padding: '8px 16px',
              borderRadius: '20px',
              border: '1px solid #ccc',
              outline: 'none',
            }}
          />
        </Col>

        <Col span={4} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '20px' }}>
          <Notifications />
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Avatar />
            <div>Peter John</div>
          </div>
        </Col>
      </Row>

      {/* Content */}
      <div style={{ flex: 1, backgroundColor: '#F6F7FA', padding: '20px', overflowY: 'auto' }}>
        {children}
      </div>
    </div>
  );
};

export default SuperAdminLayout;