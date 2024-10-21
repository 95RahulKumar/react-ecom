import React from 'react'
import styled from 'styled-components';
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from './ButtonIcon';
import Logout from './Logout';
import { Badge } from 'antd';
import { useSelector } from 'react-redux';
import { HiOutlineShoppingCart } from "react-icons/hi";


const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

const Header = () => {
    const navigate = useNavigate();
    // @ts-ignore
    const cart = useSelector((state) => state.cart);
    console.log('Cart:', cart);
   const isDarkMode = false
  return (
    <StyledHeader>
     <StyledHeaderMenu>
     <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      <li>
    <Badge count={cart.length ?? 0}>
    <ButtonIcon onClick={() => navigate("/cart")}>
    <HiOutlineShoppingCart />
    </ButtonIcon>
    </Badge>
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  </StyledHeader>
  )
}

export default Header