import Layout from "../Layout/Layout"


const PaymentManagement = () => {
  return (
    <div >
     <Layout content={<PaymentManagementContent/>} activeIndex={4}/>
    </div>
  )
}

const PaymentManagementContent =()=>{
  return (
<div style={{color:"black"}}>Payment Management</div>
  );
}

export default PaymentManagement
