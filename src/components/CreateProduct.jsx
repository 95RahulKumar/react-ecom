import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import { useCreateProduct } from '../features/products/useProducts';
import Loader from './Loader';
const { RangePicker } = DatePicker;
const { TextArea } = Input;



const CreateProduct = () => {
 const {creteProduct,isLoading} =  useCreateProduct()
 const [file, setfile] = useState({})
  const onFinish = (values) => {
    const {category,description,name
      ,price,stock} = values
      creteProduct({name,price,description,category,stock,file})      
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  }

  const onFinishFailed = (errorInfo) => {
    console.error('Failed:', errorInfo);
  };

  if(isLoading){
    return <Loader content={'Loading....'}/>
  }
  
  return (
    <>
     <Card title="Create product"  >
    <Form
     autoComplete='off'
      labelCol={{ span: 4}}
      wrapperCol={{ span: 20 }}
      layout="horizontal"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}

    >
     
    
      <Form.Item label="Product Name" 
      
      name="name"
      rules={[{ required: true, message: 'Please enter the product name' }]}

      >
        <Input />
      </Form.Item>
      <Form.Item 
      label="Product Price"
     
      name="price"
       rules={[{ required: true, message: 'Please enter the product price' }]}
      >
        <Input  type="number" />
      </Form.Item>
      <Form.Item label="Product description"
       name='description'
       rules={[{ required: true, message: 'Product discription is requared' }]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item label="Upload"
       name="image"
      valuePropName="fileList" getValueFromEvent={normFile}>
        <Upload listType="picture-card"
        customRequest={(obj)=>(
          setfile(obj?.file)
        )}
        >
          <button style={{ border: 0, background: 'none' }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </button>
        </Upload>
      </Form.Item>
      <Form.Item label="Select Category"
       wrapperCol={{ span: 4 }}
      name="category"
      >
        <Select>
          <Select.Option value="smartphone">Smartphone</Select.Option>
          <Select.Option value="TV">TV</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 4 }} name="stock" label="Stock">
          <Slider />
        </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">Create Product</Button>
      </Form.Item>
    </Form>
    </Card>
  </>
  )
}

export default CreateProduct