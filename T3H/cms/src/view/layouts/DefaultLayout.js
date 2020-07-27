import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Route, Switch, } from "react-router-dom";

import { Layout, Menu, Breadcrumb,Input } from "antd";

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import ViewUser from "../compoments/users/ViewUser";
import AddUser from "../compoments/users/AddUser";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;

function mapStateToProps(state) {
  return {};
}

class Defaultlayout extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
              <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="USER">
                  <Menu.Item key="1">
                    <Link to="/view-users"></Link> View User
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/add-users"></Link>Add User
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  icon={<NotificationOutlined />}
                  title="subnav 3"
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
      
                <Switch>
                    <Route path="/view-users"><ViewUser/></Route>
                    <Route path="/add-users"><AddUser/></Route>
                </Switch>


              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(Defaultlayout);
