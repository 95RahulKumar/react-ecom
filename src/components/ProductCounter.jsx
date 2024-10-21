import React from 'react'
import { MdAddCircleOutline } from "react-icons/md";
import { GrSubtractCircle } from "react-icons/gr";
import useSelection from 'antd/es/table/hooks/useSelection';
import { decreaseQuantity, getQuantityByID, increaseQuantity } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const ItemCount = styled.span`
    font-size:15px;
    color: green;
    padding: 1px 5px;
    margin: 0 5px;
    border: 1px solid #f0f0f0;
`

const CounterWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`

const ProductCounter = ({item}) => {

    const quantity = useSelector(getQuantityByID(item._id));
    const dispatch = useDispatch()
    const handleInc =(id)=>{
      dispatch(increaseQuantity(id))
    }

    const handleDec =(id)=>{
        dispatch(decreaseQuantity(id))
    }
  return (
    <>
    <CounterWrapper >
    <MdAddCircleOutline onClick={()=>handleInc(item._id)}/>
    <ItemCount>{quantity}</ItemCount>
    <GrSubtractCircle  onClick={()=>handleDec(item._id)}/>
    </CounterWrapper>
    </>
  )
}

export default ProductCounter