import DeletePic from '../assets/images/icons/trash-icon.svg';
// import EditPic from '../assets/images/icons/edit-icon.svg';
import { ReactComponent as EditPic } from '../assets/images/icons/edit-icon.svg';
import {TColorSet} from "./styles.types";
import styled from "styled-components";
import React, {FC, MouseEventHandler} from "react";
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

const getColor = (disabled : boolean, baseColor : string, disabledColor: string) : string => {
  if (disabled) {
    return disabledColor;
  }
  return baseColor;
};

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
