import './App.css'
import { Route, Routes } from 'react-router-dom'

import ChildForm from './Admin/AddStudentForm/StudentForm'
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
import AbsentChild from './Admin/Attendance/Absenttable'
import TutorDashboard from './Admin/ManageTutor/LandingPage'
import RegisteredTutor from './Admin/ManageTutor/RegisteredTutor'
import SuperAdminDashboard from './SuperAdmin/Dhashboard/SuperAdminDhasboard'
import SuperAdminProvider from './SuperAdmin/Provider/SuperAdminProvider'
import SuperAdminContactUs from './SuperAdmin/Contact Us/SuperAdminContactUs';
import SuperAdminSidebar from './SuperAdmin/Layout/SuperAdminSidebar';
import SuperAdminLayout from './SuperAdmin/Layout/SuperAdminLayout';
import Startpage from './StartingPage/Startpage'

function App() {
  
  return (
    <>
      <Routes>
      <Route path="/" element={<Startpage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/provider" element={<ProviderForm/>} />
      
      
      <Route path="/payment-management" element={<PaymentManagement/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/addchild" element={<ChildForm/>} />
      <Route path="/addeducator" element={<EducatorForm/>} />

      <Route path="/manage-child" element={<ChildDashboard/>} />
      <Route path="/awaited-child/:name" element={<AwaitedChildDetails />} />
     <Route path="/awaited-child/:name" element={<AwaitedChildDetails />} />
     <Route path="/registered-child/:crn" element={<RegisteredChildDetails />} />
     <Route path="/registered-children-table" element={<RegisteredChildrenTable />} />
     <Route path="/attendance" element={<AttendanceDashboardPage/>} />
     <Route path="/present-children" element={<PresentChild/>} />
     <Route path="/attendancedetails/:crn" element={<AttendanceDetails/>} />
     <Route path="/absent-children" element={<AbsentChild/>} />

     <Route path="/manage-tutor" element={<TutorDashboard/>} />
     <Route path="/registered-educator/:proda" element={<RegisteredTutor/>} />



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
