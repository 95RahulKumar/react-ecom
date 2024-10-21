import React from 'react'
import LoginLayout from '../features/authentication/LoginLayout'
import Heading from '../components/Heading'
import styled from 'styled-components';

const LoginWrapper = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 30rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;
const Login = () => {
  return (
    <LoginWrapper>
      <Heading as="h4">Welcome Back</Heading>
      <LoginLayout/>
    </LoginWrapper>
  )
}

export default Login