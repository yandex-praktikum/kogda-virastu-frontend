import React, {
  ChangeEventHandler, FC, FormEventHandler, useEffect, MouseEventHandler,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from '../../services/hooks';

import {
  setUsernameProfile,
  setEmailProfile,
  setBioProfile,
  setImageProfile,
  setNicknameProfile,
  setFormProfile,
  setPasswordProfile,
  setConfirmPasswordProfile,
  setInviteCode,
  setTagsFollow,
} from '../../store';

import { patchCurrentUserThunk, getInviteThunk } from '../../thunks';

import {
  ButtonContainer,
  Form,
  FormContainer,
  FormTitle,
  InputFieldset,
  TagsContainer,
  TagsTitle,
  InviteButtonContainer,
  InviteCodeText,
  FormLoginLink,
  InviteCodeLink,
} from './forms-styles';

import {
  FieldEmail,
  FieldLogin,
  FieldNick,
  FieldPassword,
  FieldProfileImage,
  UpdateProfileButton,
  FieldAboutUser,
  GenerateCodeButton,
  FieldConfirmPasswordProfile,
} from '../../ui-lib';
import Tag from '../tag';
import deleteTagFollowThunk from '../../thunks/delete-tag-follow-thunk';

const SettingsForm: FC = () => {
  const {
    bio, email, image, username, password, nickname, confirmPassword,
  } = useSelector((state) => state.forms.profile);
  const profile = useSelector((state) => state.profile);
  const { isSettingsPatching, isSettingsUpdateSucceeded } = useSelector((state) => state.api);
  const { tagsFollow } = useSelector((state) => state.view);
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setFormProfile({
      username: profile.username || '',
      email: profile.email || '',
      nickname: profile.nickname || '',
      bio: profile.bio || '',
      image: profile.image || '',
    }));
  }, [dispatch, profile]);

  useEffect(() => {
    if (isSettingsUpdateSucceeded) {
      navigate('/');
    }
    //  return () => { dispatch(settingsResetUpdateSucceeded()); };
  }, [dispatch, isSettingsUpdateSucceeded, navigate]);

  const submitForm: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    dispatch(patchCurrentUserThunk());
  };

  const changeImage: ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setImageProfile(evt.target.value));
  };

  const changeUsername: ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setUsernameProfile(evt.target.value));
  };

  const changeBioProfile: ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    dispatch(setBioProfile(evt.target.value));
  };

  const changeEmail: ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setEmailProfile(evt.target.value));
  };
  const changeNickname: ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setNicknameProfile(evt.target.value));
  };
  const changePassword: ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setPasswordProfile(evt.target.value));
  };
  const changeConfirmPassword: ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setConfirmPasswordProfile(evt.target.value));
  };
  const createInviteCode: MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    dispatch(getInviteThunk());
  };
  const deactivateTag = (e: React.MouseEvent, tag: string) => {
    e.stopPropagation();
    dispatch(deleteTagFollowThunk(tag));
    dispatch(setTagsFollow(tagsFollow!.filter((el) => el !== tag)));
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
          <FieldNick value={nickname ?? ''} onChange={changeNickname} />
          <FieldAboutUser
            onChange={changeBioProfile}
            value={bio ?? ''}
            minHeight={theme.text18.height * 5} />
          <FieldEmail value={email ?? ''} onChange={changeEmail} />
          <FieldPassword value={password ?? ''} onChange={changePassword} />
          <FieldConfirmPasswordProfile value={confirmPassword ?? ''} onChange={changeConfirmPassword} />
        </InputFieldset>
        <InviteButtonContainer>
          <GenerateCodeButton disabled={false} onClick={createInviteCode} />
          <InviteCodeText>{profile.friendInvite}</InviteCodeText>
          {profile.friendInvite && <InviteCodeLink to={{ pathname: `/registration?=${profile.friendInvite || ''}` }}>{`/registration?=${profile.friendInvite || ''}`}</InviteCodeLink>}
        </InviteButtonContainer>
        <TagsTitle>
          Теги
        </TagsTitle>
        <TagsContainer>
          {
            tagsFollow?.map((tag) => (
              <Tag
                key={tag}
                tag={tag}
                isActive={false}
                deactivateTag={(e) => deactivateTag(e, tag)}
                isShowIcon={!false} />
            ))
          }
        </TagsContainer>
        <ButtonContainer>
          <UpdateProfileButton disabled={isSettingsPatching} />
        </ButtonContainer>
      </Form>
    </FormContainer>

  );
};

export default SettingsForm;
