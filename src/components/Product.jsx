import React from 'react'
import styled from 'styled-components'
import { Button, Card, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Typography } from 'antd';
const { Text,Title } = Typography;






const Product = ({product}) => {
   
    const navigate = useNavigate()



  return (
    <>
  
    <Card onClick={()=> navigate(`/products/${product._id}`)}>
      
       
        <img style={{height:'160px'}} src={product?.image[0]?.url} alt="" />
    <Title level={5}>{product.name}</Title>
    <Flex justify='space-between' align='center' style={{marginTop:'10px'}}>

    <Text type="secondary">Rp. {product?.price}</Text>
  <Button disabled={product?.stock==0} type="primary">{product?.stock>0?'In Stock':'Out of Stock'}</Button>
    </Flex>
    </Card>
    
    </>
  )
}

export default Product