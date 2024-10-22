import styled from 'styled-components'
import Product from '../components/Product'
import Spinner from '../components/Spinner'
import { useFetchProducts } from '../features/products/useProducts'
import React from 'react'

const StyledContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
    gap:1rem;
`
const Heading = styled.span`
   font-size:15px;
   font-weight: 600;
   margin-bottom: 15px;
   background: #fff;
   padding: 5px 10px;
   
`

const Products = () => {
   const {data , isError, isLoading } =  useFetchProducts()
   if (isLoading) {
       return <Spinner />;
    }
    const products = data?.products
  return (
    <>
    <Heading>All Products</Heading>
    <StyledContainer>
  {products && products.map(product => (
    <Product key={product._id} product={product} />
  ))}
</StyledContainer>
    </>
  )
}

export default Products