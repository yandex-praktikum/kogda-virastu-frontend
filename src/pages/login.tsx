import React from 'react';
import styled from 'styled-components';
import LoginForm from '../widgets/forms/login-form';

const Page = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 40px 0 40px 0;
`;

const Login = () => (
  <Page>
    <LoginForm />
  </Page>
);

export default Login;
