import React, { useState } from 'react'
import { CartWrapper } from './CartItem'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { getCount, getTotalPrice } from '../store/cartSlice'
import { BiSolidOffer } from "react-icons/bi";
import { Modal } from 'antd'

const PriceDetailse = styled.span`
    border-bottom: 1px dashed #625c5c;
    height: max-content;
    font-weight:600;
    padding-bottom:5px;
    width: 100%;
`
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

const TotalAmount = styled.span`
    display: block;
    font-weight: 600;
    font-size: 16px;
`

const Code = styled.div`
display: flex;
justify-content:flex-start;
align-items: center;
color: green;
border: 1px dashed green;
margin-top: 10px;
padding: 5px 10px;
font-size: 15px;
margin-bottom: 5px;
width: max-content;
cursor: pointer;
`
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
`

const Icon = styled(BiSolidOffer)`
    font-size:15px;
`
const PriceDetail = ({handlePlaceOrder}) => {
   const totalPrice =  useSelector(getTotalPrice);
   const [offer, setoffer] = useState(0)
   const [timeline, settimeline] = useState(false)
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [appliedCode, setappliedCode] = useState(false)
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
    <CartWrapper style={{padding:'10px 20px',
        flexDirection:'column',
        maxHeight: 'max-content',
        position:'sticky',  
        top:'0'
    }}>
        <Code><Icon /> <p style={{fontSize:'15px',marginLeft:'5px'}} onClick={showModal}>
            {`${appliedCode ?'Applied':'Apply'} Code HYD10`}
            </p></Code>
        <PriceDetailse>Price Details</PriceDetailse>
        <StyledSpan>Price ({prodCount} item): <span style={{fontWeight:'600'}}>{totalPrice}</span></StyledSpan>
        
        <StyledSpan>Plateform Fee:<span style={{fontWeight:'600'}}> Rp.{plateformFee}</span></StyledSpan>
        <StyledSpan>Discount:<span style={{fontWeight:'600'}}> {descount}</span></StyledSpan>
        <StyledSpan>Delivery Charges: <span style={{fontWeight:'600'}}>{deliveryCharge}</span></StyledSpan>
        <BorderDashed/>
        <TotalAmount>Total Amount: {total}</TotalAmount>
        <Modal title={'Apply Code HYD15'} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Code> <p style={{fontSize:'15px',marginLeft:'5px'}} >Code HYD10</p></Code>
          </Modal>
      {!timeline &&<SuccessBtn onClick={()=>handleClick(total)}>Place Order</SuccessBtn>}
      {timeline && <SuccessBtn onClick={handleClick}>Continue</SuccessBtn>}
    </CartWrapper>
  )
}

export default PriceDetail