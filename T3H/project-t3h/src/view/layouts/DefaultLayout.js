import React, { Component } from "react";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import {
  Layout,
  Menu,
  Breadcrumb,
  Row,
  Col,
  Avatar,
  Form,
  Input,
  Button,
  Slider,
  Divider,
  Pagination,
  Card,
} from "antd";
import BannerLayout from "./BannerLayout";

const { Header, Content, Sider, Footer } = Layout;
const { Meta } = Card;
const { Search } = Input;
class DefaultLayout extends Component {
  render() {
    return (
      <Router>
        <Row>
          <Col span={24}>
            <Layout>
              {/* Header */}
              <Header  theme="light" className="header" >
                <Col span={16} offset={4}>
                  <div className="logo" />
                  <Menu
                    theme="light"
                    mode="horizontal"
                    style={{ backgroundColor: "#f0f2f5" }}
                  >
                    <Menu.Item key="1">VLOG</Menu.Item>
                    <Menu.Item key="2">BLOG</Menu.Item>
                    <Menu.Item key="3">RADIO</Menu.Item>
                    <Menu.Item key="4">LIÊN HỆ</Menu.Item>
                    <Menu.Item key="search">
                     
                      <Search
                        placeholder="input search"
                        className=" ant-menu-vertical-right ant-menu-horizontal"
                        onSearch={(value) => console.log(value)}
                        style={{ width: 400 }}
                      />
                    </Menu.Item>
                  </Menu>
                </Col>
              </Header>
            </Layout>
            {/* Banner */}
            {/* <BannerLayout></BannerLayout> */}
            
            {/* Content */}
            <Content>
              <Col span={16} offset={4}>
                <Row gutter={[16, 16]} style={{ textAlign: "left" }}>
                  <Col xs={{ span: 24 }} sm={{ span: 18 }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                      className="site-layout-content"
                      style={{ backgroundColor: "white" }}
                    >
                      <Divider
                        orientation="left"
                        style={{ color: "red", fontWeight: "normal" }}
                      >
                        Percentage columns
                      </Divider>

                      <Card
                        hoverable
                        style={({ width: "100%" }, { height: "" })}
                        cover={<img alt="example" src="/images/t4.jpg" />}
                      >
                        <Meta
                          title="Europe Street beat"
                          description="www.instagram.com"
                        />
                      </Card>
                    </div>
                    {/* so trang */}
                    <Pagination
                      style={{ textAlign: "center" }}
                      defaultCurrent={1}
                      total={50}
                    />
                  </Col>
                  <Col xs={{ span: 24 }} sm={{ span: 6 }}>
                    <h1>Slide</h1>
                    <hr/>
                    <Search
                        placeholder="input search"
                        className=" ant-menu-vertical-right ant-menu-horizontal"
                        onSearch={(value) => console.log(value)}
                    
                      />
                      <hr/>
                    <h4>Nhận thông báo</h4>
                    <hr />
                    <p>Đăng Ký Nhận Bài Viết Mới Nhất Thông Qua Email</p>
                    <Form.Item
                      name={["email"]}
                      rules={[
                        {
                          type: "email",
                        },
                      ]}
                    >
                      <Input placeholder="Email Address" />
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Đăng ký
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Content>

            {/* Footer */}
            <Footer style={{ textAlign: "center" }}>
              <hr />
              <Col span={16} offset={4}>
                <Row gutter={[16, 16]} style={{ textAlign: "left" }}>
                  <Col xs={{ span: 24 }} sm={{ span: 6 }}>
                    <h4>Thông tin</h4>
                    <hr />© HuanBee
                  </Col>
                  <Col xs={{ span: 24 }} sm={{ span: 10 }}>
                    <h4>Bài viết mới nhất</h4>
                    <hr />
                  </Col>
                  <Col xs={{ span: 24 }} sm={{ span: 8 }}>
                    <h4>Nhận thông báo</h4>
                    <hr />
                    <p>Đăng Ký Nhận Bài Viết Mới Nhất Thông Qua Email</p>
                    <Form.Item
                      name={["email"]}
                      rules={[
                        {
                          type: "email",
                        },
                      ]}
                    >
                      <Input placeholder="Email Address" />
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Đăng ký
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Footer>
          </Col>
        </Row>
      </Router>
    );
  }
}

export default DefaultLayout;
