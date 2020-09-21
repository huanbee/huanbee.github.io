import React from "react";
import "./index.css";
import { Form, Input, Button, Card, message, Alert, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { makeSelectisLoggedIn, makeSelectLoading } from "./selectors";
import { createStructuredSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import { loadingRQ, requestLoginStart, requestLoginCompleted, requestLoginError } from './loginAction'
import { Redirect } from "react-router-dom";
import { onLogin } from "../../api";

const stateSelector = createStructuredSelector<any, any>({
    isLoggedIn: makeSelectisLoggedIn(),
    loading: makeSelectLoading(),
});
const messageLogin = {
    err: "",
    success: "",
}

export default function Login() {
    const { isLoggedIn, loading } = useSelector(stateSelector);
    const dispatch = useDispatch();

    // const onFinish = (values: any) => {
    //     dispatch(requestLoginStart(values));
    //     onLogin(values)
    //         .then((res: any) => {
    //             console.log("then Onfinis")
    //             localStorage.setItem("token", res.data.token);
    //             messageLogin.success = "Successful";
    //         })
    //         .catch((err) => {
    //             messageLogin.err = err.response.data.err;
    //             dispatch(requestLoginError());
    //         });

    // }

    const onFinish = (values: any) => {
        dispatch(requestLoginStart(values));
    };

    console.log("login check:", isLoggedIn);
    return (
        <div className="formLogin">
            {isLoggedIn && <Redirect to="/" />}
            <Card title="Wellcome!">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        username: "admin",
                        password: "123456"
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Username!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password" />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            loading={loading}
                        >Log in</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

