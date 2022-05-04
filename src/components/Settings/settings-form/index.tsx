import React, { ChangeEvent, FC, useEffect } from 'react';
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

  const profile = useSelector((state) => state.profile);

  const { isSettingsPatching } = useSelector((state) => state.api);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setImageProfile(profile.image ?? ''));
    dispatch(setUsernameProfile(profile.username ?? ''));
    dispatch(setBioProfile(profile.bio ?? ''));
    dispatch(setEmailProfile(profile.image ?? ''));
  }, [dispatch, profile.bio, profile.image, profile.username]);

  const submitForm = (ev: React.FormEvent) => {
    ev.preventDefault();
    dispatch(patchCurrentUserThunk());
  };

  const changeImage = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setImageProfile(e.target.value));
  };

  const changeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsernameProfile(e.target.value));
  };

  const changeBioProfile = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setBioProfile(e.target.value));
  };

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmailProfile(e.target.value));
  };

  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPasswordProfile(e.target.value));
  };

  return (
    <form onSubmit={submitForm}>
      <fieldset>
        <fieldset className='form-group'>
          <input
            className='form-control'
            type='text'
            placeholder='URL of profile picture'
            value={image ?? ''}
            onChange={changeImage} />
        </fieldset>

        <fieldset className='form-group'>
          <input
            className='form-control form-control-lg'
            type='text'
            placeholder='Username'
            value={username ?? ''}
            onChange={changeUsername} />
        </fieldset>

        <fieldset className='form-group'>
          <textarea
            className='form-control form-control-lg'
            rows={8}
            placeholder='Short bio about you'
            value={bio ?? ''}
            onChange={changeBioProfile} />
        </fieldset>

        <fieldset className='form-group'>
          <input
            className='form-control form-control-lg'
            type='email'
            placeholder='Email'
            value={email ?? ''}
            onChange={changeEmail} />
        </fieldset>

        <fieldset className='form-group'>
          <input
            className='form-control form-control-lg'
            type='password'
            placeholder='New Password'
            value={password ?? ''}
            onChange={changePassword} />
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
