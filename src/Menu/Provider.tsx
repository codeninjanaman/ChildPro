import ProfiderForm from "../Admin/ProviderForm/ProfiderForm";
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
<div><ProfiderForm/></div>
  );
}

export default Provider
