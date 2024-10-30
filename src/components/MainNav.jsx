import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdBookmarkBorder } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { HomeOutlined, ProductOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { IoMdNotificationsOutline } from "react-icons/io";

const StyledNav = styled.nav`
    width:100%;
    padding:1rem;
    margin-top: 1.5rem;
`
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`;

const StyledNavLink = styled(NavLink)`
     &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: #14ff142b;
    padding: 1rem 2.3rem;
    border-radius: 60px;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;
const MainNav = () => {
  return (
    <StyledNav>
    <NavList>
      <li>
        <StyledNavLink to="/dashboard">
        <HomeOutlined />
          <span>Dashboard</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/products">
        <ProductOutlined />
          <span>Products</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/cart">
        <ShoppingCartOutlined />
          <span>Cart</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/orders">
        <MdBookmarkBorder />
          <span>Orders</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/create">
        <IoCreateOutline />
          <span>Create Products</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/notification">
        <IoMdNotificationsOutline />
          <span>Notification</span>
        </StyledNavLink>
      </li>
    </NavList>
  </StyledNav>
  )
}

export default MainNav