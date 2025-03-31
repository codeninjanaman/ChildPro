import Layout from "../Layout/Layout"


const ContactUs = () => {
  return (
    <div >
     <Layout content={<ContactUsContent/>}/>
    </div>
  )
}

const ContactUsContent =()=>{
  return (
<div style={{color:"black"}}>Contact Us</div>
  );
}

export default ContactUs
