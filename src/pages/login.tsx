import LoginForm from "../widgets/forms/LoginForm";
import styled from "styled-components";

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