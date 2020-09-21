import React, { Component, Fragment } from "react";
import { Form, Input, Button, Checkbox, Card, Spin, Alert } from "antd";
// import { login } from "../../api/index";
import { connect } from "react-redux";
import { login } from "../../actions/LoginAction";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 8,
    },
};

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                username: "admin",
                password: "123456",
            },
            message: {
                err: "",
                success: "",
            },
            loading: false,
        };
    }

    btnLogin = (event) => {
        this.setState({ loading: true, message: {} });
        this.props
            .login(this.state.data)
            .then((res) => {
                if (res.data.token) {
                    console.log("Login successful!");
                    // redirect to homepage
                    setTimeout(() => {
                        // window.location.href = "/";
                        // router.push("/")
                        console.log("history: ", this.props.history)
                        this.props.history.push("/");
                    }, 1000);
                    this.setState({ message: { success: "Successful!" } });
                }
                // this.setState({ loading: false });
            })
            .catch((err) => {
                console.log(err.response);
                this.setState({ loading: false });
                this.setState({ message: { err: err.response.data.err } });
            });
        event.preventDefault();
    };

    onDataChange = (event) => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value,
            },
        });
    };
    
    render() {
        const { data, message, loading } = this.state;
        const { isLoggedIn } = this.props;
        // console.log(data);
        return (
            <>
                {isLoggedIn && <Redirect to="/" />}
                <Card title="Login Page" style={{ textAlign: "center" }}>
                    {message.err && (
                        <Alert
                            message={message.err}
                            type="error"
                            style={{ width: "300px", margin: "10px auto" }}
                        />
                    )}
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                            username: data.username,
                            password: data.password,
                        }}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ]}
                        >
                            <Input
                                name="username"
                                value={data.username}
                                onChange={this.onDataChange}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                        >
                            <Input.Password
                                name="password"
                                value={data.password}
                                onChange={this.onDataChange}
                            />
                        </Form.Item>

                        <Form.Item
                            {...tailLayout}
                            name="remember"
                            valuePropName="checked"
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                onClick={this.btnLogin}
                                disabled={loading}
                            >
                                {loading ? <Spin /> : "Submit"}
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.login.isLoggedIn,
    };
}

function mapDispatchToProps() {
    return {
        login,
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps())(LoginPage));
