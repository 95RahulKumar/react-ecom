import React, { useState } from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import PriceDetail from './PriceDetail'
import EmptyCart from './EmptyCart'
import Address from './Address'
import { ContextProvider } from '../context/payContext'
import { Button, Flex } from 'antd'
const CartWrapper = styled.div`
    display: grid;
    width: 100%;
    gap:15px;
    grid-template-columns:2fr 1fr;
`
const Offer = styled.div`
  padding:5px 10px;
  border: 1px dashed green;
  width: max-content;
  color: green;
  margin-bottom:5px;
`
const OfferDes = styled.p`
   margin-bottom:5px; 
`
const btnStyle = {color:'green', width:'max-content',pointerEvents:'none',marginBottom:'5px'}
const Cart = () => {
  const [hideOrderDetails, setHideOrderDetails] = useState(false)
  const [totalPrice, settotalPrice] = useState(null)
    // @ts-ignore
    const products = useSelector(state=>state.cart);
    if(products.length == 0){
        return  <EmptyCart text={'Your cart is empty!'}/>
    }

    const handlePlaceOrder=(price)=>{
      settotalPrice(price)
      setHideOrderDetails(true)
    }
  return (
   <>
   <ContextProvider>
   <CartWrapper>
   { !hideOrderDetails &&
    <div>
      
      <Flex vertical style={{marginBottom:'15px'}}>
      <Button style={btnStyle} type="dashed">Offer Code HYD10</Button>
      <Button style={btnStyle} type="dashed">Use Code to get 10% off on minimum purchase of Rs. 10000</Button>
      </Flex>
       
    {products && products.map(ele => (
    <CartItem key={ele._id} product={ele}/>
     ))}
    </div>
   } 

   {hideOrderDetails && <Address totalPrice={totalPrice}/>}
  <PriceDetail  handlePlaceOrder={handlePlaceOrder}/>
   </CartWrapper>
   </ContextProvider>
   </>
  )
}

export default Cart