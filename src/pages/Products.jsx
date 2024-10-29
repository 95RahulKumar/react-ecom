import styled from 'styled-components'
import Product from '../components/Product'
import Spinner from '../components/Spinner'
import { useFetchProducts } from '../features/products/useProducts'
import React from 'react'
import Heading from '../components/Heading'
import Loader from '../components/Loader'

const StyledContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
    gap:1rem;
`

const Products = () => {
   const {data , isError, isLoading } =  useFetchProducts()
   
   if (isLoading) {
       return<Loader content={'Loading....'}/>;
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