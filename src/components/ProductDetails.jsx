import { useFetchProductById } from '../features/products/useProducts'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from './Spinner'
import { Card, Progress } from 'antd'
import Meta from 'antd/es/card/Meta'
import styled from 'styled-components'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux'
import { add, getQuantityByID } from '../store/cartSlice';
import { BsCartPlus } from "react-icons/bs";
import { IoCart } from "react-icons/io5";


const DetailWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
`
const FillCartIcon = styled(IoCart)`
   font-size: 20px;
`

const BackIcon = styled(IoArrowBackCircleOutline)`
    font-size: 30px;
    margin-bottom: 10px;
    cursor:'pointer';
`
const ReviewS = styled.span`
    color: #ff00005b;
`
const Stock = styled.span`
    padding:5px 10px;
    background: green;
    color: #fff;
    display: flex;
    font-weight:600;
    justify-content: center;
    margin-top: 10px;
    width: max-content;
`
const StyledIcon = styled(BsCartPlus)`
    color: #0080004a;
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: absolute;
    top:15px;
    right:14px;
    z-index: 100;
`

const CartBtn = styled.button`
    border: none;
    outline: none;
    padding:5px 10px;
    background: green;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 15px;
    left: 15px;
    z-index:100;
`

const ProductDetails = () => {
   const {id} =  useParams()
   const navigate = useNavigate();
   const {data , isLoading,error} = useFetchProductById(id)
   const quantity = useSelector(getQuantityByID(id));
   const dispatch = useDispatch();

   if(isLoading){
    return <Spinner/>
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
    bordered={true} 
    style={{
        boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px;',
        marginRight:'10px'
     }}
    cover={<img alt="example" src={productObj?.image[0]?.url} />}
  >
    {/* <Meta title={productObj?.name} description={productObj?.description} /> */}
        {quantity<1 && productObj?.stock>0 && <StyledIcon onClick={() =>handleClick(productObj) } />}
        {quantity>=1 && <CartBtn onClick={() =>navigate('/cart') }> <FillCartIcon /> <span style={{marginLeft:'5px'}}>Go to Cart</span></CartBtn>}
  </Card>
  <Card bordered={true} >
  <Meta title={productObj?.name}  description={productObj?.description} />
  {!productObj?.numOfReviews && <ReviewS>No Reviews Found</ReviewS>}
  <p>Rp. {productObj?.price}</p>
  <Stock style={productObj?.stock>0 ?{}:{ background:'#eee',color:'#777575'}}>{productObj?.stock>0 ? 'In Stock':'Currently Unavailable'}</Stock>
  { productObj?.numOfReviews>0 ?
   <span>
     <p style={{marginTop:'10px'}}>Ratings</p>
     <Progress style={{marginTop:'10px'}} percent={getProgress(productObj?.reviews)} success={{ percent: getProgress(productObj?.reviews) }} type="circle" />
     {productObj?.reviews.map(item=>(
        <div style={{marginTop:'10px'}}>
        <p>By: {item?.name}</p>
        <p>comments: {item?.comment}</p>
        </div>
       
        ))}
   </span>:null
  }
 
  </Card>
    </DetailWrapper>
  
    </>

  )
}

export default ProductDetails