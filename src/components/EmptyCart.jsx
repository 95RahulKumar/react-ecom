import { Empty } from 'antd';
import React from 'react'
import { FaCartArrowDown } from "react-icons/fa6";
import styled from 'styled-components';


const EpCont = styled.div`
    background:#fff !important;
    display: flex;
    width:100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:1.5rem 1rem;
`

const StyledIcon = styled(FaCartArrowDown)`
    color: #0080004a;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: block;
`
const EmptyCart = ({text}) => {
  return (
    <EpCont> 
        <Empty  description={<p>{text}</p>}/>
    </EpCont>
  )
}

export default EmptyCart