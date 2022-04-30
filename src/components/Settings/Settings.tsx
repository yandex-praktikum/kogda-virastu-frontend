import React, { FC } from 'react';
import { useDispatch } from '../../services/hooks';
import { onLogout } from '../../store';
import { logoutUser } from '../../store/profileSlice';
import ListErrors from '../ListErrors';
import SettingsForm from './settings-form';

const Settings: FC = () => {
  const dispatch = useDispatch();
  const onClickLogout = () => {
    dispatch(logoutUser());
    dispatch(onLogout());
  };

  return (
    <div className='settings-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>Your Settings</h1>
            <ListErrors />
            <SettingsForm />
            <hr />
            <button
              type='button'
              className='btn btn-outline-danger'
              onClick={onClickLogout}>
              Or click here to logout.
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
