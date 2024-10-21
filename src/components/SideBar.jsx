import React from 'react'
import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import MainNav from './MainNav';
const AvatarStyled = styled.div`
   padding :2rem 1rem  ;
   display: flex;
   justify-content: center;
   align-items: start;
`
const Vertical = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1rem;
`
const StyledList = styled.ul`
    width:100%;
    padding:1.5rem;
`
const SideBar = () => {
  return (
<Vertical>
<AvatarStyled />
      <Avatar size={96} icon={<UserOutlined />} />
      <MainNav/>

</Vertical>
  
  )
}

export default SideBar