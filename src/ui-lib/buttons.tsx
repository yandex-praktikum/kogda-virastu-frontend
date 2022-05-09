import React, { FC, MouseEventHandler } from 'react';
import styled, { ThemeProps } from 'styled-components';
import {
  TTheme, TFontProperties, TButtonStyle, TButtonTextStyle, TColorSet, TButtonProps,
} from '../types/styles.types';
import {
  PlusIcon, BasketIcon, MinusIcon, EditIcon,
} from './index';
import { getColor } from '../services/helpers';

const buttonFont : TFontProperties = {
  family: 'Alagreya Sans',
  size: 18,
  height: 24,
  weight: 500,
};

const iconDistance = 8;

type TBasicButtonProps = {
//  theme: ThemeProps<TTheme>;
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

const ButtonText = styled.p<TButtonTextStyle>`
  padding: 0 0 0 ${({ paddingLeft = 0 }) => paddingLeft}px;
  margin:0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
`;

export const EditPostButton : FC<TButtonProps> = ({ onClick, disabled = false }) => (
  <BasicNormalButton colorScheme='blue' disabled={disabled} onClick={onClick}>
    <EditIcon />
    <ButtonText paddingLeft={iconDistance}>Редактировать запись</ButtonText>
  </BasicNormalButton>
);

export const DeletePostButton : FC<TButtonProps> = ({ onClick, disabled = false }) => (
  <BasicInvertedButton colorScheme='red' disabled={disabled} onClick={onClick}>
    <BasketIcon />
    <ButtonText paddingLeft={iconDistance}>Удалить запись</ButtonText>
  </BasicInvertedButton>
);

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
);
