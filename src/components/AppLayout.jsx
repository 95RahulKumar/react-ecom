import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components';
import Header from './Header';
import SideBar from './SideBar';
import { Layout } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

const StyledAppLayout = styled.div`
 
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  /* overflow: scroll; */
  grid-column-start: 2;
  display: flex;
  flex-direction: column;
`;

const StyledOutlet = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
`;


const StyledSidebar = styled.div`
  position: fixed;
  width: 220px;
  height: 100%;
`
const StyledPage = styled.div`
   display: grid;
   grid-template-columns: 220px auto;
   height: 100vh;
`
const AppLayout = () => {
  return (
    <>
  
   <StyledAppLayout>
      <StyledSidebar>
      <SideBar />
      </StyledSidebar>
      <StyledPage>
      <Main>
      <Header />
      <StyledOutlet>
              <Outlet />

      </StyledOutlet>
      </Main>
      </StyledPage>
     
    </StyledAppLayout>
    </>
  )
}

export default AppLayout