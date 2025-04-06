import Layout from "../Layout/Layout"


const ManageChild = () => {
  return (
    <div >
     <Layout content={<ManageChildContent/>} activeIndex={2}/>
    </div>
  )
}

const ManageChildContent =()=>{
  return (
<div style={{color:"black"}}>ManageChild</div>
  );
}

export default ManageChild
