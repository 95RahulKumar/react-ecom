import { useState } from "react";
import FormRowVertical from "../../components/FormRowVertical";
import styled from "styled-components";
import { useLogin } from "./useLogin";
import { Button, Card, Checkbox, Form, Input, Switch } from 'antd';
import Loader from "../../components/Loader";

const MarginTop = styled.form`
 margin-top: 10px;
 width: 100%;
 height:10px;
`;
function LoginForm() {
  const  {login,isLoading} = useLogin();

  const onFinish = (values) => {
    const {email,password} = values
    login({email,password})
  };
  
  const onFinishFailed = (errorInfo) => {
    console.error('Failed:', errorInfo);
  };

  if(isLoading){
  return <Loader content={'Loading....'}/>
  }  

  return (
    <Form
    name="basic"
    labelCol={{ span: 8}}
    wrapperCol={{ span: 16 }}
  autoCorrect="off"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
   
  >

    <Form.Item
      label="email"
      name="email"
      rules={[
        { required: true, message: 'Please enter your email' },
        { 
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
          message: 'Please enter a valid email address' 
        }
      
      ]}
      hasFeedback
    >
      <Input type="email" autoFocus />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"

      rules={[{ required: true, message: 'Please input your password!' },
        {min:8,
          message: 'password should be at least 8 char long'
        }
      ]}
      hasFeedback
    >
      <Input.Password />
    </Form.Item>
    <Form.Item
    wrapperCol={{ span: 24 }}  >
      <Button type="primary" style={{marginTop:'10px'}} block htmlType="submit">
        Submit
      </Button>
    </Form.Item>

  </Form>
  );
}

export default LoginForm;
