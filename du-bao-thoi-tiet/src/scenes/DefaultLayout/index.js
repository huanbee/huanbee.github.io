import { Avatar, Card, Divider, Layout, Row, Col } from "antd";
import "./style.css";
import React, { Component, useState } from "react";
import FooterLayout from "../../components/Footer";
import { UserOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

export default function DefaultLayout() {
  const [showChat, setShowChat] = useState(1);
  // var t = setTimeout(() => {
  //   console.log(showChat);
  //   if (showChat < 6) {
  //     setShowChat(showChat + 1);
  //   } else {
  //     clearTimeout(t);
  //   }
  // }, 1000);
  return (
    <Layout>
      <Content className="site-layout-background">
        <div className="centerScreen">
          <Card title="Welcome!">
            <Divider orientation="left" dashed plain>
              My Profile
            </Divider>

            <table>
              <tr>
                <td valign="bottom">
                  <Avatar size="small" icon={<UserOutlined />} />
                </td>
                <td>
                  <p className="background-Chat-Left">
                    Đây là thông tin của tôi:
                  </p>

                  <a className="background-Chat-Left" href="myProfile">
                    My Profile
                  </a>
                </td>
              </tr>
            </table>
            <Divider orientation="left" dashed plain>
              My Project
            </Divider>
            <table>
              <tr>
                <td valign="bottom">
                  <Avatar size="small" icon={<UserOutlined />} />
                </td>
                <td>
                  <p className="background-Chat-Left">
                    Còn đây là một số Project mà tôi đã làm, xin mời bạn xem!
                  </p>
                  <a className="background-Chat-Left " href="myProfile">
                    My Profile
                  </a>
                </td>
              </tr>
            </table>
          </Card>
        </div>
      </Content>
      <FooterLayout />
    </Layout>
  );
}
