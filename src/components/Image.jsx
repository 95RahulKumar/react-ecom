import React from 'react'

const Image = ({image,width,height}) => {
  return (
   <img style={{objectFit: 'cover'}} src={image} width={width} height={height} alt="product image" />
  )
}

export default Image