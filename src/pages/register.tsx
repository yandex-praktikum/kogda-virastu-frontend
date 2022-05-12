import React from 'react';
import styled from 'styled-components';
import RegisterForm from "../widgets/forms/RegisterForm";

const Page = styled.section`
  width: 100%;
`;

const Register = () => {

  return (
    <Page>
      <RegisterForm />
    </Page>
    
  )
}

export default Register;