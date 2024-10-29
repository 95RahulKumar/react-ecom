import React from 'react'
import EmptyCart from '../../components/EmptyCart'
import { useOrder } from './useOrder'
import Spinner from '../../components/Spinner'
import ErrorFallback from '../../components/ErrorFallback'
import Order from '../../components/Order'
import styled from 'styled-components'
import Heading from '../../components/Heading'
import Loader from '../../components/Loader'
const Orders = () => {
  const {data , isError, isLoading,error} = useOrder();

  const orders = data?.orders || [];
  
 if(isLoading){
  return  <Loader content={'Loading....'}/>;
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