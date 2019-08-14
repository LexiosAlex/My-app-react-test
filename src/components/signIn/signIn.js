import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {BrowserRouter, Route, Link} from "react-router-dom";
import axios from 'axios';
import { Form, Icon, Input, Button } from 'antd';

class loginForm extends React.Component {
  state = {
    username: '',
    password: '',
    redirectTo: null
  };

  // handleSubmit(event) {
  //   event.preventDefault();
  //   console.log('handleSubmit');
  //
  //   axios
  //     .post('/user/login', {
  //       username: this.state.username,
  //       password: this.state.password
  //     })
  //     .then(response => {
  //       console.log('login response: ');
  //       console.log(response);
  //       if (response.status === 200) {
  //         // update mainPage.jsge.js state
  //         this.props.updateUser({
  //           loggedIn: true,
  //           username: response.data.username
  //         });
  //         // update the state to redirect to home
  //         this.setState({
  //           redirectTo: '/'
  //         })
  //       }
  //     }).catch(error => {
  //     console.log('login error: ');
  //     console.log(error);
  //
  //   })
  // }


  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(values);
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'login' })(loginForm);
