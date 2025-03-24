import { Avatar, Col, Row } from "antd";
import Layout from "../Layout/Layout"
import { Add, ArrowForward, ArrowOutward } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  return (
    <div >
     <Layout content={<DashboardContent/>}/>
    </div>
  )
}

const DashboardContent =()=>{
  const data = [
    { name: 'Present', value: 75, color: '#00E676' },
    { name: 'Absent', value: 25, color: '#9C27B0' },
  ];

  // Custom legend renderer
  const renderLegend = () => (
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
      {data.map((entry, index) => (
        <div key={`item-${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <div
            style={{
              width: 10,
              height: 10,
              backgroundColor: entry.color,
              borderRadius: '50%',
              marginRight: '6px',
            }}
          />
          <span style={{ fontSize: '14px', color: '#333' }}>
            {entry.name} ({entry.value}%)
          </span>
        </div>
      ))}
    </div>
  );

  const navigate = useNavigate();


  return (
<Row gutter={[20,0]}>
  <Col span={13}>

  {/* number of students and eductaors row */}
  <Row gutter={[20,0]}>
    <Col span={12}>
       <div style={{boxShadow:"0px 0px 4px 0px rgba(0,0,0,0.25)",backgroundColor:"white", display:'flex', flexDirection:"column", padding:"5%", borderRadius:"12px"}}>
           <div style={{fontSize:"15px", color:'black', fontWeight:'500',fontFamily:"Montserrat"}}>Total Students Enrolled</div>           
           <div style={{fontSize:"20px", color:'#06152B', fontWeight:'600',fontFamily:"Montserrat", marginTop:"15%"}}>101</div>

           <div style={{display:'flex', justifyContent:"space-between", alignItems:'center'}}>
           <div style={{display:'flex', color:"#6BEBA4", alignItems:'center', gap:'3%', marginTop:"3%"}}> 
            <div style={{borderRadius:'50px',backgroundColor:"#F0FFF2", display:'flex', alignItems:'center', paddingInline:'8px'}}>
              <ArrowOutward/> <div>4.8%</div>
            </div>
            <div style={{fontFamily:'Open Sans', fontWeight:"600", fontSize:"14px", whiteSpace: 'nowrap',}}>43 Today</div>
            </div>       

            <img src="/images/studentsvg.svg"></img>

            </div>    

       </div>
    </Col>
    <Col span={12}>
       <div style={{boxShadow:"0px 0px 4px 0px rgba(0,0,0,0.25)",backgroundColor:"white", display:'flex', flexDirection:"column", padding:"5%", borderRadius:"12px"}}>
           <div style={{fontSize:"15px", color:'black', fontWeight:'500',fontFamily:"Montserrat"}}>Total Educators Enrolled</div>           
           <div style={{fontSize:"20px", color:'#06152B', fontWeight:'600',fontFamily:"Montserrat", marginTop:"15%"}}>21</div>

           <div style={{display:'flex', justifyContent:"space-between", alignItems:'center'}}>
           <div style={{display:'flex', color:"#6BEBA4", alignItems:'center', gap:'3%', marginTop:"3%"}}> 
            <div style={{borderRadius:'50px',backgroundColor:"#F0FFF2", display:'flex', alignItems:'center', paddingInline:'8px'}}>
              <ArrowOutward/> <div>12.8%</div>
            </div>
            <div style={{fontFamily:'Open Sans', fontWeight:"600", fontSize:"14px", whiteSpace: 'nowrap',}}>2 Today</div>
            </div>       

            <img src="/images/educatorsvg.svg"></img>

            </div>    

       </div>
    </Col>
  </Row>


    {/* Attendance Rate */}
    <Row gutter={[20,0]}>
    <Col span={24}>
    <div
      style={{
        backgroundColor: 'white',
        marginTop:'3%',
        padding: '20px',
        borderRadius: '12px',
        // width:'100%',
        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <h2 style={{ margin: '0', fontSize: '18px',fontFamily:"Montserrat", color: '#212121' }}>Attendance Rate</h2>
      <p style={{ marginTop: '4px', marginBottom: '16px', fontSize: '14px', color: '#757575' }}>
        "Track, Analyze, Succeed: Attendance Insights Made Easy!"
      </p>

      <div style={{display:'flex', alignItems:"end", justifyContent:'space-between'}}>
      {/* Chart and Legend */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Pie Chart */}
        <PieChart width={120} height={120}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={35}
            outerRadius={50}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        {renderLegend()}
      </div>

      {/* Check attendance button */}
      <Button
        variant="contained"
        style={{
          backgroundColor: '#A1F69F',
          color: '#212121',
          textTransform: 'none',
          borderRadius: '20px',
          marginTop: '12px',
          padding: '8px 16px',
          boxShadow: '0 4px 4px 0px rgba(0, 0, 0, 0.25)',
        }}
        endIcon={<ArrowForward />}
      >
        Check total attendance
      </Button>
      </div>
    </div>
    </Col>
    </Row>


    {/* Query Row  */}
    <Row gutter={[20,0]} style={{marginTop:"3%", marginBottom:"3%"}}>
    <Col span={12}>
       <div style={{boxShadow:"0px 0px 4px 0px rgba(0,0,0,0.25)",backgroundColor:"white", display:'flex', flexDirection:"column", padding:"5%", borderRadius:"12px"}}>
           <div style={{fontSize:"15px", color:'black', fontWeight:'500',fontFamily:"Montserrat"}}>New Student Query</div>           
           <div style={{fontSize:"20px", color:'#06152B', fontWeight:'600',fontFamily:"Montserrat", marginTop:"15%"}}>12</div>

           <div style={{display:'flex', justifyContent:"space-between", alignItems:'center'}}>
           <div style={{display:'flex', color:"#6BEBA4", alignItems:'center', gap:'3%', marginTop:"3%"}}> 
            <div style={{borderRadius:'50px',backgroundColor:"#F0FFF2", display:'flex', alignItems:'center', paddingInline:'8px'}}>
              <ArrowOutward/> <div>20%</div>
            </div>
            <div style={{fontFamily:'Open Sans', fontWeight:"600", fontSize:"14px", whiteSpace: 'nowrap',}}>2 Today</div>
            </div>       

            <img src="/images/studentsvg.svg"></img>

            </div>    

       </div>
    </Col>
    <Col span={12}>
       <div style={{boxShadow:"0px 0px 4px 0px rgba(0,0,0,0.25)",backgroundColor:"white", display:'flex', flexDirection:"column", padding:"5%", borderRadius:"12px"}}>
           <div style={{fontSize:"15px", color:'black', fontWeight:'500',fontFamily:"Montserrat"}}>New Educator Query</div>           
           <div style={{fontSize:"20px", color:'#06152B', fontWeight:'600',fontFamily:"Montserrat", marginTop:"15%"}}>31</div>

           <div style={{display:'flex', justifyContent:"space-between", alignItems:'center'}}>
           <div style={{display:'flex', color:"#6BEBA4", alignItems:'center', gap:'3%', marginTop:"3%"}}> 
            <div style={{borderRadius:'50px',backgroundColor:"#F0FFF2", display:'flex', alignItems:'center', paddingInline:'8px'}}>
              <ArrowOutward/> <div>16%</div>
            </div>
            <div style={{fontFamily:'Open Sans', fontWeight:"600", fontSize:"14px", whiteSpace: 'nowrap',}}>4 Today</div>
            </div>       

            <img src="/images/educatorsvg.svg"></img>

            </div>    

       </div>
    </Col>
  </Row>

  </Col>


  <Col span={11}>

  {/* Notifications */}
  <div style={{display:'flex',minHeight:"370px", flexDirection:'column',borderRadius:'12px', backgroundColor:'white', boxShadow:"0px 0px 4px 0px rgba(0,0,0,0.25)", padding:"3%"}}>
    <div style={{fontFamily:'Montserrat', fontSize:'16px', fontWeight:"500"}}>
      Notifications
    </div>

    <div style={{backgroundColor:"#F9FAF5", borderRadius:'12px', padding:"3%", display:'flex',gap:'2%',marginTop:"2%", alignItems:'start'}}>
      <Avatar size='small'/>
      <div style={{display:'flex', flexDirection:"column"}}>
        <div style={{fontFamily:"Inter", fontSize:'14px'}}>Naman Verma</div>
        <div style={{fontFamily:"Inter", fontSize:'12px', color:"rgba(0,0,0,0.7)", marginTop:'2px'}}>Having Problem in form filling</div>
        <div style={{fontFamily:"Inter", fontSize:'10px', color:"#4B49AC", marginTop:'4px'}}>15 min ago</div>
      </div>
    </div>
  </div>

  {/* Add new student */}
  <div onClick={()=>navigate('/addchild')} style={{backgroundColor:'#AB47BC',cursor:'pointer',marginTop:'3%', borderRadius:'12px', padding:'2%', display:"flex", justifyContent:'space-between', alignItems:"center"}}>
    <div style={{display:'flex', justifyContent:'start', alignItems:'center', gap:'15px'}}>
      <div style={{height:"60px", width:'60px', borderRadius: '50%', boxShadow:"0px 0px 4px 0px rgba(0, 0,0,0.25)", display:'flex', justifyContent:'center', alignItems:'center'}}>
        <img src="/images/studenticon.svg"></img>
        
      </div>
      <div style={{color:'white', fontFamily:"Montserrat", fontSize:"18px",fontWeight:'500', whiteSpace:'nowrap'}}>Add New Student</div>
    </div>
    <div style={{backgroundColor:'white', height:"30px",display:'flex', justifyContent:'center', width:"30px", borderRadius:'50%', alignItems:'center', color:"black"}}>
      <Add style={{fontSize:'16px'}}/>
    </div>
  </div>

   {/* Add new educator */}
   <div style={{backgroundColor:'#2196F3',cursor:'pointer',marginTop:'3%', borderRadius:'12px', padding:'2%', display:"flex", justifyContent:'space-between', alignItems:"center"}}>
    <div style={{display:'flex', justifyContent:'start', alignItems:'center', gap:'15px'}}>
      <div style={{height:"60px", width:'60px', borderRadius: '50%', boxShadow:"0px 0px 4px 0px rgba(0, 0,0,0.25)", display:'flex', justifyContent:'center', alignItems:'center'}}>
        <img src="/images/educatoricon.svg"></img>
        
      </div>
      <div style={{color:'white', fontFamily:"Montserrat", fontSize:"18px",fontWeight:'500', whiteSpace:'nowrap'}}>Add New Educator</div>
    </div>
    <div style={{backgroundColor:'white', height:"30px",display:'flex', justifyContent:'center', width:"30px", borderRadius:'50%', alignItems:'center', color:"black"}}>
      <Add style={{fontSize:'16px'}}/>
    </div>
  </div>
  </Col>
</Row>
  );
}

export default Dashboard
