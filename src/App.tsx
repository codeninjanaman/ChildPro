import './App.css'
import { Route, Routes } from 'react-router-dom'

import ChildForm from './Admin/AddStudentForm/StudentForm'

import ManageTutor from './Admin/Menu/ManageTutor'

import PaymentManagement from './Admin/Menu/Payments'
import ContactUs from './Admin/Menu/ContactUs'
import EducatorForm from './Admin/AddEducatorForm/EducatorForm'
import ProviderForm from './Admin/ProviderForm/ProfiderForm'
import LoginPage from './LandingPage/Login'
import ChildDashboard from './Admin/ManageChild/manageChild'
import AwaitedChildDetails from './Admin/ManageChild/awaitedchilddetails'
import Dashboard from './Admin/Menu/Dashboard'
import RegisteredChildDetails from './Admin/ManageChild/registeredChildren'
import RegisteredChildrenTable from './Admin/ManageChild/registeredChildrenTable'
import AttendanceDashboardPage from './Admin/Attendance/Attendancelandingpage'
import PresentChild from './Admin/Attendance/Presenttable'
import AttendanceDetails from './Admin/Attendance/ChildAttendance'
import SuperAdminDashboard from './SuperAdmin/Dhashboard/SuperAdminDhasboard'
import SuperAdminProvider from './SuperAdmin/Provider/SuperAdminProvider'
import SuperAdminContactUs from './SuperAdmin/Contact Us/SuperAdminContactUs';
import SuperAdminSidebar from './SuperAdmin/Layout/SuperAdminSidebar';
import SuperAdminLayout from './SuperAdmin/Layout/SuperAdminLayout';

function App() {
  
  return (
    <>
      <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/provider" element={<ProviderForm/>} />
      <Route path="/manage-tutor" element={<ManageTutor/>} />
      <Route path="/manage-child" element={<ChildDashboard/>} />
      <Route path="/payment-management" element={<PaymentManagement/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/addchild" element={<ChildForm/>} />
      <Route path="/addeducator" element={<EducatorForm/>} />
     <Route path="/awaited-child/:name" element={<AwaitedChildDetails />} />
     <Route path="/registered-child/:crn" element={<RegisteredChildDetails />} />
     <Route path="/registered-children-table" element={<RegisteredChildrenTable />} />
     <Route path="/attendance" element={<AttendanceDashboardPage/>} />
     <Route path="/present-children" element={<PresentChild/>} />
     <Route path="/attendancedetails/:crn" element={<AttendanceDetails/>} />
     <Route path="/super-admin/dashboard" element={
      <>
        <SuperAdminSidebar />
        <SuperAdminLayout>
          <SuperAdminDashboard />
        </SuperAdminLayout>
      </>
    } />
     <Route path="/super-admin/provider" element={
      <>
        <SuperAdminSidebar />
        <SuperAdminLayout>
          <SuperAdminProvider />
        </SuperAdminLayout>
      </>
    } />
     <Route path="/super-admin/contactus" element={
      <>
        <SuperAdminSidebar />
        <SuperAdminLayout>
          <SuperAdminContactUs />
        </SuperAdminLayout>
      </>
    } />
      </Routes>
    </>
  )
}

export default App
