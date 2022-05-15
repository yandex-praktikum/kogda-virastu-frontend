import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../widgets/forms/register-form';

const Page = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Register = () => (
  <Page>
    <RegisterForm />
  </Page>

);

export default Register;
