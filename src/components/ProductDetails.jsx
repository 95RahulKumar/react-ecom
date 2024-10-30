import { useFetchProductById } from '../features/products/useProducts'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from './Spinner'
import { Button, Card, Progress } from 'antd'
import Meta from 'antd/es/card/Meta'
import styled from 'styled-components'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux'
import { add, getQuantityByID } from '../store/cartSlice';
import { BsCartPlus } from "react-icons/bs";
import { IoCart } from "react-icons/io5";
import { Typography } from 'antd';
import Loader from './Loader'

const { Text,Title } = Typography;

const DetailWrapper = styled.div`
    display: grid;
    grid-template-columns:1fr;
`
const FillCartIcon = styled(IoCart)`
   font-size: 20px;
`

const BackIcon = styled(IoArrowBackCircleOutline)`
    font-size: 30px;
    margin-bottom: 15px;
    cursor:'pointer';
    background: #ffffff;
    border-radius: 50%;
`

const StyledIcon = styled(BsCartPlus)`
    color: #000;
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: absolute;
    top:15px;
    right:14px;
    z-index: 100;
`

const ProductDetails = () => {
   const {id} =  useParams()
   const navigate = useNavigate();
   const {data , isLoading,error} = useFetchProductById(id)
   const quantity = useSelector(getQuantityByID(id));
   const dispatch = useDispatch();

   if(isLoading){
    return <Loader content={'Loading....'}/>;
   }
  const {product} = data;
  const productObj = product?.[0] 
  const handleGoBack = () => {
    navigate(-1); 
  };

  const getProgress = (val)=>{
    const total_rat = val.reduce((acc,curr)=>acc+curr.rating,0)
    const length = val.length
    const cal = (total_rat/length)*10;
    console.log(cal)
  return cal
  }

  function handleClick(product){
    dispatch(add(product))
}

  return (
    <>
    <BackIcon onClick={handleGoBack}/>
    <DetailWrapper>
    <Card
  > 
  <img alt="example"  style={{height:'200px'}} src={productObj?.image[0]?.url} />
  
        {quantity<1 && productObj?.stock>0 && <StyledIcon onClick={() =>handleClick(productObj) } />}

        {quantity>=1 &&<Button onClick={() =>navigate('/cart') } style={{marginLeft:'5px', position:'absolute', top:'10px',right:'10px'}} icon={ <FillCartIcon />} type="primary">Go to Cart</Button>}
        
        <Card >

  <Meta title={productObj?.name}  description={productObj?.description} />

  {!productObj?.numOfReviews &&  <Text type="secondary" style={{color:'#ff00005b'}}>No Reviews Found</Text>}

  <Title level={5} style={{marginTop:'10px'}}>Rp. {productObj?.price}</Title>

  <Button disabled={productObj?.stock==0} style={{marginTop:'10px',cursor:'auto',pointerEvents:'none'}} >{productObj?.stock>0?'In Stock':'Out of Stock'}</Button>

  { productObj?.numOfReviews>0 ?
   <span>

     <Title level={5} style={{marginTop:'10px'}}>Ratings</Title>

     <Progress style={{marginTop:'10px'}} percent={getProgress(productObj?.reviews)} success={{ percent: getProgress(productObj?.reviews) }} type="circle" />
     {productObj?.reviews.map(item=>(
        <div style={{marginTop:'10px'}}>
           <Title level={5}>By: {item?.name}</Title>
           <Text type="secondary">comments: {item?.comment}</Text>
        </div>
       
        ))}
   </span>:null
  }
 
  </Card>

  </Card>
 
    </DetailWrapper>
  
    </>

  )
}

export default ProductDetails