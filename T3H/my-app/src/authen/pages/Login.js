import React, { Component } from "react";
import { login } from "../api/index";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                username: "",
                password: "",
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
        login(this.state.data)
            .then((res) => {
                if (res.data.token) {
                    console.log("Login successful!");
                    localStorage.setItem("token", res.data.token);
                    // redirect to homepage
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 1000);
                    this.setState({ message: { success: "Successful!" } });
                }
                this.setState({ loading: false });
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
        let { message, loading } = this.state;
        return (
            <div>
                {/* <label htmlFor="username">Username: </label>
                <input type="text" name="username" onChange={this.onDataChange} />
                <br/>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange={this.onDataChange}/>
                <br/>
                { loading && <p style={{color: "green"}}> Login... </p>}
                <p style={{color: "red"}}> { message.err } </p>
                <p style={{color: "green"}}> { message.success}</p>
                <button onClick={this.btnLogin}>Login</button> */}

                <div class="preloader">
                    <svg class="circular" viewBox="25 25 50 50">
                        <circle
                            class="path"
                            cx="50"
                            cy="50"
                            r="20"
                            fill="none"
                            stroke-width="2"
                            stroke-miterlimit="10"
                        />
                    </svg>
                </div>
                <div id="main-wrapper">
                    <div class="unix-login">
                        <div class="container-fluid">
                            <div class="row justify-content-center">
                                <div class="col-lg-4">
                                    <div class="login-content card">
                                        <div class="login-form">
                                            <h4>Login</h4>
                                            <form>
                                                <div class="form-group">
                                                    <label>User name</label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="User name"
                                                        name="username"
                                                        onChange={this.onDataChange}
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label>Password</label>
                                                    <input
                                                        type="password"
                                                        class="form-control"
                                                        placeholder="Password"
                                                        name="password"
                                                        onChange={this.onDataChange}
                                                    />
                                                </div>
                                                <div class="checkbox">
                                                    {/* <label>
                                                        <input type="checkbox" />{" "}
                                                        Remember Me
                                                    </label> */}
                                                    <label class="pull-right">
                                                        <a href="#">
                                                            Forgotten Password?
                                                        </a>
                                                    </label>
                                                </div>
                                                <button
                                                    type="submit"
                                                    class="btn btn-primary btn-flat m-b-30 m-t-30"
                                                    onClick={this.btnLogin}
                                                >
                                                    Sign in
                                                </button>
                                                <div class="register-link m-t-15 text-center">
                                                    <p>
                                                        Don't have account ?
                                                        <a href="#">
                                                            Sign Up Here
                                                        </a>
                                                    </p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
