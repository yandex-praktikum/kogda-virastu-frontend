import React, { FC } from 'react';
import styled, { useTheme } from 'styled-components';
import {
  TButtonProps,
  TAvatarButtonProps,
} from '../types/styles.types';

import { EditIcon, AvatarIcon, DeleteIcon } from './icons';
import { getColor, setColor } from '../services/helpers';
import useMouseEvents from '../services/hooks/use-mouse-events';

export const iconDistance = 8;

type TBasicButtonProps = {
  colorScheme: string;
  disabled?: boolean;
};

const BasicNormalButton = styled.button<TBasicButtonProps>`
  padding: 8px 16px;
  border-radius: 4px;
  border-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  font-family: ${({ theme: { buttonText: { family } } }) => family};
  font-size: ${({ theme: { buttonText: { size } } }) => size} px;
  font-weight: ${({ theme: { buttonText: { weight } } }) => weight};
  line-height: ${({ theme: { buttonText: { height } } }) => height} px;
  background-color: ${({ colorScheme, theme: { button }, disabled }) => getColor(disabled, button[colorScheme].default, button[colorScheme].disabled)};
  color: ${({ colorScheme, theme: { button } }) => button[colorScheme].font};

  &:hover {
    background-color: ${({ colorScheme, theme: { button }, disabled }) => getColor(disabled, button[colorScheme].hover, button[colorScheme].disabled)};
    }
  &:active {
    background-color: ${({ colorScheme, theme: { button }, disabled }) => getColor(disabled, button[colorScheme].active, button[colorScheme].disabled)};
    }
  &:focus {
    background-color: ${({ colorScheme, theme: { button }, disabled }) => getColor(disabled, button[colorScheme].active, button[colorScheme].disabled)};
    }
  `;

const BasicInvertedButton = styled.button<TBasicButtonProps>`
  padding: 8px 16px;
  border-radius: 4px;
  border-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  font-family: ${({ theme: { buttonText: { family } } }) => family};
  font-size: ${({ theme: { buttonText: { size } } }) => size} px;
  font-weight: ${({ theme: { buttonText: { weight } } }) => weight};
  line-height: ${({ theme: { buttonText: { height } } }) => height} px;
  color: ${({ colorScheme, theme: { button }, disabled }) => getColor(disabled, button[colorScheme].default, button[colorScheme].disabled)};
  background-color: ${({ colorScheme, theme: { button } }) => button[colorScheme].font};

  &:hover {
    color: ${({ colorScheme, theme: { button }, disabled }) => getColor(disabled, button[colorScheme].hover, button[colorScheme].disabled)};
    }
  &:active {
    color: ${({ colorScheme, theme: { button }, disabled }) => getColor(disabled, button[colorScheme].active, button[colorScheme].disabled)};
    }
  &:focus {
    color: ${({ colorScheme, theme: { button }, disabled }) => getColor(disabled, button[colorScheme].active, button[colorScheme].disabled)};
    }
`;

export const EditPostButton : FC<TButtonProps> = ({ onClick, disabled = false }) => {
  const theme = useTheme();
  return (
    <BasicNormalButton
      colorScheme='blue'
      disabled={disabled}
      onClick={onClick}>
      <EditIcon
        color={theme.button.blue.font}
        distance={iconDistance} />
      Редактировать запись
    </BasicNormalButton>
  );
};
export const DeletePostButton : FC<TButtonProps> = ({ onClick, disabled = false }) => {
  const theme = useTheme();
  const {
    status: {
      isActive,
      isHovered,
      isFocused,
    },
    handlers: {
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      onMouseDown,
      onMouseUp,
    },
  } = useMouseEvents({});

  return (
    <BasicInvertedButton
      colorScheme='red'
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}>
      <DeleteIcon
        color={theme.button.red[setColor(isHovered, isFocused, isActive, !!disabled)]}
        distance={iconDistance} />
      Редактировать запись
    </BasicInvertedButton>
  );
};
export const OpenMenuButton: FC<TAvatarButtonProps> = ({
  onClick,
  disabled = false,
  name,
  image,
}) => {
  const theme = useTheme();
  const {
    status: {
      isActive,
      isHovered,
      isFocused,
    },
    handlers: {
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      onMouseDown,
      onMouseUp,
    },
  } = useMouseEvents({});
  return (
    <BasicInvertedButton
      colorScheme='blue'
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}>
      <AvatarIcon
        size='small'
        name={name}
        image={image}
        distance={iconDistance}
        color={theme.button.blue[setColor(isHovered, isFocused, isActive, !!disabled)]} />
      {name}
    </BasicInvertedButton>
  );
};

/*

export const SavePostButton : FC<TButtonProps> = ({ onClick, disabled = false }) => (
  <BasicNormalButton colorScheme='blue' disabled={disabled} onClick={onClick}>
    Сохранить запись
  </BasicNormalButton>
);

export const ConfirmDeleteButton : FC<TButtonProps> = ({ onClick, disabled = false }) => (
  <BasicNormalButton colorScheme='red' disabled={disabled} onClick={onClick}>
    Удалить запись
  </BasicNormalButton>
);

export const FollowButton : FC<TButtonProps> = ({ onClick, disabled = false }) => (
  <BasicNormalButton colorScheme='red' disabled={disabled} onClick={onClick}>
    <PlusIcon />
    <ButtonText paddingLeft={iconDistance}>Подписаться</ButtonText>
  </BasicNormalButton>
);

export const UnfollowButton : FC<TButtonProps> = ({ onClick, disabled = false }) => (
  <BasicNormalButton colorScheme='red' disabled={disabled} onClick={onClick}>
    <MinusIcon />
    <ButtonText paddingLeft={iconDistance}>Отписаться</ButtonText>
  </BasicNormalButton>
);

export const PostCommentButton : FC<TButtonProps> = ({ onClick, disabled = false }) => (
  <BasicNormalButton colorScheme='red' disabled={disabled} onClick={onClick}>
    Отправить комментарий
  </BasicNormalButton>
);

export const registerButton : FC<TButtonProps> = ({ onClick, disabled = false }) => (
  <BasicNormalButton colorScheme='red' disabled={disabled} onClick={onClick}>
    Зарегистрироваться
  </BasicNormalButton>
);

export const loginButton : FC<TButtonProps> = ({ onClick, disabled = false }) => (
  <BasicNormalButton colorScheme='red' disabled={disabled} onClick={onClick}>
    Войти
  </BasicNormalButton>
);

export const UpdateProfileButton : FC<TButtonProps> = ({ onClick, disabled = false }) => (
  <BasicNormalButton colorScheme='red' disabled={disabled} onClick={onClick}>
    Обновить настройки
  </BasicNormalButton>
);
export const PublishPostButton : FC<TButtonProps> = ({ onClick, disabled = false }) => (
  <BasicNormalButton colorScheme='red' disabled={disabled} onClick={onClick}>
    Опубликовать запись
  </BasicNormalButton>
); */

