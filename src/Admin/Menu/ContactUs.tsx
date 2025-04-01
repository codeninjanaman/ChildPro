import Layout from "../Layout/Layout"


const ContactUs = () => {
  return (
    <div >
     <Layout content={<ContactUsContent/>} activeIndex={5}/>
    </div>
  )
}

const ContactUsContent =()=>{
  return (
<div style={{color:"black"}}>Contact Us</div>
  );
}

export default ContactUs
