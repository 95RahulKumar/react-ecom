import React, { useContext, useState } from 'react'
import { CartWrapper } from './CartItem'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { getCount, getTotalPrice } from '../store/cartSlice'
import { BiSolidOffer } from "react-icons/bi";
import { Button, Card, Modal } from 'antd'
import { MyContext } from '../context/payContext'
import { Typography } from 'antd';
const { Text,Title} = Typography;
const StyledSpan =styled.span`
    display: block;
    width: 100%;
    margin-top:10px;
`
const BorderDashed = styled.span`
    display: block;
    height: 1px;
    width:100%;
    border-top:1px dashed #625c5c;
    margin-top: 10px;
    margin-bottom: 10px;

`


const Icon = styled(BiSolidOffer)`
    font-size:15px;
`
const btnStyle = {color:'green', width:'max-content',pointerEvents:'none',marginBottom:'5px'}

const PriceDetail = ({handlePlaceOrder}) => {
   const totalPrice =  useSelector(getTotalPrice);
   const [offer, setoffer] = useState(0)
   const [timeline, settimeline] = useState(false)
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [appliedCode, setappliedCode] = useState(false)
   const {pay} = useContext(MyContext)
   const prodCount =  useSelector(getCount)
   const plateformFee = 3;
   const descount = 0
   const deliveryStr = 'free'
   const deliveryCharge = deliveryStr == 'free'?0:30
   const total = totalPrice+plateformFee-descount+deliveryCharge-offer
   const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setoffer(12500)
    setIsModalOpen(false);
    setappliedCode(true)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleClick = (total)=> {
    handlePlaceOrder(total)
    settimeline(true)
  }
  return (
    <Card style={{height:'max-content'}}>
        <Button icon={<Icon />} style={{color:'green', width:'max-content',}}  onClick={showModal}> 
            {`${appliedCode ?'Applied':'Apply'} Code HYD10`}
          </Button>

          <Title level={5} style={{marginTop:'15px',}}>Price Details</Title>

        <StyledSpan>Price ({prodCount} item): <span style={{fontWeight:'600'}}>{totalPrice}</span></StyledSpan>
        
        <StyledSpan>Plateform Fee:<span style={{fontWeight:'600'}}> Rp.{plateformFee}</span></StyledSpan>
        <StyledSpan>Discount:<span style={{fontWeight:'600'}}> {descount}</span></StyledSpan>
        <StyledSpan>Delivery Charges: <span style={{fontWeight:'600'}}>{deliveryCharge}</span></StyledSpan>
        <BorderDashed/>
        <Title level={5} style={{marginTop:'15px',}}>Total Amount: {total}</Title>
        <Modal title={'Apply Code HYD15'} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Button style={btnStyle} type="dashed">Code HYD10</Button>

          </Modal>
      {!timeline && !pay && <Button type="primary"   style={{marginTop:'15px'}} onClick={()=>handleClick(total)}>Place Order</Button>}
    </Card>
  )
}

export default PriceDetail