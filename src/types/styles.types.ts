import { MouseEventHandler } from 'react';

export type TColorSet = {
  default: string;
  hover: string;
  active: string;
  disabled: string;
  font: string;
};

export type TTheme = {
  [key: string]: string |
  { [key: string]: string | number } |
  { [key: string]: TColorSet } |
  { [key: string]: TFontProperties }
};
export type TThemes = {
  [key:string]: TTheme;
};

export type TFontProperties = {
  family: string;
  size: number;
  height: number;
  weight: number;
};

export type TButtonStyle = {
  defaultColor: string;
  hoverColor: string;
  activeColor: string;
  disabledColor: string;
  fontColor: string;
  fontProperties: TFontProperties;
};

export type TButtonTextStyle = {
  paddingLeft: number;
};

export type TButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};
