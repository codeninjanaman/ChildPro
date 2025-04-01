import { ArrowForwardIos } from "@mui/icons-material";
import { Col, Input, Table } from "antd"
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import "./manageChild.css"


const RegisteredChildrenTable = () => {
  return (
    <div >
     <Layout content={<RegisteredChildrenTablecontent/>} activeIndex={3}/>
    </div>
  )
}



export default RegisteredChildrenTable

const RegisteredChildrenTablecontent = ()=>{

    const data = new Array(20).fill(null).map((_, i) => ({
        key: i,
        name: 'Naman Verma',
        crn: '4466995597FJ',
      }));

    const navigate = useNavigate();
      
      const columnsRegistered = [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'CRN No.',
          dataIndex: 'crn',
        },
        {
          title: 'Action',
          render: (_: any, record: any) => (
            <span
              style={{ color: '#00cc66', cursor: 'pointer' }}
              onClick={() => navigate(`/registered-child/${record.crn}`)}
            >
              see full details <ArrowForwardIos style={{ fontSize: 12 }} />
            </span>
          ),
        },
      ];


    return (
        <Col span={24}>
            <div style={{ background: '#fff',boxShadow:"0px 0px 4px 0px rgba(0,0,0,0.25)", padding: '0px', borderRadius: 8 }}>
              <div style={{ marginBottom: 0, padding: '12px 16px', fontWeight: 600, fontFamily:"Montserrat" }}>Registered Children</div>
              <Input.Search placeholder="Search" style={{padding: '8px 16px', marginBottom:12}} />
              <Table
              className="custom-ant-table"
                columns={columnsRegistered}
                dataSource={data}
                pagination={{ pageSize: 16 }}
                size="small"
              />
              
            </div>
          </Col>
    )
}
