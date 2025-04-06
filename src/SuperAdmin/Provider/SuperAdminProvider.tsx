import React, { useState } from 'react';

const SuperAdminProvider = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    providerName: '',
    providerId: '',
    providerEntityType: '',
    providerABN: '',
    approvalNumber: '',
    address: '',
    city: '',
    suburb: '',
    postalCode: '',
    email: '',
    phone: '',
    mobileNumber: '',
    accountName: '',
    accountNumber: '',
    bsb: '',
    operationalDay: '',
    openTime: '09:00 AM',
    closeTime: '05:00 PM',
    feeUrl: '',
    feeDetails: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sharedInputStyle = {
    width: '100%',
    padding: '12px 15px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: '1px solid #d0d7de',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    fontSize: '14px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const sharedSectionTitle = {
    margin: '20px 0 10px',
    fontSize: '16px',
    color: '#2563EB',
    borderBottom: '1px solid #ddd',
    paddingBottom: '5px',
    fontWeight: '600'
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div>
            <div style={sharedSectionTitle}>Profile Details</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5vh', padding: '2vh' }}>
              <div style={{ flex: '1 1 calc(33.33% - 15px)', minWidth: '250px' }}>
                <input placeholder="Provider Name" name="providerName" value={formData.providerName} onChange={handleChange} style={sharedInputStyle} />
              </div>
              <div style={{ flex: '1 1 calc(33.33% - 15px)', minWidth: '250px' }}>
                <input placeholder="Provider ID" name="providerId" value={formData.providerId} onChange={handleChange} style={sharedInputStyle} />
              </div>
              <div style={{ flex: '1 1 calc(33.33% - 15px)', minWidth: '250px' }}>
                <input placeholder="Provider Entity Type" name="providerEntityType" value={formData.providerEntityType} onChange={handleChange} style={sharedInputStyle} />
              </div>
              <div style={{ flex: '1 1 calc(33.33% - 15px)', minWidth: '250px' }}>
                <input placeholder="Provider ABN" name="providerABN" value={formData.providerABN} onChange={handleChange} style={sharedInputStyle} />
              </div>
              <div style={{ flex: '1 1 calc(33.33% - 15px)', minWidth: '250px' }}>
                <input placeholder="Approval Number" name="approvalNumber" value={formData.approvalNumber} onChange={handleChange} style={sharedInputStyle} />
              </div>
            </div>

            <div style={sharedSectionTitle}>Address</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5vh', padding: '2vh' }}>
              <div style={{ flex: '1 1 calc(33.33% - 15px)', minWidth: '250px' }}>
                <input placeholder="Address" name="address" value={formData.address} onChange={handleChange} style={sharedInputStyle} />
              </div>
              <div style={{ flex: '1 1 calc(33.33% - 15px)', minWidth: '250px' }}>
                <input placeholder="City" name="city" value={formData.city} onChange={handleChange} style={sharedInputStyle} />
              </div>
              <div style={{ flex: '1 1 calc(33.33% - 15px)', minWidth: '250px' }}>
                <input placeholder="Suburb" name="suburb" value={formData.suburb} onChange={handleChange} style={sharedInputStyle} />
              </div>
              <div style={{ flex: '1 1 calc(33.33% - 15px)', minWidth: '250px' }}>
                <input placeholder="Postal Code" name="postalCode" value={formData.postalCode} onChange={handleChange} style={sharedInputStyle} />
              </div>
            </div>

            <div style={sharedSectionTitle}>Contact</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5vh', padding: '2vh' }}>
              <div style={{ flex: '1 1 calc(33.33% - 15px)', minWidth: '250px' }}>
                <input placeholder="Email" name="email" value={formData.email} onChange={handleChange} style={sharedInputStyle} />
              </div>
              <div style={{ flex: '1 1 calc(33.33% - 15px)', minWidth: '250px' }}>
                <input placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} style={sharedInputStyle} />
              </div>
              <div style={{ flex: '1 1 calc(33.33% - 15px)', minWidth: '250px' }}>
                <input placeholder="Mobile Number" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} style={sharedInputStyle} />
              </div>
            </div>

            <div style={sharedSectionTitle}>Financial</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5vh', padding: '2vh' }}>
              <div style={{ flex: '1 1 calc(33.33% - 15px)', minWidth: '250px' }}>
                <input placeholder="Account Name" name="accountName" value={formData.accountName} onChange={handleChange} style={sharedInputStyle} />
              </div>
              <div style={{ flex: '1 1 calc(33.33% - 15px)', minWidth: '250px' }}>
                <input placeholder="Account Number" name="accountNumber" value={formData.accountNumber} onChange={handleChange} style={sharedInputStyle} />
              </div>
              <div style={{ flex: '1 1 calc(33.33% - 15px)', minWidth: '250px' }}>
                <input placeholder="BSB" name="bsb" value={formData.bsb} onChange={handleChange} style={sharedInputStyle} />
              </div>
            </div>
          </div>
        );
      case 'servicePersonnel':
      case 'providerPersonal':
        return (
          <div>
            <div style={sharedSectionTitle}>
              {activeTab === 'servicePersonnel' ? 'Service Personnel' : 'Provider Personal'}
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
              <thead style={{ backgroundColor: '#F3F4F6' }}>
                <tr>
                  {['User', 'Person ID', 'Name', 'Date of Birth', 'Phone', 'Start Date', 'End Date'].map(header => (
                    <th key={header} style={{ padding: '10px', borderBottom: '1px solid #ddd', fontSize: '14px' }}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, i) => (
                  <tr key={i}>
                    {Array(7).fill(null).map((_, idx) => (
                      <td key={idx} style={{ padding: '2vh', borderBottom: '1px solid #eee' }}>
                        <input style={{ ...sharedInputStyle, marginBottom: '0' }} placeholder="Enter" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <button style={{
              backgroundColor: '#EF4444',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'background-color 0.3s, transform 0.3s',
              boxShadow: '0 2px 4px rgba(239, 68, 68, 0.3)',
            }}>
              Create CCS Personnel
            </button>
          </div>
        );
      case 'careProvided':
        return (
          <div>
            <div style={sharedSectionTitle}>Operational Details</div>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <select name="operationalDay" value={formData.operationalDay} onChange={handleChange} style={{ ...sharedInputStyle, flex: 1 }}>
                <option value="">Select Day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
              </select>
              <input type="time" name="openTime" value={formData.openTime} onChange={handleChange} style={{ ...sharedInputStyle, flex: 1 }} />
              <input type="time" name="closeTime" value={formData.closeTime} onChange={handleChange} style={{ ...sharedInputStyle, flex: 1 }} />
            </div>
            <div style={sharedSectionTitle}>Fee Information</div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <input placeholder="Fee URL" name="feeUrl" value={formData.feeUrl} onChange={handleChange} style={{ ...sharedInputStyle, flex: 1 }} />
              <input placeholder="Fee Details" name="feeDetails" value={formData.feeDetails} onChange={handleChange} style={{ ...sharedInputStyle, flex: 1 }} />
            </div>
           </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: '30px', backgroundColor: '#F9FAFB', minHeight: '100vh' }}>
      <div style={{
        marginBottom: '20px',
        backgroundColor: '#2563EB',
        color: 'white',
        padding: '15px 20px',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <strong>G.K. Fintech Pvt Ltd</strong>
        <span>VED@1234</span>
        <span>No. of Tutor - 0</span>
        <span>No. of Student - 0</span>
      </div>

      <div style={{ marginBottom: '30px', display: 'flex', gap: '15px' }}>
        {['profile', 'servicePersonnel', 'providerPersonal', 'careProvided'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '10px 20px',
              borderRadius: '30px',
              border: activeTab === tab ? '2px solid #2563EB' : '1px solid #ccc',
              backgroundColor: activeTab === tab ? '#2563EB' : 'white',
              color: activeTab === tab ? 'white' : '#2563EB',
              cursor: 'pointer',
              fontWeight: '600',
              boxShadow: activeTab === tab ? '0 2px 6px rgba(37, 99, 235, 0.5)' : 'none',
              transition: 'all 0.3s ease'
            }}
          >
            {tab === 'profile' && 'Profile'}
            {tab === 'servicePersonnel' && 'Service Personnel'}
            {tab === 'providerPersonal' && 'Provider Personal'}
            {tab === 'careProvided' && 'Care Provided'}
          </button>
        ))}
      </div>

      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease',
      }}>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default SuperAdminProvider;
