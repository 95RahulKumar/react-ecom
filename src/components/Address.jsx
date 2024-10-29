import { Button, Card, Flex, Steps } from 'antd';
import { useAddress } from '../features/authentication/useLogin';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Spinner from './Spinner';
import toast from 'react-hot-toast';
import { MyContext } from '../context/payContext';
import { useMakeOrder } from '../features/orders/useOrder';
import { useSelector } from 'react-redux';
import { Typography } from 'antd';
import Loader from './Loader';
const { Text } = Typography;

const AddressWrapper = styled.p`
  font-size: 14px;
  color: grey;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  padding: 10px;
  background: #fff;
  height: max-content;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
  border-top: 1px solid #f0f0f0;
`;

const Home = styled.p`
  color: #fff;
  background: green;
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 20px;
  border: 1px solid green;
  width: max-content;
  margin-bottom: 10px;
`;

const SuccessBtn = styled.button`
  color: #fff;
  background: green;
  margin: 10px 5px;
  padding: 5px 10px;
  font-size: 15px;
  width: max-content;
  cursor: pointer;
  border: none;
  outline: none;
`;

const Address = ({totalPrice}) => {
  const [step, setStep] = useState(1); // Move useState inside the component
  const [showAddress, setshowAddress] = useState(true)
  const {isLoading:addressLoader, isError, data, error} = useAddress();
  const  {order, loading:placeOrderLoader} = useMakeOrder()
  const [address, setaddress] = useState({})
  const {setpay} = useContext(MyContext)
  // @ts-ignore
  const products = useSelector(state=>state.cart);

  if(addressLoader || placeOrderLoader){
    return <Loader content={'Loading....'}/>
  }
  const handleClick = () => {
    // Add functionality here
    setStep(2)
    setshowAddress(false)
    setaddress(data?.user?.addressInfo)
  };
  const handlePay = ()=>{
    setStep(2)
    setpay(true)
    order(
      {
      shipingInfo: address,
      paymentInfo: {
        id:1,
        status:"success",
      },
      taxPrice: 0,
      shipingPrice: 0,
      totalPrice: totalPrice,
      orderItems: products
    })
  }

  if(isError){
    toast.error(error['message']);
  }
  return (
    <Card style={{height:'max-content'}}>
      <Steps
        style={{
          marginBottom: '15px',
        }}
        size="small"
        current={step}
        items={[
          {
            title: 'Bag',
          },
          {
            title: 'Address',
          },
          {
            title: 'Payment',
          },
        ]}
      />

       {showAddress && <div>
        <Flex vertical>
        <Button color="danger" variant="dashed" style={{width:'max-content'}}>
          Home
          </Button>
             <Text type="secondary" style={{marginTop:'15px'}}>{data?.user?.addressInfo?.address} {data?.user?.addressInfo?.city} {data?.user?.addressInfo?.state},
             {data?.user?.addressInfo?.country}, {data?.user?.addressInfo?.pincode}</Text>
        </Flex>

        <Typography.Title  level={5} style={{marginTop:'15px'}}>
          Phone no :{data?.user?.addressInfo?.phoneNumber}
        </Typography.Title>

             <Button type="primary" style={{marginTop:'15px'}} onClick={handleClick}>Use This Address</Button>
        </div>}
      {!showAddress && <div>
        <p>Payment Gateway</p>
         <Button type="primary" style={{marginTop:'15px'}} onClick={handlePay}>Pay {totalPrice} </Button>
        </div>}
    </Card>
  );
};

export default Address;
