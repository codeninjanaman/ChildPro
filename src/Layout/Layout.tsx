import { Avatar, Col, Row } from "antd";

import { FaChalkboardTeacher, FaChild, FaMoneyCheckAlt } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";

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

  return (
    <Row style={{ height: "100vh", width: "100%" }}>
      {/* Sidebar */}
      <Col span={5} style={{ height: "100vh", backgroundColor: "black", color: "white", padding: "20px", display: "flex", flexDirection: "column" }}>
        {/* Logo Section */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "20%" }}>
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
                color: active === item.name ? "#6366F1" : "#A3A3A3",
                backgroundColor: active === item.name ? "#1F2937" : "transparent",
                transition: "all 0.3s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                if (active !== item.name) {
                  e.currentTarget.style.backgroundColor = "#1F2937";
                  e.currentTarget.style.color = "white";
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
      <Col span={19} style={{ height: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#f5f5f5" }}>
        {/* Top Bar */}
        <div style={{ display: "flex", padding: "15px", gap: "1%", backgroundColor: "black", fontSize: "20px", justifyContent: "end", alignItems: "center", color: "white" }}>
          <IoNotifications />
          <Avatar size="small" style={{ backgroundColor: "grey" }} />
        </div>

        {/* Scrollable Content Section */}
        <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
          {content}
        </div>
      </Col>
    </Row>
  );
};

export default Layout;
