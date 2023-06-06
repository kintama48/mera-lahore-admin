import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { login } from "../utils/utils";

function LoginComponent() {
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    if (login(values.email, values.password)) {
      message.success("Login Successful");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      message.error("Invalid Credentials");
    }
  };

  return (
    <div className="max-w-[400px] w-full">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={
              <UserOutlined className="site-form-item-icon" color="#ffff" />
            }
            placeholder="Email"
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
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <div className="flex justify-between w-full">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Button
                loading={isLoading}
                type="primary"
                htmlType="submit"
                className="bg-blue-500"
                // className="login-form-button"
            >
              Log in
            </Button>

            {/*<a*/}
            {/*  className="login-form-forgot text-primary"*/}
            {/*  href="/reset-password"*/}
            {/*>*/}
            {/*  Forgot password?*/}
            {/*</a>*/}
          </div>
        </Form.Item>

        {/*<Form.Item>*/}
        {/*  <Button*/}
        {/*    loading={isLoading}*/}
        {/*    type="primary"*/}
        {/*    htmlType="submit"*/}
        {/*    className="bg-blue-500"*/}
        {/*    // className="login-form-button"*/}
        {/*  >*/}
        {/*    Log in*/}
        {/*  </Button>*/}
        {/*</Form.Item>*/}
      </Form>
    </div>
  );
}

export default LoginComponent;
