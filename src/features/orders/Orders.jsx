import React from 'react'
import EmptyCart from '../../components/EmptyCart'
import { useOrder } from './useOrder'
import Spinner from '../../components/Spinner'
import ErrorFallback from '../../components/ErrorFallback'

const Orders = () => {
  const {data , isError, isLoading,error} = useOrder()

 if(isLoading){
  return <Spinner />;
 }
 
 if(isError){
  return <ErrorFallback error={error}/>
 }
 if(!data.length){
  return  <EmptyCart text={`It looks like you haven't placed any orders yet?`}/>
 }

  return (
    <>
     <p>Your Orders</p>
    </>
  )
}

export default Orders