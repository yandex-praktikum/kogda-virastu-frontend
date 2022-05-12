import { Link, useNavigate } from 'react-router-dom';
import React, {
  useEffect,
  ChangeEvent,
  SyntheticEvent,
  FC,
} from 'react';
import { useSelector, useDispatch } from '../../services/hooks';
import { changeEmailLogin, changePasswordLogin } from '../../store';
import { loginUserThunk } from '../../thunks';
import { ButtonContainer, Form, FormContainer, FormLoginLink, FormTitle, InputFieldset } from './forms-styles';
import { FormattedMessage } from 'react-intl';
import { useTheme } from 'styled-components';
import { FieldEmail, FieldPassword } from '../../ui-lib';
import { LoginButton } from '../../ui-lib';

const LoginForm: FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.system);
  const { email, password } = useSelector((state) => state.forms.login);
  const { isUserLoggingIn } = useSelector((state) => state.api)
  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeEmailLogin(e.target.value));
  };
  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changePasswordLogin(e.target.value));
  };
  const submitForm = (e: SyntheticEvent<Element>) => {
    e.preventDefault();
    dispatch(loginUserThunk());

    //  props.onSubmit(email, password);
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return (
    <FormContainer>
      <FormTitle>
        <FormattedMessage id='userLogin' />
      </FormTitle>
      <FormLoginLink to='/register' >
        <FormattedMessage id='register' />
      </FormLoginLink>
      <Form onSubmit={submitForm} >
        <InputFieldset rowGap={16}>
          <FieldEmail value={email ?? ''} onChange={changeEmail} />
          <FieldPassword value={password ?? ''} onChange={changePassword} />
        </InputFieldset>
        <ButtonContainer>
          <LoginButton disabled={isUserLoggingIn} />
        </ButtonContainer>
      </Form>
    </FormContainer>
  );
};
export default LoginForm;
