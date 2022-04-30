import React, { FC } from 'react';
import { useDispatch, useSelector } from '../../../services/hooks';
import {
  setUsernameProfile,
  setEmailProfile,
  setBioProfile,
  setImageProfile,
} from '../../../store';
import { setPasswordProfile } from '../../../store/profileFormSubSlice';
import { patchCurrentUserThunk } from '../../../thunks';

const SettingsForm: FC<{ [key: string]: any }> = () => {
  const {
    bio, email, image, username, password,
  } = useSelector((state) => state.forms.profile);
  const { isSettingsPatching } = useSelector((state) => state.api);
  const dispatch = useDispatch();

  const submitForm = (ev: React.FormEvent) => {
    ev.preventDefault();
    dispatch(patchCurrentUserThunk());
  };

  return (
    <form onSubmit={submitForm}>
      <fieldset>
        <fieldset className='form-group'>
          <input
            className='form-control'
            type='text'
            placeholder='URL of profile picture'
            value={image || ''}
            onChange={(e) => dispatch(setImageProfile(e.target.value))} />
        </fieldset>

        <fieldset className='form-group'>
          <input
            className='form-control form-control-lg'
            type='text'
            placeholder='Username'
            value={username || ''}
            onChange={(e) => dispatch(setUsernameProfile(e.target.value))} />
        </fieldset>

        <fieldset className='form-group'>
          <textarea
            className='form-control form-control-lg'
            rows={8}
            placeholder='Short bio about you'
            value={bio || ''}
            onChange={(e) => dispatch(setBioProfile(e.target.value))} />
        </fieldset>

        <fieldset className='form-group'>
          <input
            className='form-control form-control-lg'
            type='email'
            placeholder='Email'
            value={email || ''}
            onChange={(e) => dispatch(setEmailProfile(e.target.value))} />
        </fieldset>

        <fieldset className='form-group'>
          <input
            className='form-control form-control-lg'
            type='password'
            placeholder='New Password'
            value={[password || '']}
            onChange={(e) => dispatch(setPasswordProfile(e.target.value))} />
        </fieldset>

        <button
          className='btn btn-lg btn-primary pull-xs-right'
          type='submit'
          disabled={isSettingsPatching}>
          Update Settings
        </button>
      </fieldset>
    </form>
  );
};

export default SettingsForm;
