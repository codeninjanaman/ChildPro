import { useState } from "react";
import { FaChalkboardTeacher, FaChild, FaMoneyCheckAlt } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("Provider");

  const menuItems = [
    { name: "Dashboard", icon: <AiOutlineDashboard />, path: "/dashboard" },
    { name: "Provider", icon: <HiOutlineSquares2X2 />, path: "/provider" },
    { name: "Manage Tutor", icon: <FaChalkboardTeacher />, path: "/manage-tutor" },
    { name: "Manage Child", icon: <FaChild />, path: "/manage-child" },
    { name: "Payment Management", icon: <FaMoneyCheckAlt />, path: "/payment-management" },
    { name: "Contact Us", icon: <BiSupport />, path: "/contact" },
  ];

  return (
    <div style={{
      height: "100vh",
      backgroundColor: "black",
      color: "white",
      position: "fixed",
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      top:"0%",
      left:"0%"
    }}>
      {/* Logo Section */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <div style={{ fontSize: "24px", color: "#6366F1", marginRight: "8px" }}>©</div>
        <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>Child Care</h1>
      </div>

      {/* Menu Items */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setActive(item.name)}
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
    </div>
  );
};

export default Sidebar;
