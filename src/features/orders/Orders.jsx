import React from 'react'
import EmptyCart from '../../components/EmptyCart'
import { useOrder } from './useOrder'
import Spinner from '../../components/Spinner'
import ErrorFallback from '../../components/ErrorFallback'
import Order from '../../components/Order'
import styled from 'styled-components'

const Heading = styled.span`
   font-size:15px;
   font-weight: 600;
   margin-bottom: 15px;
   background: #fff;
   padding: 5px 10px;
`
const Orders = () => {
  const {data , isError, isLoading,error} = useOrder();

  const {orders}  = data 
 if(isLoading){
  return <Spinner />;
 }
 
 if(isError){
  return <ErrorFallback error={error}/>
 }
 if(!orders){
  return  <EmptyCart text={`It looks like you haven't placed any orders yet?`}/>
 }

  return (
    <>
     <Heading>All Orders</Heading>
    {orders.map(order=>(
     <Order key={order?._id} order={order}/>
    ))}
    </>
  )
}

export default Orders