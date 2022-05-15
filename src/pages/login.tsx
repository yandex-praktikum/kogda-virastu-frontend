import React from "react";
import styled from "styled-components";
import LoginForm from '../widgets/forms/login-form';

const Page = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Login = () => {

  return (
    <Page>
      <LoginForm />
    </Page>
  )

}

export default Login;