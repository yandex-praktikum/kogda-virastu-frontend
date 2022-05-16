import React, { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import {
  OpenMenuButton, MenuSettingsButton, MenuNewPostButton, MenuLogoutButton,
} from '../ui-lib';
import { useDispatch, useSelector } from '../services/hooks';
import { closeMenu, onLogout } from '../store';

const HeaderMenuWrapper = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  gap: 1px;
  width: 173px;  
  background: ${({ theme: { bgPrimary } }) => bgPrimary};

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08), 0 0 4px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

const HeaderMenuWidget : FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nickname, username, image } = useSelector((store) => store.profile);
  const onCloseClick : MouseEventHandler<HTMLButtonElement> = () => dispatch(closeMenu());
  const onUpdateProfileClick : MouseEventHandler<HTMLButtonElement> = () => alert('Здесь будет редирект на редактирование профиля!');
  const onNewPostClick : MouseEventHandler<HTMLButtonElement> = () => alert('Здесь будет редирект на создание новой статьи!');
  const onLogoutClick : MouseEventHandler<HTMLButtonElement> = () => dispatch(onLogout());
  return (
    <HeaderMenuWrapper>
      <OpenMenuButton onClick={onCloseClick} name={(nickname ?? username) || ''} image={image || ''} />
      <MenuNewPostButton onClick={onNewPostClick} />
      <MenuSettingsButton onClick={onUpdateProfileClick} />
      <MenuLogoutButton onClick={onLogoutClick} />
    </HeaderMenuWrapper>
  );
};

export default HeaderMenuWidget;
