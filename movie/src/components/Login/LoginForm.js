import React, { useState } from "react";

import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
export default function LoginForm({ handleLogin }) {
  const onFinish = (values) => {};

  const [formData, setForm] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const onChangeFormData = (keyField) => (evt) => {
    setForm({
      ...formData,
      [keyField]: evt.target.value,
    });

    //xl sự kiện click
  };
  const onSubmitLogin = () => {
    if (handleLogin) {
      handleLogin(formData);
    }
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          value={formData.username}
          onChange={onChangeFormData("taiKhoan")}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          value={formData.password}
          onChange={onChangeFormData("matKhau")}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="#/fff">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button
          onClick={onSubmitLogin}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Sign UP
        </Button>
      </Form.Item>
    </Form>
  );
}
