import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
} from "@ant-design/icons";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import ViewUsers from "../components/users/ViewUsers";
import AddUser from "../components/users/AddUser";
import { withRouter } from "react-router";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class DefaultLayout extends Component {
    redirectToAddUser = () => {
        console.log("redirect to add users: ", this.props.history);
        this.props.history.push("/add-user");
    };

    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["2"]}
                    >
                        <Menu.Item key="1">
                            <Link to="add-user">
                                <button> Add User</button>{" "}
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <button onClick={this.redirectToAddUser}>
                                Add User
                            </button>
                        </Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
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
                            <SubMenu
                                key="sub1"
                                icon={<UserOutlined />}
                                title="USERS"
                            >
                                <Menu.Item key="1">
                                    <Link to="/view-users">View users</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/add-user"> Add User </Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                icon={<LaptopOutlined />}
                                title="subnav 2"
                            >
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
                                <Route path="/view-users">
                                    <ViewUsers />
                                </Route>
                                <Route path="/add-user">
                                    <AddUser />
                                </Route>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(DefaultLayout);
