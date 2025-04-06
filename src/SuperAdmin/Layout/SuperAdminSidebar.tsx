import React from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { BiSupport } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';

const SuperAdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: <AiOutlineDashboard />, path: '/super-admin/dashboard' },
    { name: 'Provider', icon: <HiOutlineSquares2X2 />, path: '/super-admin/provider' },
    { name: 'Contact Us', icon: <BiSupport />, path: '/super-admin/contactus' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div style={{
      height: '100vh',
      backgroundColor: 'black',
      color: 'white',
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      top: 0,
      left: 0,
      width: '25vh',
      transition: 'all 0.3s ease',
    }}>
      {/* Logo Section */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ fontSize: '24px', color: '#6366F1', marginRight: '8px' }}>©</div>
        <h1 style={{ fontSize: '18px', fontWeight: 'bold' }}>Childoo</h1>
      </div>

      {/* Menu Items */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {menuItems.map(item => (
          <Link
            key={item.name}
            to={item.path}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '14px',
              color: isActive(item.path) ? '#6366F1' : '#A3A3A3',
              backgroundColor: isActive(item.path) ? '#1F2937' : 'transparent',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            <span style={{ fontSize: '16px' }}>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <button style={{
   
        backgroundColor: 'transparent',
        border: '1px solid white',
        color: 'white',
        padding: '10px',
        borderRadius: '8px',
        cursor: 'pointer',
        marginTop: '30px',
        transition: 'all 0.3s ease',
      }}>
        + Add New provider
      </button>
    </div>
  );
};

export default SuperAdminSidebar;