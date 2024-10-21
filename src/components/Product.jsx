import React from 'react'
import styled from 'styled-components'
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { add, getQuantityByID } from '../store/cartSlice';
import { Tooltip } from 'antd';
import { BsCartPlus } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const StyledItem = styled.li`
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    padding: 2rem;
    border-radius: 8px 8px 0 0;
    position: relative;
    cursor: pointer;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
const StyledName = styled.p`
    font-size: 18px;
    font-weight: 600;
    color:#444;
`






const Product = ({product}) => {
   
    const navigate = useNavigate()



  return (
    <>
  
    <StyledItem onClick={()=> navigate(`/products/${product._id}`)}>
      
       
        <img style={{maxHeight:'200px'}} src={product?.image[0]?.url} alt="" />
    <StyledName>{product.name}</StyledName>
    <span>Rp. {product?.price}</span>
    <p style={ product?.stock> 0 ? {
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
   
    {/* <p>{product?.reviews[0]}</p> */}
    </StyledItem>
    
    </>
  )
}

export default Product