import React, {
  ChangeEventHandler, FC, FormEventHandler, useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from '../../services/hooks';
import { TagSetForm } from '../tag';
import { LabelStyle } from '../../ui-lib/inputs/text-fields-styles';
import unsubscribeTagThunk from '../../thunks/unsubscribe-tag-thunk';

import {
  setUsernameProfile,
  setEmailProfile,
  setBioProfile,
  setImageProfile,
  setNicknameProfile,
  setFormProfile,
  setPasswordProfile,
  setSelectedTags,
  setSubscribeTags,
} from '../../store';

import { patchCurrentUserThunk } from '../../thunks';

import {
  ButtonContainer,
  Form,
  FormContainer,
  FormTitle,
  InputFieldset,
} from './forms-styles';

import {
  FieldEmail,
  FieldLogin,
  FieldNick,
  FieldPassword,
  FieldProfileImage,
  UpdateProfileButton,
  FieldAboutUser,
} from '../../ui-lib';

const TagListForm = styled.div`
  max-width: 360px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  padding-bottom: 30px;
`;
const ContainerTags = styled.div`
     width: 100%;
     margin: 0;
     padding: 0;
    position: relative;
     display: flex;
  flex-flow: column nowrap;
  // justify-content: space-between;
  // align-items: center;
     @media screen and (max-width:768px) {
        font-size: 16px;
     }
 `;

const SettingsForm: FC = () => {
  const {
    bio, email, image, username, password, nickname,
  } = useSelector((state) => state.forms.profile);

  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch(setFormProfile({
      username: profile.username || '',
      email: profile.email || '',
      nickname: profile.nickname || '',
      bio: profile.bio || '',
      image: profile.image || '',
    }));
  }, [dispatch, profile]);

  const { tagsFollow } = useSelector((state) => state.view);
  const { selectedTags } = useSelector((state) => state.view);
  const handleClick = (ev:React.MouseEvent, tag: string) => {
    ev.preventDefault();
    if (selectedTags) {
      dispatch(setSelectedTags([...selectedTags, tag]));
    } else {
      dispatch(setSelectedTags([tag]));
    }
  };
  const { isSettingsPatching, isSettingsUpdateSucceeded } = useSelector((state) => state.api);

  useEffect(() => {
    if (isSettingsUpdateSucceeded) {
      navigate('/');
    }
  //  return () => { dispatch(settingsResetUpdateSucceeded()); };
  }, [dispatch, isSettingsUpdateSucceeded, navigate]);

  const submitForm : FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    dispatch(patchCurrentUserThunk());
  };

  const changeImage : ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setImageProfile(evt.target.value));
  };

  const changeUsername : ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setUsernameProfile(evt.target.value));
  };

  const changeBioProfile : ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    dispatch(setBioProfile(evt.target.value));
  };

  const changeEmail : ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setEmailProfile(evt.target.value));
  };
  const changeNickname : ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setNicknameProfile(evt.target.value));
  };
  const changePassword : ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setPasswordProfile(evt.target.value));
  };
  const deleteTag = (e: React.MouseEvent, tag: string) => {
    dispatch(unsubscribeTagThunk(tag));
    dispatch(setSubscribeTags(tagsFollow!.filter((el) => el !== tag)));
  };
  if (tagsFollow) {
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
          </InputFieldset>
          <ContainerTags>
            <LabelStyle>Tеги</LabelStyle>
            <TagListForm>
              {
                tagsFollow.map((tag) => (
                  <TagSetForm
                    key={tag}
                    tag={tag}
                    deleteTag={(e) => deleteTag(e, tag)} />
                ))
              }
            </TagListForm>
          </ContainerTags>
          <ButtonContainer>
            <UpdateProfileButton disabled={isSettingsPatching} />
          </ButtonContainer>
        </Form>
      </FormContainer>
    );
  }
  return (
    <div>Loading Tags...</div>
  );
};

export default SettingsForm;
// labelText={intl.messages.userName as string
