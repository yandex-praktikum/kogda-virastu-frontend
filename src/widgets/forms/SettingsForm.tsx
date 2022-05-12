import React, { ChangeEvent, FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/hooks';
import {
  setUsernameProfile,
  setEmailProfile,
  setBioProfile,
  setImageProfile,
} from '../../store';
import { settingsResetUpdateSucceeded } from '../../store/apiSlice';
import { setFormProfile, setPasswordProfile } from '../../store/profileFormSubSlice';
import { patchCurrentUserThunk } from '../../thunks';
import { TProfile } from '../../types/types';
import { ButtonContainer, Form, FormContainer, FormTitle, InputFieldset } from './forms-styles';
import { useTheme } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { FieldEmail, FieldLogin, FieldNewPassword, FieldUrl } from '../../ui-lib';
import { UpdateProfileButton } from '../../ui-lib';
import { FieldProfileImage } from '../../ui-lib/inputFields';

const SettingsForm: FC = () => {
  const {
    bio, email, image, username, password,
  } = useSelector((state) => state.forms.profile);

  const profile = useSelector((state) => state.profile);

  const { isSettingsPatching, isSettingsUpdateSucceeded } = useSelector((state) => state.api);

  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setFormProfile(profile as TProfile));
  }, [dispatch, profile]);

  useEffect(() => {
    if (isSettingsUpdateSucceeded) {
      navigate('/');
    }
    return () => { dispatch(settingsResetUpdateSucceeded()); };
  }, [dispatch, isSettingsUpdateSucceeded, navigate]);

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
    <FormContainer>
      <FormTitle>
        <FormattedMessage id='usersettings' />
      </FormTitle>
      <Form onSubmit={submitForm}>
        <InputFieldset rowGap={16}>
          <FieldProfileImage value={image ?? ''} onChange={changeImage} />
          <FieldLogin value={username ?? ''} onChange={changeUsername} />
          <FieldEmail value={email ?? ''} onChange={changeEmail} />
          <FieldNewPassword value={password ?? ''} onChange={changePassword} />
        </InputFieldset>
        <ButtonContainer>
          <UpdateProfileButton disabled={isSettingsPatching} />
        </ButtonContainer>
      </Form>
    </FormContainer>

  );
};

export default SettingsForm;
