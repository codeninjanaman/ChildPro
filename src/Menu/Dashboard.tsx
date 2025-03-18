import Layout from "../Layout/Layout"


const Dashboard = () => {
  return (
    <div >
     <Layout content={<DashboardContent/>}/>
    </div>
  )
}

const DashboardContent =()=>{
  return (
<div style={{color:"black"}}>Dashboard</div>
  );
}

export default Dashboard
