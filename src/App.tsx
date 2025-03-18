import './App.css'
import { Route, Routes } from 'react-router-dom'


import Dashboard from './Menu/Dashboard'
import Provider from './Menu/Provider'
import ManageTutor from './Menu/ManageTutor'
import ManageChild from './Menu/ManageChild'
import PaymentManagement from './Menu/Payments'
import ContactUs from './Menu/ContactUs'

function App() {
  

  return (
    <>
      <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/provider" element={<Provider/>} />
      <Route path="/manage-tutor" element={<ManageTutor/>} />
      <Route path="/manage-child" element={<ManageChild/>} />
      <Route path="/payment-management" element={<PaymentManagement/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      
      </Routes>
    </>
  )
}

export default App
