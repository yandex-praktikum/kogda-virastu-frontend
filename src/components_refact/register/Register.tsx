import { Link } from 'react-router-dom';
import React, {
  ChangeEvent, FC, SyntheticEvent, useEffect, useState,
} from 'react';
import { connect } from 'react-redux';
import ListErrors from '../../components/ListErrors';
import agent from '../../agent';
import { UPDATE_FIELD_AUTH, REGISTER, REGISTER_PAGE_UNLOADED } from '../../constants';

const mapStateToProps = (state: any) => ({ ...state.auth });

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: (username: string, email: string, password: string) => {
    const payload = agent.Auth.register(username, email, password);
    dispatch({ type: REGISTER, payload });
  },
  onUnload: () => dispatch({ type: REGISTER_PAGE_UNLOADED }),
});

interface IRegister {
  email: string | undefined;
  password: string | undefined;
  username: string | undefined;
}

interface IRegisterProps {
  onSubmit: Function;
  onUnload: Function;
  errors: {};
  inProgress: boolean;
}

const Register: FC<IRegisterProps> = (props) => {
  const [state, setState] = useState<IRegister>({ email: undefined, password: undefined, username: undefined });

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, email: e.target.value });
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, password: e.target.value });
  };

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, username: e.target.value });
  };

  const submitForm = () => (e: SyntheticEvent) => {
    e.preventDefault();
    props.onSubmit(state.username, state.email, state.password);
  };

  useEffect(() => () => {
    props.onUnload();
  }, []);

  return (
    <div className='auth-page'>
      <div className='container page'>
        <div className='row'>

          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>Sign Up</h1>
            <p className='text-xs-center'>
              <Link to='/login'>
                Have an account?
              </Link>
            </p>

            <ListErrors errors={props.errors} />

            <form onSubmit={submitForm()}>
              <fieldset>

                <fieldset className='form-group'>
                  <input
                    className='form-control form-control-lg'
                    type='text'
                    placeholder='Username'
                    value={state.username}
                    onChange={onChangeUsername} />
                </fieldset>

                <fieldset className='form-group'>
                  <input
                    className='form-control form-control-lg'
                    type='email'
                    placeholder='Email'
                    value={state.email}
                    onChange={onChangeEmail} />
                </fieldset>

                <fieldset className='form-group'>
                  <input
                    className='form-control form-control-lg'
                    type='password'
                    placeholder='Password'
                    value={state.password}
                    onChange={onChangePassword} />
                </fieldset>

                <button
                  className='btn btn-lg btn-primary pull-xs-right'
                  type='submit'
                  disabled={props.inProgress}>
                  Sign up
                </button>

              </fieldset>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
