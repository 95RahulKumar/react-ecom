import React from 'react'
import styled from 'styled-components'
import Image from './Image'
import { format } from 'date-fns'
import { Card, Flex } from 'antd'
import { Typography } from 'antd';

const { Text,Title } = Typography;


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
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





const Order = ({order}) => {
  return (
    <Wrapper>
       
    {order?.orderItems?.map(product=>(

<Card key={product?._id} style={{marginBottom:'15px'}}>
<Text type="success">Ordered On {format(new Date(order?.createdAt), "MM/dd/yyyy")}</Text>
<Flex>

<Image image={product?.image?.[0]?.url} width={'160px'} height={'160px'}/>

<div style={{marginLeft:'15px'}}>
<Title level={5} style={{marginTop:'5px'}}>{product.name}</Title>
<Text type="secondary">{product?.description}</Text>
<Title level={5} style={{marginTop:'5px'}}>Rp. {product?.price}</Title>
<Text type={order?.orderStatus !== 'Proccessing'?'success':'warning'}>Order Status: {order?.orderStatus !== 'Proccessing'?'Delevered':'On the way'}</Text>
</div> 

</Flex>


</Card>


    ))}
    </Wrapper>
  )
}

export default Order