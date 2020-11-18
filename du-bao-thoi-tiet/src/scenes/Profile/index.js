import { Badge, Col, Descriptions, Layout, Row } from "antd";
import "./style.css";
import React, { Component } from "react";
import FooterLayout from "../../components/Footer";
import {CalendarOutlined,ManOutlined,PhoneOutlined,MailOutlined,LinkOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
// 263238
// 37474f
const { Header, Sider, Content } = Layout;


let listKyNang =[
  { id:1,
    value:"Quản lý thời gian hiệu quả"
  },
  { id:2,
    value:"Kỹ năng giao tiếp"
  },
  { id:3,
    value:"Kỹ năng thuyết trình"
  },
  { id:4,
    value:"Dễ dàng thích nghi với môi trường mới"
  },
  { id:5,
    value:"Kỹ năng làm việc theo nhóm, cá nhân"
  },
  { id:6,
    value:"Lập kế hoạch"
  },
  { id:7,
    value:"Ham học hỏi hoàn thành công việc"
  },
  { id:8,
    value:"Giải quyết vấn đề"
  }
]



class myProfile extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <Layout className="site-layout-background">
            <Content>
              <Row>
                <Col span={7}>
                  <div className="myInfo-avatar">
                    <div className="top35">
                    <Avatar
                      src="images/ava.PNG"
                      size={200}
                    />
                    </div>
                   
                    <div className="myInfo-Name">
                      <h1>NGUYỄN TIẾN HUẤN</h1>
                    
                    </div>
                  </div>
                  <div className="myInfo-full">
                    <div className="colorWhite"><CalendarOutlined style={{ fontSize: '16px'}} /> 14/03/1997</div>
                    <div className="colorWhite"><ManOutlined  style={{ fontSize: '16px'}} /> Nam</div>
                    <div className="colorWhite"><PhoneOutlined style={{ fontSize: '16px'}} /><a href="tel:0369140123"> 0369140123</a> </div>
                    <div className="colorWhite"><MailOutlined style={{ fontSize: '16px'}} /> <a href="mailto:huanbee97@gmail.com">huanbee97@gmail.com</a></div>
                    <div className="colorWhite"><FontAwesomeIcon icon={faMapMarkerAlt} style={{width:'16px'}}/> Đông Quang, Ba Vì, Hà Nội</div>
                    <div className="colorWhite"><LinkOutlined style={{ fontSize: '16px'}} /> 
                    <a target="_blank" href="https://github.com/huanbee"> Github</a>,
                    <a target="_blank" href="http://fb.com/huan143"> Facebook</a>
                    </div>
                    <h1>KỸ NĂNG MỀM</h1>
                    <ul style={{listStyleType:"circle",paddingLeft:'30px'}}>
                     {listKyNang.map((item,index)=>(
                       <li>{item.value}</li>
                     ))}
                    </ul>              
                  </div>
                </Col>
                <Col span={17}>aaa</Col>
              </Row>
            </Content>
          </Layout>
        </div>
        <FooterLayout />
      </Layout>
    );
  }
}

export default myProfile;
