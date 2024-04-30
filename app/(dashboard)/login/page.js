"use client";
import { Button, Checkbox, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

export default function LoginPage() {
  const router = useRouter();
  const onFinish = () => {
    router.push('/dashboard')
  };

  return (
    <div className="h-[250px] w-[250px] flex items-center justify-center">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
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
          <Input />
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
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {/* <Form 
     

      name="login"
      layout="vertical"
      autoComplete="off"
      action={"https://dummyjson.com/products"}
      method="get"
      onFinish={handleSubmit}
     
    >
      <FormItem
        label="Username"
        name="username"
        // rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </FormItem>
  
      <FormItem
        label="Password"
        name="password"
        // rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input />
      </FormItem>
  
      <FormItem
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </FormItem>
  
      <FormItem wrapperCol={{ offset: 8, span: 16 }}>
        <Button size="large"
                  htmltype="submit"
                  name="login"
                  id="login-btn">
          Submit
        </Button>
      </FormItem>
    </Form> */}
    </div>
  );
}
