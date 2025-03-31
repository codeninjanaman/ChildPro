import Layout from "../Layout/Layout"


const Provider = () => {
  return (
    <div >
     <Layout content={<ProviderContent/>}/>
    </div>
  )
}

const ProviderContent =()=>{
  return (
<div style={{color:"black"}}>Provider</div>
  );
}

export default Provider
