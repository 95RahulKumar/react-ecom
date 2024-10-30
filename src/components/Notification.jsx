import React from 'react'
import Heading from './Heading'
import { useQuery } from '@tanstack/react-query'
import Loader from './Loader'
import { Button, Card, Flex, Form, Input, Watermark } from 'antd'
import { Typography } from 'antd';

import SubmitButton from './SubmitBtn'
const { Text } = Typography;

const Notification = () => {
    const [form] = Form.useForm();

    const { status,isLoading, data, error } = useQuery({
        queryKey: ['chat-msg'],
        queryFn: async ()=>{
         const data = await fetch(`http://localhost:3000/api/chat-msg`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
            },
        });

         const res = await data.json()
         if(res?.status==false) throw new Error(res.message);
           return res
        },
      })
   
    if(isLoading){
        return <Loader content={'Loading....'}/>;
    }

    const onFinish = (values) => {
         
      };


  return (
    <>
    <Heading>Notifications</Heading>
    <Card>
     
     <Watermark content="Chat">
    <div style={{ height: 350,overflow:'auto'}} />
    {
        data?.chatmsg && data?.chatmsg?.map(item=>{
            return <Card key={item} bodyStyle={{padding: "5px 10px"}} style={{width:'max-content',marginBottom:'10px',background:'#f3e70b4f',color:'#444'}}>
           <Text type="secondary">Ant Design (secondary)</Text>
            </Card>
        })
    }
    
  
  </Watermark>
  </Card>
  <Form
  form={form}
    name="basic"
    style={{ maxWidth: 600,marginTop:'15px' }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
     wrapperCol={{ span: 16 }}
      name="msg"
      style={{ width:400 }}
      rules={[{ required: true,message:'field is requaired to send msg'}]}
    >
      <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 8 }}>
       <SubmitButton form={form}>Submit</SubmitButton>
    </Form.Item>
  
  
  </Form>
    </>
   
  )
}

export default Notification