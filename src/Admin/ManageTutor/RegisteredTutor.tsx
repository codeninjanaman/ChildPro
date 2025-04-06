import { ArrowForwardIos } from "@mui/icons-material";
import { Button, Col, DatePicker, Input, Row, Select, Checkbox, Typography } from "antd";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { useState } from "react";
import dayjs from "dayjs";

const { Text } = Typography;
const { Option } = Select;

const RegisteredTutorcontent = () => {
  const { proda } = useParams();

  // Sample backend data
  const [formData, setFormData] = useState({
    educatorInfo: {
      firstName: "John",
      lastName: "Doe",
      dob: null,
      nationality: "Australia",
      languages: "English",
      startDate: dayjs("2024-03-25"),
      endDate: dayjs("2024-03-25"),
    },
    contactDetails: {
      address: "123 Street",
      suburb: "Sydney",
      state: "NSW",
      postcode: "2000",
      email: "john@example.com",
      homeTelephone: "123456789",
      workTelephone: "987654321",
      mobile: "0412345678",
    },
    daysHours: [
      { day: "Monday", in: "07:30 am", out: "05:00 pm" },
      { day: "Tuesday", in: "", out: "" },
      { day: "Wednesday", in: "", out: "" },
      { day: "Thursday", in: "", out: "" },
      { day: "Friday", in: "", out: "" },
      { day: "Saturday", in: "", out: "" },
      { day: "Sunday", in: "", out: "" },
    ],
    formal: {
      abn: "123456789",
      driverLicense: "DL123456",
      bank: "Commonwealth",
      bsb: "062000",
      accountNumber: "12345678",
      accountName: "John Doe",
    },
    options: {
      policeCheck: true,
      overnightSession: false,
      session24: false,
      beforeSchoolCare: false,
      afterSchoolCare: false,
      vacationCare: false,
      providesFood: false,
      providesTransport: false,
    },
    childAge: {
      min: "3 yrs",
      max: "12 yrs",
    },
  });

  const [feeData, setFeeData] = useState({
    ratesFrom: dayjs("2024-04-19"),
    standardHourlyRate: "50",
    nonStandardHourlyRate: "60",
    flatRateForDay: "200",
    flatRateType: "Flat Rate",
    weekendRate: "70",
    weekendRateType: "Hourly",
  });

  const handleInputChange = (key: string, value: any) => {
    setFeeData({ ...feeData, [key]: value });
  };

  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("Details"); // new state for tabs

  const toggleEdit = () => setIsEditing(!isEditing);

  // Reusable input box
  const InputBox = (label: string, value: any, onChange?: (e: any) => void) => (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontSize: "12px", fontFamily: "Poppins", color: "rgba(0,0,0,0.8)" }}>{label}</div>
      <Input value={value} disabled={!isEditing} onChange={onChange} />
    </div>
  );

 

  const TabBar = () => {
    const tabs = ["Fee", "Payment", "Details"];
    return (
      <div style={{
        display: "flex",
        backgroundColor: "#00E676",
        // borderRadius: "8px",
        boxShadow:'0px 0px 4px 0px rgba(0,0,0,0.25)',
        overflow: "hidden",
        marginTop:"2%",
        paddingInline:"20%"
        // margin: "16px 16px 24px 16px",
      }}>
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1,
              textAlign: "center",
              padding: "12px 0",
              cursor: "pointer",
              fontFamily:"Poppins",
              borderRight: tab !== "Enrollment Form" ? "1px solid rgba(255,255,255,0.3)" : "none",
              backgroundColor: activeTab === tab ? "white" : "#00E676",
              color: activeTab === tab ? "#1e54c7" : "white",
              fontWeight: activeTab === tab ? "bold" : "normal",
              transition: "all 0.3s",
              borderLeft : tab === "Fee" ? "1px solid rgba(255,255,255,0.3)":"none",
            }}
          >
            {tab}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", backgroundColor: "white", boxShadow: "0px 0px 4px 0px rgba(0,0,0,0.25)", borderRadius: "12px" }}>
      {/* Breadcrumb */}
      <div style={{ color: "rgba(0,0,0,0.45)", fontSize: "15px", padding: "12px" }}>
        Manage Educator <ArrowForwardIos style={{ fontSize: "12px" }} />
        <span style={{ color: "black", fontWeight: "400" }}> Registered</span>
      </div>

      
      

      {/* Top Card */}
      <div style={{ display: "flex", flexDirection: "column", boxShadow: "0px 0px 4px 0px rgba(0,0,0,0.25)", borderRadius: "12px", overflow: "hidden", marginInline: "16px" }}>
        <div style={{ fontFamily: "Poppins", color: "black", backgroundColor: "#00E676", padding: "10px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          Naman Verma <div>{proda}</div>
        </div>
        <Row gutter={[15, 5]} style={{ marginTop: "2%", paddingInline: "16px", backgroundColor: "white" }}>
          <Col span={8}>{InputBox("Educator ID", "TU127")}</Col>
          <Col span={8}>{InputBox("Mobile", "827792323")}</Col>
          <Col span={8}>{InputBox("Email", "namuv7@gmail.com")}</Col>
          <Col span={8}>{InputBox("Address", "Australia")}</Col>
        </Row>
      </div>


      {/* Tab Bar */}
      <TabBar />

      {/* Conditional Rendering for Details Tab */}
      {activeTab === "Details" && (
        <div style={{ margin: "24px 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
            <Text style={{ fontSize: "16px",fontFamily:"Poppins", fontWeight: "bold" }}>Educator Information</Text>
            <Button onClick={toggleEdit}>{isEditing ? "Save" : "Edit"}</Button>
          </div>

          {/* Educator Information */}
          <Row gutter={[16, 16]}>
            <Col span={8}>{InputBox("First Name", formData.educatorInfo.firstName, (e) => setFormData({ ...formData, educatorInfo: { ...formData.educatorInfo, firstName: e.target.value } }))}</Col>
            <Col span={8}>{InputBox("Last Name", formData.educatorInfo.lastName, (e) => setFormData({ ...formData, educatorInfo: { ...formData.educatorInfo, lastName: e.target.value } }))}</Col>
            <Col span={8}>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: "12px", fontFamily: "Poppins", color: "rgba(0,0,0,0.8)" }}>Date Of Birth</div>
                <DatePicker
                  value={formData.educatorInfo.dob}
                  disabled={!isEditing}
                  style={{ width: "100%" }}
                  onChange={(date) => setFormData({ ...formData, educatorInfo: { ...formData.educatorInfo, dob: date } })}
                />
              </div>
            </Col>
            <Col span={8}>{InputBox("Nationality", formData.educatorInfo.nationality, (e) => setFormData({ ...formData, educatorInfo: { ...formData.educatorInfo, nationality: e.target.value } }))}</Col>
            <Col span={8}>{InputBox("Languages spoken at home", formData.educatorInfo.languages, (e) => setFormData({ ...formData, educatorInfo: { ...formData.educatorInfo, languages: e.target.value } }))}</Col>
          </Row>

          {/* Contact Details */}
          <Text style={{ fontSize: "16px", fontWeight: "bold", marginTop: "24px", display: "block" }}>Contact Details</Text>
          <Row gutter={[16, 16]} style={{ marginTop: "8px" }}>
            {Object.entries(formData.contactDetails).map(([label, value]) => (
              <Col span={8} key={label}>
                {InputBox(label.replace(/([A-Z])/g, " $1"), value, (e) => setFormData({ ...formData, contactDetails: { ...formData.contactDetails, [label]: e.target.value } }))}
              </Col>
            ))}
          </Row>

          {/* Days & Hours */}
          <Text style={{ fontSize: "16px", fontWeight: "bold", marginTop: "24px", display: "block", color: "#1e54c7" }}>
  Days & Hour
</Text>

<div style={{ border: "1px solid #d9d9d9", borderRadius: "4px", marginTop: "8px", overflow: "hidden", width: "fit-content" }}>
  {/* Custom Header */}
  <div style={{ display: "flex", backgroundColor: "#1e54c7", color: "white", fontWeight: 500 }}>
    
    <div style={{ flex: 1, padding: "8px", textAlign: "center" }}></div>
    <div style={{ flex: 1, padding: "8px", textAlign: "center" }}>In</div>
    <div style={{ flex: 1, padding: "8px", textAlign: "center" }}>Out</div>
  </div>

  {/* Days Rows */}
  {formData.daysHours.map((day, index) => (
    <div key={day.day} style={{ display: "flex", borderTop: "1px solid #d9d9d9" }}>
      <div style={{ flex: 1, padding: "8px", display: "flex", alignItems: "center", borderRight: "1px solid #d9d9d9" }}>
        {day.day}
      </div>
      <div style={{ flex: 1, borderRight: "1px solid #d9d9d9" }}>
        <Input
          value={day.in}
          placeholder=""
          disabled={!isEditing}
          onChange={(e) => {
            const updated = [...formData.daysHours];
            updated[index].in = e.target.value;
            setFormData({ ...formData, daysHours: updated });
          }}
          style={{ border: "none", borderRadius: 0 }}
        />
      </div>
      <div style={{ flex: 1 }}>
        <Input
          value={day.out}
          placeholder=""
          disabled={!isEditing}
          onChange={(e) => {
            const updated = [...formData.daysHours];
            updated[index].out = e.target.value;
            setFormData({ ...formData, daysHours: updated });
          }}
          style={{ border: "none", borderRadius: 0 }}
        />
      </div>
    </div>
  ))}
</div>



          {/* Formal Section */}
          <Text style={{ fontSize: "16px", fontWeight: "bold", marginTop: "24px", display: "block" }}>Formal</Text>
          <Row gutter={[16, 16]} style={{ marginTop: "8px" }}>
            {Object.entries(formData.formal).map(([label, value]) => (
              <Col span={8} key={label}>
                {InputBox(label.replace(/([A-Z])/g, " $1"), value, (e) => setFormData({ ...formData, formal: { ...formData.formal, [label]: e.target.value } }))}
              </Col>
            ))}
          </Row>

          {/* Options */}
          <Text style={{ fontSize: "16px", fontWeight: "bold", marginTop: "24px", display: "block" }}>Options</Text>
          <Row gutter={[16, 16]} style={{ marginTop: "8px" }}>
            {Object.entries(formData.options).map(([key, value]) => (
              <Col span={6} key={key}>
                <Checkbox
                  checked={value}
                  disabled={!isEditing}
                  onChange={(e) => setFormData({ ...formData, options: { ...formData.options, [key]: e.target.checked } })}
                >
                  {key.replace(/([A-Z])/g, " $1")}
                </Checkbox>
              </Col>
            ))}
          </Row>

          {/* Child Age */}
          <Row gutter={[16, 16]} style={{ marginTop: "24px" }}>
            <Col span={8}>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: "12px", fontFamily: "Poppins", color: "rgba(0,0,0,0.8)" }}>Minimum Child Age</div>
                <Select
                  value={formData.childAge.min}
                  disabled={!isEditing}
                  style={{ width: "100%" }}
                  onChange={(value) => setFormData({ ...formData, childAge: { ...formData.childAge, min: value } })}
                >
                  <Option value="3 yrs">3 yrs</Option>
                  <Option value="4 yrs">4 yrs</Option>
                </Select>
              </div>
            </Col>
            <Col span={8}>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: "12px", fontFamily: "Poppins", color: "rgba(0,0,0,0.8)" }}>Maximum Child Age</div>
                <Select
                  value={formData.childAge.max}
                  disabled={!isEditing}
                  style={{ width: "100%" }}
                  onChange={(value) => setFormData({ ...formData, childAge: { ...formData.childAge, max: value } })}
                >
                  <Option value="12 yrs">12 yrs</Option>
                  <Option value="15 yrs">15 yrs</Option>
                </Select>
              </div>
            </Col>
          </Row>
        </div>
      )}

      {activeTab === "Fee" && (
        <div style={{ padding: "24px 20px" }}>
        <Row align="middle" style={{ marginBottom: "24px" }}>
          <Col style={{ fontWeight: 500, marginRight: "12px" }}>Rates From:</Col>
          <Col>
            <DatePicker
              value={feeData.ratesFrom}
              onChange={(date) => handleInputChange("ratesFrom", date)}
              style={{ width: "150px" }}
            />
          </Col>
        </Row>
  
        {/* Standard Hourly Rate */}
        <Row align="middle" style={{ marginBottom: "16px" }}>
          <Col span={6}>Standard Hourly Rate:</Col>
          <Col span={4}>
            <Input
              value={feeData.standardHourlyRate}
              onChange={(e) => handleInputChange("standardHourlyRate", e.target.value)}
            />
          </Col>
        </Row>
  
        {/* Non-Standard Hourly Rate */}
        <Row align="middle" style={{ marginBottom: "16px" }}>
          <Col span={6}>Non Standard Hourly Rate:</Col>
          <Col span={4}>
            <Input
              value={feeData.nonStandardHourlyRate}
              onChange={(e) => handleInputChange("nonStandardHourlyRate", e.target.value)}
            />
          </Col>
        </Row>
  
        {/* Flat rate for a day */}
        <Row align="middle" style={{ marginBottom: "16px" }}>
          <Col span={6}>Flat rate for a Day:</Col>
          <Col span={4}>
            <Input
              value={feeData.flatRateForDay}
              onChange={(e) => handleInputChange("flatRateForDay", e.target.value)}
            />
          </Col>
          <Col span={4}>
            <Select
              value={feeData.flatRateType}
              onChange={(value) => handleInputChange("flatRateType", value)}
              style={{ width: "100%" }}
            >
              <Option value="Flat Rate">Flat Rate</Option>
              <Option value="Hourly">Hourly</Option>
            </Select>
          </Col>
        </Row>
  
        {/* Weekend & Public Holidays */}
        <Row align="middle" style={{ marginBottom: "24px" }}>
          <Col span={6}>Weekend & Public Holidays:</Col>
          <Col span={4}>
            <Input
              value={feeData.weekendRate}
              onChange={(e) => handleInputChange("weekendRate", e.target.value)}
            />
          </Col>
          <Col span={4}>
            <Select
              value={feeData.weekendRateType}
              onChange={(value) => handleInputChange("weekendRateType", value)}
              style={{ width: "100%" }}
            >
              <Option value="Hourly">Hourly</Option>
              <Option value="Flat Rate">Flat Rate</Option>
            </Select>
          </Col>
        </Row>
  
        {/* Add another rate */}
        <Button style={{ background: "#f0f0f0", color: "#666", marginBottom: "24px" }}>
          Add Another Rate +
        </Button>
  
        {/* Save Button */}
        <div>
          <Button type="primary" style={{ background: "#1e54c7", borderColor: "#1e54c7" }}>
            Save
          </Button>
        </div>
      </div>
      )}
    </div>
  );
};

const RegisteredTutor = () => {
  return (
    <div>
      <Layout content={<RegisteredTutorcontent />} activeIndex={2} />
    </div>
  );
};

export default RegisteredTutor;
