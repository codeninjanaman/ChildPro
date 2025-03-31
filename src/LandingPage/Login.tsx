import React from 'react';
import { Row, Col, Input, Button, Checkbox } from 'antd';
import { MailOutline, LockOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {

    const navigate = useNavigate();
  return (
    <div
      style={{
        background: 'url("/images/bg.png") no-repeat center center',
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col
          xs={22}
          sm={16}
          md={12}
          lg={8}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: 40,
            borderRadius: 16,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: 24,
              marginBottom: 24,
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            Login
          </h2>

          {/* Email Input */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.15)',
              marginBottom: 16,
              padding: '8px 12px',
              borderRadius: 8,
            }}
          >
            <MailOutline style={{ marginRight: 8, color: 'white' }} />
            <Input
              placeholder="Email"
              bordered={false}
              style={{ background: 'transparent', color: 'white' }}
            />
          </div>

          {/* Password Input */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.15)',
              marginBottom: 16,
              padding: '8px 12px',
              borderRadius: 8,
            }}
          >
            <LockOutlined style={{ marginRight: 8, color: 'white' }} />
            <Input.Password
              placeholder="Password"
              bordered={false}
              style={{ background: 'transparent', color: 'white' }}
            />
          </div>

          {/* Options */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 16,
              fontSize: 14,
              color: 'white',
            }}
          >
            <Checkbox style={{ color: 'white' }}>Remember Me</Checkbox>
            <a href="#" style={{ color: 'white' }}>
              Forget Password
            </a>
          </div>

          {/* Login Button */}
          <Button
            type="primary"
            block
            onClick={()=>navigate('/dashboard')}
            style={{
              backgroundColor: 'white',
              color: 'black',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: 20,
              marginBottom: 16,
            }}
          >
            Log In
          </Button>

          
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
