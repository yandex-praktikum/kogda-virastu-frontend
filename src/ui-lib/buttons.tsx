import React, { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';
import {
  TFontProperties, TButtonStyle, TButtonTextStyle, TColorSet,
} from './styles.types';
import { PlusIcon, BasketIcon, MinusIcon } from './index';
import DeletePic from '../assets/images/icons/trash-icon.svg';
// import EditPic from '../assets/images/icons/edit-icon.svg';
import { ReactComponent as EditPic } from '../assets/images/icons/edit-icon.svg';

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
const whiteIconStyle: TColorSet = {
  defaultColor: '#FFFFFF',
  hoverColor: '#FFFFFF',
  activeColor: '#FFFFFF',
  disabledColor: '#CCCCCC',
};

const redIconStyle: TColorSet = {
  defaultColor: '#FF413B',
  hoverColor: '#E53B35',
  activeColor: '#CC342F',
  disabledColor: '#CCCCCC',
};

const blueIconStyle: TColorSet = {
  defaultColor: '#008AFF',
  hoverColor: '#007CE5',
  activeColor: '#006ECC',
  disabledColor: '#CCCCCC',
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
const getColor = (disabled : boolean, baseColor : string, disabledColor: string) : string => {
  if (disabled) {
    return disabledColor;
  }
  return baseColor;
};
interface IButtonStylesInterface {
  buttonStyle: TButtonStyle;
}

type TBasicIconProps = {
  defaultColor: string;
  hoverColor: string;
  activeColor: string;
};
const basicIconStyles = `
  width: 24px;
  height: 24px;
  display: block;
`;

const BasicEditIcon = styled<TBasicIconProps>(EditPic)`
  width: 24px;
  height: 24px;
  display: block;
  & > svg > path {
    stroke: ${({ defaultColor }) => defaultColor};
    }
  &:hover > svg > path {
    stroke: ${({ hoverColor }) => hoverColor};
    }
  &:focus > svg > path {
    stroke: ${({ defaultColor }) => defaultColor};
    }
  &:active > svg > path {
    stroke: ${({ activeColor }) => activeColor};
    }
`;

type TIconProps = {
  onClick?: MouseEventHandler<HTMLImageElement>;
  disabled: boolean;
  colors: TColorSet;
};
/* const DeleteIcon : FC<TIconProps> = ({ onClick = undefined, disabled, colors }) => {
  const {
    defaultColor,
    activeColor,
    hoverColor,
    disabledColor,
  } = colors;
  const defColor = (disabledState : boolean) : string => {
    if (disabledState) {
      return disabledColor;
    }
    return defaultColor;
  };
  const hovColor = (disabledState : boolean) : string => {
    if (disabledState) {
      return disabledColor;
    }
    return hoverColor;
  };
  const actColor = (disabledState : boolean) : string => {
    if (disabledState) {
      return disabledColor;
    }
    return activeColor;
  };
  return (
    <BasicIcon
      src={DeletePic as string}
      alt='Иконка удаления'
      onClick={onClick}
      defaultColor={defColor(disabled)}
      activeColor={actColor(disabled)}
      hoverColor={hovColor(disabled)} />
  );
};
*/
const EditIcon : FC<TIconProps> = ({ onClick = undefined, disabled = false, colors }) => {
  const {
    defaultColor,
    hoverColor,
    activeColor,
    disabledColor,
  } = colors;
  return (
    <BasicEditIcon
      defaultColor={getColor(disabled, defaultColor, disabledColor)}
      hoverColor={getColor(disabled, hoverColor, disabledColor)}
      activeColor={getColor(disabled, activeColor, disabledColor)} />
  );
};

/* const EditIconRaw = styled<TRawIconProps>(EditPic)`
  ${basicIconStyles}
  & > path {
    stroke: ${({ colors: { defaultColor } }) => defaultColor};
    }
  &:hover > path {
    stroke: ${({ colors: { hoverColor } }) => hoverColor};
    }
  &:focus > path {
    stroke: ${({ colors: { defaultColor } }) => defaultColor};
    }
  &:active > path {
    stroke: ${({ colors: { activeColor } }) => activeColor};
    }
`; */

const BasicNormalButton = styled.button<IButtonStylesInterface>`
  padding: 8px 16px;
  border-radius: 4px;
  font-family: ${({ buttonStyle: { fontProperties: { family } } }) => family};
  font-size: ${({ buttonStyle: { fontProperties: { size } } }) => size} px;
  font-weight: ${({ buttonStyle: { fontProperties: { weight } } }) => weight};
  line-height: ${({ buttonStyle: { fontProperties: { height } } }) => height} px;
  background-color: ${({ buttonStyle: { defaultColor } }) => defaultColor};
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
  // padding-left: ${({ paddingLeft = 0 }) => paddingLeft}px;
`;

export const EditPostButton = (onClick: MouseEventHandler<HTMLButtonElement>) => (
  <BasicNormalButton buttonStyle={blueButtonStyles} onClick={onClick}>
    <EditIcon colors={whiteIconStyle} disabled={false} />
    <ButtonText paddingLeft={iconDistance}>Редактировать запись</ButtonText>
  </BasicNormalButton>
);

export const DeletePostButton = (
  onClick: MouseEventHandler<HTMLButtonElement>,
  disabled : false = false,
) => (
  <BasicInvertedButton buttonStyle={redButtonStyles} onClick={onClick}>
    <DeleteIcon disabled={disabled} colors={redButtonStyles} />
    <ButtonText paddingLeft={iconDistance}>Удалить запись</ButtonText>
  </BasicInvertedButton>
);
/*
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
