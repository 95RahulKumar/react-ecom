import React from 'react'
import styled from 'styled-components'
import Image from './Image'
import { FiDelete } from 'react-icons/fi'
import { format } from 'date-fns'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const CreatedAt = styled.span`
    text-align: center;
    margin: 10px 0;
    padding: 3px 6px;
    font-size: 15px;
    color: green;
    border-radius: 5px;
    background: #0080004e;
    width: max-content;
    text-align: center;
`

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


const Order = ({order}) => {
  return (
    <Wrapper>
    
    <CreatedAt> On {format(new Date(order?.createdAt), "MM/dd/yyyy")}</CreatedAt>   
    {order?.orderItems?.map(product=>(

<CartWrapper key={product?._id}>
<Image image={product?.image?.[0]?.url} width={'112px'} height={'112px'}/>
<CartDes>
<CartName>{product.name}</CartName>
<ItemPrice>Rp. {product?.price}</ItemPrice>
<p 
style={order?.orderStatus !== 'Proccessing' ? {
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
        background:'orange',  
        border:' 1px solid var #1f2937',
        padding:'2px 10px',
        color:'#444',
        fontSize:'15px',
        borderRadius:'5px',
        display:'block',
        maxWidth:'max-content',
        margin:'5px 0'
    }}> {order?.orderStatus === 'Proccessing' ? 'On the Way':'Delevered'} </p>
 

</CartDes>

</CartWrapper>


    ))}
    </Wrapper>
  )
}

export default Order