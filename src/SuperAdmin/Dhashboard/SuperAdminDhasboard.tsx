import { useState } from "react";
import SuperAdminLayout from "../Layout/SuperAdminLayout";
import SuperAdminSidebar from "../Layout/SuperAdminSidebar";

const SuperAdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const [providers, setProviders] = useState([
    {
      id: 1,
      name: "G.K. Fintech Pvt Ltd",
      email: "ved1297@gmail.com",
      address: "Sector 19-C, Chandigarh (160019)",
      tutors: 54,
      students: 190,
      subscriptionType: "BASIC",
      subscriptionStart: "21 May, 2024",
      subscriptionExpire: "21 May, 2024",
      status: "confirmed",
    },
    {
      id: 2,
      name: "G.K. Fintech Pvt Ltd",
      email: "ved1297@gmail.com",
      address: "Sector 19-C, Chandigarh (160019)",
      tutors: 0,
      students: 0,
      subscriptionType: "None",
      subscriptionStart: "",
      subscriptionExpire: "",
      status: "pending",
    },
    { id: 3, name: "Provider 3", email: "email3@example.com", address: "Address 3", tutors: 20, students: 50, subscriptionType: "Standard", subscriptionStart: "01 Jun, 2024", subscriptionExpire: "01 Jun, 2025", status: "pending" },
    { id: 4, name: "Provider 4", email: "email4@example.com", address: "Address 4", tutors: 30, students: 40, subscriptionType: "Premium", subscriptionStart: "15 Jul, 2024", subscriptionExpire: "15 Jul, 2025", status: "confirmed" },
    { id: 5, name: "Provider 5", email: "email5@example.com", address: "Address 5", tutors: 5, students: 10, subscriptionType: "Basic", subscriptionStart: "20 Aug, 2024", subscriptionExpire: "20 Aug, 2025", status: "confirmed" },
    { id: 6, name: "Provider 6", email: "email6@example.com", address: "Address 6", tutors: 45, students: 180, subscriptionType: "Basic", subscriptionStart: "30 Sep, 2024", subscriptionExpire: "30 Sep, 2025", status: "pending" },
    { id: 7, name: "Provider 7", email: "email7@example.com", address: "Address 7", tutors: 60, students: 100, subscriptionType: "Premium", subscriptionStart: "01 Oct, 2024", subscriptionExpire: "01 Oct, 2025", status: "confirmed" },
    { id: 8, name: "Provider 8", email: "email8@example.com", address: "Address 8", tutors: 10, students: 80, subscriptionType: "Standard", subscriptionStart: "15 Nov, 2024", subscriptionExpire: "15 Nov, 2025", status: "pending" },
    { id: 9, name: "Provider 9", email: "email9@example.com", address: "Address 9", tutors: 30, students: 110, subscriptionType: "Basic", subscriptionStart: "10 Dec, 2024", subscriptionExpire: "10 Dec, 2025", status: "confirmed" },
    { id: 10, name: "Provider 10", email: "email10@example.com", address: "Address 10", tutors: 0, students: 5, subscriptionType: "None", subscriptionStart: "", subscriptionExpire: "", status: "pending" },
    { id: 11, name: "Provider 3", email: "email3@example.com", address: "Address 3", tutors: 20, students: 50, subscriptionType: "Standard", subscriptionStart: "01 Jun, 2024", subscriptionExpire: "01 Jun, 2025", status: "pending" },
    { id: 12, name: "Provider 4", email: "email4@example.com", address: "Address 4", tutors: 30, students: 40, subscriptionType: "Premium", subscriptionStart: "15 Jul, 2024", subscriptionExpire: "15 Jul, 2025", status: "confirmed" },
    { id: 13, name: "Provider 5", email: "email5@example.com", address: "Address 5", tutors: 5, students: 10, subscriptionType: "Basic", subscriptionStart: "20 Aug, 2024", subscriptionExpire: "20 Aug, 2025", status: "confirmed" },
    { id: 14, name: "Provider 6", email: "email6@example.com", address: "Address 6", tutors: 45, students: 180, subscriptionType: "Basic", subscriptionStart: "30 Sep, 2024", subscriptionExpire: "30 Sep, 2025", status: "pending" },
    { id: 15, name: "Provider 7", email: "email7@example.com", address: "Address 7", tutors: 60, students: 100, subscriptionType: "Premium", subscriptionStart: "01 Oct, 2024", subscriptionExpire: "01 Oct, 2025", status: "confirmed" },
    { id: 16, name: "Provider 8", email: "email8@example.com", address: "Address 8", tutors: 10, students: 80, subscriptionType: "Standard", subscriptionStart: "15 Nov, 2024", subscriptionExpire: "15 Nov, 2025", status: "pending" },
    { id: 17, name: "Provider 9", email: "email9@example.com", address: "Address 9", tutors: 30, students: 110, subscriptionType: "Basic", subscriptionStart: "10 Dec, 2024", subscriptionExpire: "10 Dec, 2025", status: "confirmed" },
    { id: 18, name: "Provider 10", email: "email10@example.com", address: "Address 10", tutors: 0, students: 5, subscriptionType: "None", subscriptionStart: "", subscriptionExpire: "", status: "pending" },
    // Add more rows as needed
  ]);

  const handleConfirm = (id: number) => {
    setProviders((prev) =>
      prev.map((provider) =>
        provider.id === id
          ? {
              ...provider,
              status: "confirmed",
              subscriptionStart: "21 May, 2024",
              subscriptionExpire: "21 May, 2024",
              subscriptionType: "BASIC",
            }
          : provider
      )
    );
  };

  const handleReject = (id: number) => {
    setProviders((prev) => prev.filter((provider) => provider.id !== id));
  };

  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;
  const currentData = providers.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(providers.length / rowsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getSubscriptionColor = (subscriptionType: string) => {
    switch (subscriptionType) {
      case "BASIC":
        return "#6EE7B7"; // Green
      case "Standard":
        return "#93C5FD"; // Light Blue
      case "Premium":
        return "#FDE68A"; // Yellow
      case "None":
        return "#F87171"; // Red
      default:
        return "#E5E7EB"; // Default Gray
    }
  };

  return (
    <>
      <SuperAdminSidebar />
     
        <div
          style={{
            backgroundColor: "#F9FAFB",
            padding: "30px",
            minHeight: "100vh",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h2 style={{ fontSize: "28px", color: "#111827", margin: 0 }}>
              Provider
            </h2>
            <input
              type="text"
              placeholder="Search"
              style={{
                padding: "10px 16px",
                borderRadius: "8px",
                border: "1px solid #D1D5DB",
                backgroundColor: "white",
                outline: "none",
                fontSize: "14px",
                width: "250px",
              }}
            />
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.06)",
              overflow: "hidden",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                backgroundColor: "white",
                borderRadius: "12px",
                overflow: "hidden",
                textAlign: "left",
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "#3B5BDB",
                    color: "white",
                    height: "60px",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  {[
                    "Sr.",
                    "Provider name ↑↓",
                    "Email",
                    "Address",
                    "No. of Tutor",
                    "No. of student",
                    "Subscription Type",
                    "Subscription start",
                    "Subscription expire",
                    "",
                  ].map((header) => (
                    <th
                      key={header}
                      style={{ padding: "16px", fontSize: "14px", fontWeight: 500 }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentData.map((provider, index) => (
                  <tr
                    key={provider.id}
                    style={{
                      backgroundColor: "#FCFDFB",
                      borderBottom: "1px solid #F3F4F6",
                      height: "80px",
                      borderRadius: "12px",
                    }}
                  >
                    <td style={{ padding: "16px", fontSize: "16px", fontWeight: 500 }}>
                      {firstIndex + index + 1}.
                    </td>
                    <td style={{ padding: "16px", fontSize: "16px", fontWeight: 500 }}>
                      {provider.name}
                    </td>
                    <td style={{ padding: "16px", color: "#374151", fontSize: "16px" }}>
                      {provider.email}
                    </td>
                    <td style={{ padding: "16px", color: "#374151", fontSize: "16px" }}>
                      {provider.address}
                    </td>
                    <td style={{ padding: "16px", fontSize: "16px" }}>
                      {provider.tutors}
                    </td>
                    <td style={{ padding: "16px", fontSize: "16px" }}>
                      {provider.students}
                    </td>
                    <td style={{ padding: "16px" }}>
                      <span
                        style={{
                          backgroundColor: getSubscriptionColor(provider.subscriptionType),
                          padding: "6px 16px",
                          borderRadius: "8px",
                          color: "#065F46",
                          fontSize: "14px",
                          fontWeight: "600",
                          display: "inline-block",
                        }}
                      >
                        {provider.subscriptionType}
                      </span>
                    </td>
                    <td style={{ padding: "16px", fontSize: "16px" }}>
                      {provider.status === "confirmed" ? (
                        provider.subscriptionStart
                      ) : (
                        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                          <button
                            style={{
                              border: "1px solid #EF4444",
                              color: "#EF4444",
                              backgroundColor: "white",
                              borderRadius: "9999px",
                              padding: "4px 12px",
                              fontSize: "14px",
                              cursor: "pointer",
                              fontWeight: 500,
                              transition: "background-color 0.3s",
                            }}
                            onClick={() => handleReject(provider.id)}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#F87171"}
                            
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "white"}
                          >
                            Reject
                          </button>
                        </div>
                      )}
                    </td>
                    <td style={{ padding: "16px", fontSize: "16px" }}>
                      {provider.status === "confirmed" ? provider.subscriptionExpire : (
                        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                          <button
                            style={{
                              backgroundColor: "#166534",
                              color: "white",
                              borderRadius: "9999px",
                              padding: "4px 12px",
                              border: "none",
                              fontSize: "14px",
                              cursor: "pointer",
                              fontWeight: 500,
                              transition: "background-color 0.3s",
                            }}
                            onClick={() => handleConfirm(provider.id)}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#059669"}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#166534"}
                          >
                            Confirm
                          </button>
                        </div>
                      )}
                    </td>
                    <td style={{ padding: "16px", whiteSpace: "nowrap" }}>
                      <span
                        style={{
                          fontSize: "24px",
                          color: "#3BAFDA",
                          cursor: "pointer",
                        }}
                      >
                        •••
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
            marginTop: "20px",
          }}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                padding: "8px 12px",
                borderRadius: "6px",
                backgroundColor: "#2563EB",
                color: "white",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                style={{
                  padding: "8px 12px",
                  borderRadius: "6px",
                  backgroundColor: currentPage === index + 1 ? "#10B981" : "#E5E7EB",
                  color: currentPage === index + 1 ? "white" : "#4B5563",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                padding: "8px 12px",
                borderRadius: "6px",
                backgroundColor: "#2563EB",
                color: "white",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Next
            </button>
          </div>
        </div>
    
    </>
  );
};

export default SuperAdminDashboard;