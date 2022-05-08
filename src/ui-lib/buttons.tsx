import React, { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';
import {
  TFontProperties, TButtonStyle, TButtonTextStyle, TColorSet, TButtonProps,
} from './styles.types';
import {PlusIcon, BasketIcon, MinusIcon, EditIcon} from './index';



const buttonFont : TFontProperties = {
  family: 'Alagreya Sans',
  size: 18,
  height: 24,
  weight: 500,
};

const blueButtonStyles : TButtonStyle = {
  defaultColor: '#008AFF',
  hoverColor: '#007CE5',
  activeColor: '#006ECC',
  disabledColor: '#CCCCCC',
  fontColor: '#FFFFFF',
  fontProperties: buttonFont,
};


const redButtonStyles : TButtonStyle = {
  defaultColor: '#FF413B',
  hoverColor: '#E53B35',
  activeColor: '#CC342F',
  disabledColor: '#CCCCCC',
  fontColor: '#FFFFFF',
  fontProperties: buttonFont,
};

const iconDistance = 8;

interface IButtonStylesInterface {
  buttonStyle: TButtonStyle;
  disabled?: boolean;
}

const BasicNormalButton = styled.button<IButtonStylesInterface>`
  padding: 8px 16px;
  border-radius: 4px;
  font-family: ${({ buttonStyle: { fontProperties: { family } } }) => family};
  font-size: ${({ buttonStyle: { fontProperties: { size } } }) => size} px;
  font-weight: ${({ buttonStyle: { fontProperties: { weight } } }) => weight};
  line-height: ${({ buttonStyle: { fontProperties: { height } } }) => height} px;
  background-color: ${({ buttonStyle: { defaultColor, disabledColor }, disabled }) => defaultColor};
  color: ${({ buttonStyle: { fontColor } }) => fontColor};
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    background-color: ${({ buttonStyle: { hoverColor } }) => hoverColor};
    }
  &:active {
    background-color: ${({ buttonStyle: { activeColor } }) => activeColor};
    }
  &:focus {
    background-color: ${({ buttonStyle: { activeColor } }) => activeColor};
    }
  `;

const BasicInvertedButton = styled.button<IButtonStylesInterface>`
  padding: 8px 16px;
  border: none;
  font-family: ${({ buttonStyle: { fontProperties: { family } } }) => family};
  font-size: ${({ buttonStyle: { fontProperties: { size } } }) => size} px;
  font-weight: ${({ buttonStyle: { fontProperties: { weight } } }) => weight};
  line-height: ${({ buttonStyle: { fontProperties: { height } } }) => height} px;
  background-color: ${({ buttonStyle: { fontColor } }) => fontColor};
  color: ${({ buttonStyle: { defaultColor } }) => defaultColor};
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    color: ${({ buttonStyle: { hoverColor } }) => hoverColor};
    }
  &:active {
    color: ${({ buttonStyle: { activeColor } }) => activeColor};
    }
  &:focus {
    color: ${({ buttonStyle: { activeColor } }) => activeColor};
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

export const EditPostButton : FC<TButtonProps> = (
  onClick, disabled) => (
  <BasicNormalButton buttonStyle={blueButtonStyles} onClick={onClick}>
    <EditIcon />
    <ButtonText paddingLeft={iconDistance}>Редактировать запись</ButtonText>
  </BasicNormalButton>
);

export const DeletePostButton = (
  onClick: MouseEventHandler<HTMLButtonElement>,
) => (
  <BasicInvertedButton buttonStyle={redButtonStyles} onClick={onClick}>
    <BasketIcon  />
    <ButtonText paddingLeft={iconDistance}>Удалить запись</ButtonText>
  </BasicInvertedButton>
);

export const SavePostButton = (onClick: MouseEventHandler<HTMLButtonElement>) => (
  <BasicNormalButton buttonStyle={blueButtonStyles} onClick={onClick}>
    Сохранить запись
  </BasicNormalButton>
);

export const ConfirmDeleteButton = (onClick: MouseEvent<HTMLButtonElement>) => (
  <BasicNormalButton buttonStyle={redButtonStyles}>
    Удалить запись
  </BasicNormalButton>
);

export const FollowButton = (onClick: MouseEvent<HTMLButtonElement>) => (
  <BasicNormalButton
    buttonStyle={blueButtonStyles}>
    <PlusIcon />
    <ButtonText paddingLeft={iconDistance}>Подписаться</ButtonText>
  </BasicNormalButton>
);

export const UnfollowButton = (onClick: MouseEvent<HTMLButtonElement>) => (
  <BasicNormalButton
    buttonStyle={blueButtonStyles}>
    <MinusIcon />
    <ButtonText paddingLeft={iconDistance}>Отписаться</ButtonText>
  </BasicNormalButton>
);

export const PostCommentButton = (onClick: MouseEvent<HTMLButtonElement>) => (
  <BasicNormalButton buttonStyle={blueButtonStyles}>
    Отправить комментарий
  </BasicNormalButton>
);

export const SavePostButton = (onClick: MouseEvent<HTMLButtonElement>) => (
  <BasicNormalButton buttonStyle={blueButtonStyles}>
    Сохранить запись
  </BasicNormalButton>
);

export const SavePostButton = (onClick: MouseEvent<HTMLButtonElement>) => (
  <BasicNormalButton buttonStyle={blueButtonStyles}>
    Сохранить запись
  </BasicNormalButton>
);

export const SavePostButton = (onClick: MouseEvent<HTMLButtonElement>) => (
  <BasicNormalButton buttonStyle={blueButtonStyles}>
    Сохранить запись
  </BasicNormalButton>
);
export const SavePostButton = (onClick: MouseEvent<HTMLButtonElement>) => (
  <BasicNormalButton buttonStyle={blueButtonStyles}>
    Сохранить запись
  </BasicNormalButton>
);
*/
