import { useState } from "react";
import Form from '../../components/Form'
import Input from "../../components/Input";
import Button from "../../components/Button";
import FormRowVertical from "../../components/FormRowVertical";
import styled from "styled-components";
import { useLogin } from "./useLogin";
const MarginTop = styled.form`
 margin-top: 10px;
 width: 100%;
 height:10px;
`;
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const  {login,isLoading} = useLogin();
console.log(login)
  function handleSubmit(e) {

    e.preventDefault();
    // @ts-ignore
    login({email,password})
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
    <MarginTop/>
    <Button  >
          Login
        </Button>
  
     
    </Form>
  );
}

export default LoginForm;
