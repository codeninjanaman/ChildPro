import './App.css'
import { Route, Routes } from 'react-router-dom'



import ChildForm from './Admin/AddStudentForm/StudentForm'

import Dashboard from './Admin/Menu/Dashboard'

import ManageTutor from './Admin/Menu/ManageTutor'
import ManageChild from './Admin/Menu/ManageChild'
import PaymentManagement from './Admin/Menu/Payments'
import ContactUs from './Admin/Menu/ContactUs'
import EducatorForm from './Admin/AddEducatorForm/EducatorForm'
import ProviderForm from './Admin/ProviderForm/ProfiderForm'
import LoginPage from './LandingPage/Login'

function App() {
  

  return (
    <>
      <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/provider" element={<ProviderForm/>} />
      <Route path="/manage-tutor" element={<ManageTutor/>} />
      <Route path="/manage-child" element={<ManageChild/>} />
      <Route path="/payment-management" element={<PaymentManagement/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/addchild" element={<ChildForm/>} />
      <Route path="/addeducator" element={<EducatorForm/>} />
      </Routes>
    </>
  )
}

export default App
