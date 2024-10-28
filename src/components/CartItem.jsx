import React, { useState } from 'react'
import Image from './Image'
import styled from 'styled-components'
import { FiDelete } from "react-icons/fi";
import { Button, Card, Modal } from 'antd';
import { remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import ProductCounter from './ProductCounter';
import { Typography } from 'antd';

const { Text,Title } = Typography;


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

const ItemPrice = styled.span`
    font-size:18px; 
    color:#212121;
    font-weight: 600;
    display: block;
`

const StyledDelete = styled(FiDelete)`
    position: absolute;
    top: 15px;
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
    <Card style={{marginBottom:'15px'}}>
    <StyledDelete onClick={() =>handleClick(product) } />
    <Image image={product?.image?.[0]?.url} width={'160px'} height={'160px'}/>

    <Title level={5} >{product?.name}</Title>
    <Text type="secondary">{product?.description}</Text>
    <Title level={5} style={{marginTop:'5px'}}>Rp. {product?.price}</Title>
    <ProductCounter item={product}/>

    </Card>
    <Modal title="Remove Item" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure you want to remove this item?</p>
      </Modal>
    </>
    
  )
}

export default CartItem