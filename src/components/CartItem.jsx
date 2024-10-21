import React, { useState } from 'react'
import Image from './Image'
import styled from 'styled-components'
import { FiDelete } from "react-icons/fi";
import { Modal } from 'antd';
import { remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import ProductCounter from './ProductCounter';

export const CartWrapper= styled.div`
box-shadow: 0 1px 1px 0 rgba(0,0,0,.2);
background: #fff;
padding: 24px;
width:100%;
margin-bottom:10px;
border-top: 1px solid #f0f0f0!important;
display: flex;
position: relative;
`


const CartDes= styled.div`
padding:10px 24px 24px;
`
const CartName = styled.span`
    font-size:16px; 
    color:#212121;
`
const ItemPrice = styled.span`
    font-size:18px; 
    color:#212121;
    font-weight: 600;
    display: block;
`
const ItemReview = styled.p`
    font-size:14px; 
    color:green;
    font-weight: 600;
`
const StyledDelete = styled(FiDelete)`
    position: absolute;
    top: 10px;
    right: 20px;
    font-size:20px;
    color: red;
`

const CartItem = ({product}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productId, setproductId] = useState(null)
    const dispatch = useDispatch();
    const showModal = () => {
        setIsModalOpen(true);
      };
    
    const handleClick=(product)=>{
        setproductId(product._id)
        showModal()
    }
      const handleOk = () => {
        console.log('productId---',productId)
        dispatch(remove(productId))
        setIsModalOpen(false);

      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
      
  
    console.log(product?.reviews)
  return (
    <>
    <CartWrapper>
    <StyledDelete onClick={() =>handleClick(product) } />
    <Image image={product?.image?.[0]?.url} width={'112px'} height={'112px'}/>
    <CartDes>
    <CartName>{product.name}</CartName>
    <ItemPrice>Rp. {product?.price}</ItemPrice>
    <p 
    style={ product?.stock> 0 ? {
        background:'green',
        border:' 1px solid var(--color-grey-100)',
        padding:'2px 10px',
        color:'var(--color-grey-100)',
        fontSize:'15px',
        borderRadius:'5px',
        display:'block',
        maxWidth:'max-content',
        margin:'5px 0'
        } : {
            background:'#eee',  
            border:' 1px solid var #1f2937',
            padding:'2px 10px',
            color:'#777575',
            fontSize:'15px',
            borderRadius:'5px',
            display:'block',
            maxWidth:'max-content',
            margin:'5px 0'
        }}> {product?.stock> 0 ? 'in Stock':'out Of Stock'} </p>
     

    </CartDes>
    <ProductCounter item={product}/>

    </CartWrapper>
    <Modal title="Remove Item" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure you want to remove this item?</p>
      </Modal>
    </>
    
  )
}

export default CartItem