import React from "react";
import styled from "styled-components";
import LoginForm from "../widgets/forms/LoginForm";

const Page = styled.section`
  width: 100%;
`;

const Login = () => {

  return (
    <Page>
      <LoginForm />
    </Page>
  )

}

export default Login;