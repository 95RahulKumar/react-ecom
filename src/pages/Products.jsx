import styled from 'styled-components'
import Product from '../components/Product'
import Spinner from '../components/Spinner'
import { useFetchProducts } from '../features/products/useProducts'
import React, { useState } from 'react'
import Heading from '../components/Heading'
import Loader from '../components/Loader'
import { AutoComplete } from 'antd'

const StyledContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
    gap:1rem;
`

const Products = () => {

   const [options, setOptions] = useState("");
   const {data, isError, isLoading, refetch } =  useFetchProducts(options)

   const optionsData = data?.products?.map((item)=>({...item,lable:item?.name,value:item?.name}))

   if (isLoading) {
       return<Loader content={'Loading....'}/>;
    }

    const onSelect = (data) => {
      refetch()
      setOptions(data)
    };
    
   const handleClear=()=>{
    
       console.log('on clear...')
    }
    const products = data?.products
  return (
    <>
    <Heading>All Products</Heading>
    <AutoComplete
        options={optionsData}
        style={{ width: 200,marginBottom:'15px' }}
        onSelect={onSelect}
         filterOption={true}
         onClear={()=>handleClear}
        placeholder="Search Here.."
      />
    <StyledContainer>
  {products && products.map(product => (
    <Product key={product._id} product={product} />
  ))}
</StyledContainer>
    </>
  )
}

export default Products