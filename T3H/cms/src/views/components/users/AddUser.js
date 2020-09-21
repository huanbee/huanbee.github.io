import React, { Component } from "react";
import { Form, Input, Select, Spin, Button, message } from "antd";
import { addUser } from "../../../actions/UsersAction";
import { connect } from "react-redux";

const { Option } = Select;

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      address: {
        province: "",
        street: "",
      },
      birthday: {
        birthYear: "",
        birthMonth: "",
      },
      loading: false,
    };
  }

  onDataChange = (event) => {
    this.setState({
      ...this.state.data,
      [event.target.name]: event.target.value,
    });
  };

  onAddressChange = (key, value) => {
    console.log(key, value);
    this.setState({
      address: {
        ...this.state.address,
        key: value,
      },
    });
  };

  onBirthdayChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      birthday: {
        ...this.state.birthday,
        [event.target.name]: event.target.value,
      },
    });
  };

  onFinish = (values) => {
    console.log("Received values of form: ", values);
    this.setState({ loading: true });
    this.props.addUser(values).then((data) => {
      this.setState({ loading: false });
      message.info("Add user successful!");
    });
  };

  render() {
    return (
      <Form
        name="complex-form"
        onFinish={this.onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item label="Username">
          <Form.Item
            name="username"
            noStyle
            rules={[{ required: true, message: "Username is required" }]}
          >
            <Input
              name="username"
              style={{ width: 160 }}
              placeholder="Please input"
              onChange={this.onDataChange}
            />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Address">
          <Input.Group compact>
            <Form.Item
              name={["address", "province"]}
              noStyle
              rules={[
                {
                  required: true,
                  message: "Province is required",
                },
              ]}
            >
              <Select
                name="province"
                placeholder="Select province"
                onChange={(value) => {
                  this.onAddressChange("province", value);
                }}
              >
                <Option value="Hanoi">Ha Noi</Option>
                <Option value="Hcm">Ho Chi Minh</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={["address", "street"]}
              noStyle
              rules={[
                {
                  required: true,
                  message: "Street is required",
                },
              ]}
            >
              <Input
                name="street"
                style={{ width: "50%" }}
                placeholder="Input street"
                onChange={(event) => {
                  this.onAddressChange(event.target.name, event.target.value);
                }}
              />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
          <Form.Item
            name="year"
            rules={[{ required: true }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Input
              name="birthYear"
              placeholder="Input birth year"
              onChange={this.onBirthdayChange}
            />
          </Form.Item>
          <Form.Item
            name="month"
            rules={[{ required: true }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Input
              name="birthMonth"
              placeholder="Input birth month"
              onChange={this.onBirthdayChange}
            />
          </Form.Item>
        </Form.Item>
        <Form.Item label=" " colon={false}>
          <Button type="primary" htmlType="submit">
            {this.state.loading ? <Spin></Spin> : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

// function mapDispatchToProps() {
//     return {
//         addUser
//     }
// }

export default connect(null, { addUser })(AddUser);
