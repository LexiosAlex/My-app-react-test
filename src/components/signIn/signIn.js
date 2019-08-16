import React from "react";
import "antd/dist/antd.css";
import "./signIn.css";
import axios from "axios";
import { Form, Icon, Input, Button } from "antd";
import { withRouter } from "react-router";

class loginForm extends React.Component {
  handleSubmit = e => {
    const {onChangeLoginStatus} = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(values);
      if (err) {
        console.log(err);
      }
      axios
        .post("/login/user", {
          userName: values.username,
          password: values.password
        })
        .then(response => {
          console.log("login response: ");
          console.log(response);
          onChangeLoginStatus(true);
          this.props.history.push("/");
        })
        .catch(error => {
          console.log("login error: ");
          console.log(error);
        });
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default withRouter(Form.create({ name: "login" })(loginForm));
