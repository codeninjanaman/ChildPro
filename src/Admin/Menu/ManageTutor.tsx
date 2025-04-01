import Layout from "../Layout/Layout"


const ManageTutor = () => {
  return (
    <div >
     <Layout content={<ManageTutorContent/>} activeIndex={2}/>
    </div>
  )
}

const ManageTutorContent =()=>{
  return (
<div style={{color:"black"}}>ManageTutor</div>
  );
}

export default ManageTutor
