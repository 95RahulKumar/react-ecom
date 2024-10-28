import React from 'react'
import LoginLayout from '../features/authentication/LoginLayout'
import {Switch,Card} from 'antd';
import styled from 'styled-components';
import Heading from '../components/Heading'
import { useState } from "react";
import ResgisterUser from '../components/ResgisterUser';

const LoginWrapper = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 37rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const Toggler = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap:16px;
margin:10px;
color: green;
`;

const Login = () => {
  const [isRegister, setisRegister] = useState(false)
  const onChange = (checked) => {
    setisRegister(checked)
  };
  return (
    <LoginWrapper> 
        <Card >
   <Heading as="h4" style={{marginBottom:'25px',textAlign:'center',color:'#000'
   }}>{`${isRegister ? 'Register Here': 'Welcome Back'}`}</Heading>
     {isRegister == false && <LoginLayout/>}
     {isRegister == true && <ResgisterUser/>}
     <Toggler>
    <p> {`${isRegister ? 'Already have account Login here ?': ' Don`t have account register here ?'}`} </p>
    <Switch  onChange={onChange} />
    </Toggler>
  </Card>
    </LoginWrapper>
  )
}

export default Login