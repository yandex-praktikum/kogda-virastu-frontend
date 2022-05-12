import RegisterForm from "../widgets/forms/RegisterForm";
import styled from 'styled-components';

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