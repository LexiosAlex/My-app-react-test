import React from "react";
import "antd/dist/antd.css";
import "./signIn.css";
import { Form, Icon, Input, Button } from "antd";
import { Redirect, withRouter } from "react-router";

class loginForm extends React.Component {
  handleSubmit = e => {
    const { onAdminLogin } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(values);
      if (err) {
        console.log(err);
      }
      onAdminLogin(values.username, values.password);
    });
  };

  render() {
    const { loginData } = this.props;
    const { getFieldDecorator } = this.props.form;

    if (loginData.loggedIn) {
      console.log("выполн");
      return <Redirect push to="/dashboard" />;
    }

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
          <Button
            style={{ float: "right" }}
            type="primary"
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            Go back
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default withRouter(Form.create({ name: "login" })(loginForm));
