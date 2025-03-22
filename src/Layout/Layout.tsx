import {  Avatar, Col, Row } from "antd";

import { FaChalkboardTeacher, FaChild, FaMoneyCheckAlt } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Notifications } from "@mui/icons-material";

const Layout = ({ content }: { content: React.ReactNode }) => {
  const location = useLocation(); // Get current route
  const menuItems = [
    { name: "Dashboard", icon: <AiOutlineDashboard />, path: "/" },
    { name: "Provider", icon: <HiOutlineSquares2X2 />, path: "/provider" },
    { name: "Manage Tutor", icon: <FaChalkboardTeacher />, path: "/manage-tutor" },
    { name: "Manage Child", icon: <FaChild />, path: "/manage-child" },
    { name: "Payment Management", icon: <FaMoneyCheckAlt />, path: "/payment-management" },
    { name: "Contact Us", icon: <BiSupport />, path: "/contactus" },
  ];

  // Get the correct active menu item based on the URL
  const currentItem = menuItems.find((item) => item.path === location.pathname);
  const active = currentItem ? currentItem.name : "Dashboard"; // Default to Dashboard if no match

  const [day, setDay] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [monthYear, setMonthYear] = useState<string>('');

  useEffect(() => {
    const today = new Date();

    // Get day separately
    const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });

    // Get date (numeric)
    const dateNum = today.getDate().toString();

    // Get month and year
    const monthYearFormat = today.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });

    setDay(dayName);
    setDate(dateNum);
    setMonthYear(monthYearFormat);
  }, []);


  return (
    <Row style={{ height: "100vh", }}>
      {/* Sidebar */}
      <Col span={4} style={{ height: "100vh", backgroundColor: "black", color: "white", padding: "20px", display: "flex", flexDirection: "column" }}>
        {/* Logo Section */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "20%" , marginTop:"10%"}}>
          <div style={{ fontSize: "24px", color: "#6366F1", marginRight: "8px" }}>©</div>
          <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>Child Care</h1>
        </div>

        {/* Menu Items */}
        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px",
                borderRadius: "8px",
                fontSize: "14px",
                color: active === item.name ? "black" : "#A3A3A3",
                backgroundColor: active === item.name ? "#A1F69F" : "transparent",
                transition: "all 0.3s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                if (active !== item.name) {
                  e.currentTarget.style.backgroundColor = "#D2F5D1";
                  e.currentTarget.style.color = "black";
                }
              }}
              onMouseLeave={(e) => {
                if (active !== item.name) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#A3A3A3";
                }
              }}
            >
              <span style={{ fontSize: "16px" }}>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </Col>

      {/* Main Content */}
      <Col span={20} style={{ height: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#F6F7FA" }}>
        
          <Row  style={{paddingBlock:'1%',paddingInline:'0.7%', backgroundColor:"white", cursor:'pointer', borderBottom:"1px solid #ddd"}}>
            <Col span={6} style={{paddingInline:"1%"}}>
            <div style={{display:'flex',width:"100%", flexDirection:'column', justifyContent:'start'}}>
              <div style={{color:"#667085",fontSize:'16px'}}>Good Morning, Naman</div>
              <div style={{color:"black",fontSize:'22px', fontWeight:"bold"}}>Welcome to CHILDPRO</div>
            </div></Col>
            <Col span={4} style={{paddingInline:"1%", display:'flex', justifyContent:'start'}}>
            <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: '#00E676',
        padding: '6px 10px',
        borderRadius: '10px',
        width:'100%',
        justifyContent:'center'
      }}
    >
      {/* Date Circle */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50px',
          height: '50px',
          border: '1px solid black',
          borderRadius: '50%',
          
          color:'black',
          fontSize:"18px"
        }}
      >
        {date}
      </div>

      {/* Day and Month-Year Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <div style={{ fontSize:"16px", color:'black' }}>{day},</div>
        <div style={{  fontSize:"16px", color:'black' }}>{monthYear}</div>
      </div>
           </div>
            </Col>

            
            <Col
  span={10}
  style={{
    paddingInline: '1%',
    display:'flex',
    alignItems:'center',
    boxSizing: 'border-box', 
  }}
>
  <Row style={{display:'flex',alignItems:'center',width:"100%"}}>
    <Col span={21}>
    <TextField
    variant="outlined"
    placeholder="Search..."
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon style={{ color: '#6E6E7E' }} />
        </InputAdornment>
      ),
    }}
    sx={{
      '& .MuiOutlinedInput-root': {
        borderRadius: '20px',
        backgroundColor: '#FFF8F8',
        '& fieldset': {
          borderColor: '#D3D3D3',
        },
        '&:hover fieldset': {
          borderColor: '#B0B0B0',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#9E9E9E',
        },
      },
      width: '100%',
      boxSizing: 'border-box', // Added to TextField for safety
    }}
  /></Col>

  <Col span={1}></Col>

  <Col span={2}>
  <div style={{display:'flex',justifyContent:'center', alignItems:'center', padding:"10px",borderRadius:'12px', border:'1px solid rgba(0,0,0,0.3)'}}>
  <Notifications/>
  </div>
  </Col>
  </Row>
  
</Col>

            <Col span={4} style={{cursor:'pointer', paddingInline:"1%", display:'flex', justifyContent:'start', alignItems:'center'}}>
            <div style={{display:'flex', alignItems:'center', gap:"10px"}}>
              <Avatar size='large'/>
              <div style={{fontSize:"16px"}}>Naman Verma</div>
            </div>
           </Col>
          </Row>

          
        

        {/* Scrollable Content Section */}
        <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
          {content}
        </div>
      </Col>
    </Row>
  );
};

export default Layout;
