import styled from 'styled-components'
import Cart from '../../components/Cart'
import React from 'react'
import { useSelector } from 'react-redux'
import Heading from '../../components/Heading'
const LayoutWrapper = styled.div`
  display:flex ;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items:center;
`
const CartLayout = () => {
   // @ts-ignore
   const cart = useSelector(state=>state.cart);
   console.log(cart)
  return (
    <>
    <Heading>Cart</Heading>
    <LayoutWrapper>
    <Cart/>
    </LayoutWrapper>
    </>
  )
}

export default CartLayout