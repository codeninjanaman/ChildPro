const SuperAdminContactUs = () => {
  return (
    <div style={{
      backgroundColor: "#F9FAFB",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <h2 style={{ marginBottom: "30px", fontSize: "28px", color: "#111827" }}>Contact Us</h2>
      <div style={{
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "40px",
        display: "flex",
        gap: "40px",
        alignItems: "flex-start",
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        transition: "all 0.3s ease",
      }}>
        {/* Form */}
        <div style={{ flex: 1 }}>
          <h3 style={{ marginBottom: "10px", fontSize: "22px", color: "#2563EB" }}>Get in Touch</h3>
          <p style={{ marginBottom: "25px", color: "#6B7280", fontSize: "14px" }}>
            We'd love to hear from you. Fill out the form and we will get back to you shortly.
          </p>

          {["Provider number 143", "Delhi, India", "Childcare1231@gmail.com"].map((placeholder, idx) => (
            <input
              key={idx}
              type="text"
              placeholder={placeholder}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #E5E7EB",
                marginBottom: "18px",
                backgroundColor: "#F3F4F6",
                transition: "all 0.3s ease",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                fontSize: "14px",
              }}
            />
          ))}

          <textarea
            placeholder="Type your message here..."
            rows={5}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #E5E7EB",
              marginBottom: "20px",
              backgroundColor: "#F3F4F6",
              resize: "vertical",
              transition: "all 0.3s ease",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              fontSize: "14px",
            }}
          />

          <button style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            backgroundColor: "#2563EB",
            border: "none",
            color: "white",
            fontWeight: "600",
            fontSize: "15px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.2s",
          }}
          onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#1D4ED8"; }}
          onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "#2563EB"; }}
          >
            Send Message
          </button>
        </div>

        {/* Map and Contact Info */}
        <div style={{ flex: 1 }}>
          <img
            src="https://knowledge.hubspot.com/hubfs/google-places-api-alternative-2-20240911-3706806.webp"
            alt="Map"
            style={{
              width: "100%",
              borderRadius: "12px",
              marginBottom: "25px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}
          />

          {[
            { label: "Location", value: "Sector 19-C, Chandigarh, India", icon: "📍" },
            { label: "Email", value: "childcare1231@gmail.com", icon: "📧" },
            { label: "Phone", value: "+91 9653479645", icon: "📞" },
          ].map((info, idx) => (
            <div key={idx} style={{ marginBottom: "20px" }}>
              <strong style={{ display: "flex", alignItems: "center", color: "#2563EB", marginBottom: "4px", fontSize: "14px" }}>
                <span style={{ marginRight: "8px" }}>{info.icon}</span> {info.label}
              </strong>
              <div style={{ color: "#374151", fontSize: "14px" }}>{info.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuperAdminContactUs;