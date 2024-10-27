import { Checkbox, Radio, Input, Select, TreeSelect, Cascader, DatePicker, InputNumber, Switch, Upload, Button, Slider, ColorPicker, Rate, Form, Modal } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { useRegister } from '../features/authentication/useLogin';


const ResgisterUser = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [file, setfile] = useState(null)
    const {resister,isLoading} = useRegister()
    const [location, setLocation] = useState({
        address:'',
        city:'',
        state:'',
        country:'',
        pincode:null,
        phoneNumber:null
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setLocation(prevValues => ({
          ...prevValues,
          [id]: value
        }));
      };


    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        setIsModalOpen(false);
        console.log(location);
        
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
        setLocation({
            address:'',
            city:'',
            state:'',
            country:'',
            pincode:null,
            phoneNumber:null
        })
      };


      const normFile = (e) => {
        if (Array.isArray(e)) {
          return e;
        }

        console.log( e?.fileList)
        return e?.fileList;
      }

      const onFinish = (values) => {
        const {name,email,password,gender,role} = values;
        console.log(values);
        const final_payload = {
            name,email,password,gender,file,role,
            address: location.address,
            city: location.city,
            state:location.state ,
            country: location.country,
            pincode: location.pincode,
            phoneNumber:location.phoneNumber ,
        }
        resister(final_payload)
        console.log(final_payload);
        
        // login({email,password})
      };
      
      const onFinishFailed = (errorInfo) => {
        console.error('Failed:', errorInfo);
      };

      
  return (
    <Form
    labelCol={{ span: 8}}
    wrapperCol={{ span: 16 }}
    autoCorrect="off"
    layout="horizontal"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
   
  >

<Form.Item
      label="User Name"
      name="name"

      rules={[{ required: true, message: 'Please input your password!' },
      ]}
      hasFeedback
    >
      <Input />
    </Form.Item>
  
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



    <Form.Item label="Gender" name="gender"
     rules={[{ required: true, message: 'Please input your gender!' },
      ]}
      hasFeedback
    >
      <Radio.Group>
        <Radio value="male"> Male </Radio>
        <Radio value="female">Female </Radio>
      </Radio.Group>
    </Form.Item>
    <Form.Item label="Role" name="role"
     rules={[{ required: true, message: 'Please input your gender!' },
      ]}
      hasFeedback
    >
      <Radio.Group>
        <Radio value="admin"> Admin </Radio>
        <Radio value="user">User </Radio>
      </Radio.Group>
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
    
    <Form.Item >
      <Button onClick={showModal} type='primary'>Add Adress Here</Button>
    </Form.Item>
    <Button type="primary" style={{marginBottom:'10px'}} block htmlType="submit">
        Proceed
      </Button>
    <Modal title="Add Address"  okText="save" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                labelCol={{ span: 6}}
                wrapperCol={{ span: 18 }}
            autoCorrect="off"
                layout="horizontal"
           
            >
                    <Form.Item
                        label="Address"
                       
                    
                        rules={[{ required: true, message: 'Please input your address!' },
                        ]}
                        hasFeedback
                        >
                        <Input 
                         id="address"
                        value={location?.address}
                        onChange={handleChange}
                        />
                        </Form.Item>

                        <Form.Item
                        label="City"
                       

                        rules={[{ required: true, message: 'Please input your city!' },
                        ]}
                        hasFeedback
                        >
                        <Input
                        value={location?.city}
                        onChange={handleChange}
                         id="city"
                        />
                        </Form.Item>

                        <Form.Item
                        label="State"
                       

                        rules={[{ required: true, message: 'Please input your State!' },
                        ]}
                        hasFeedback
                        >
                        <Input
                         value={location?.state}
                         onChange={handleChange}
                          id="state"
                        />
                        </Form.Item>

                        <Form.Item
                        label="Country"
                        

                        rules={[{ required: true, message: 'Please input your Country!' },
                        ]}
                        hasFeedback
                        >
                        <Input
                        id="country"
                         value={location?.country}
                         onChange={handleChange}
                        />
                        </Form.Item>

                        <Form.Item
                        label="Pincode"
                       

                        rules={[{ required: true, message: 'Please input your Pincode!' },
                        ]}
                        hasFeedback
                        >
                        <Input 
                         id="pincode"
                         value={location?.pincode}
                         onChange={handleChange} 
                         />
                        </Form.Item>

                        <Form.Item
                        label="Phone Number"
                       

                        rules={[{ required: true, message: 'Please input your Phone Number!' },
                        ]}
                        hasFeedback
                        >
                        <Input 
                         id="phoneNumber" 
                         value={location?.phoneNumber}
                         onChange={handleChange}
                         />
                        </Form.Item>

            </Form>
      </Modal>
  </Form>
  )
}

export default ResgisterUser