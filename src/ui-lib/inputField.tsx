import styled from 'styled-components';
import React, { useState, FC } from 'react';

const InputStyle = styled.input<{ error: boolean | undefined }>`
     box-sizing: border-box;
     width:540px;
     height: 40px;
     padding: 8px 16px 8px 16px;
     font-size: ${({ theme: { text: { size } } }) => `${size}px`} ;
     font-family: ${({ theme: { text: { family } } }) => family};
     line-height: ${({ theme: { text: { height } } }) => `${height}px`} ;
     font-weight: ${({ theme: { text: { weight } } }) => weight};
     color: ${({ theme: { secondaryText } }) => secondaryText};
     border: 1px solid ${({ error }) => (error ? '#FF1E1E' : ((props) => props.theme.divederColor))};
     @media screen and (max-width:320px) {
        font-size: 16px;
        max-width:280px;
     }
 `;
const ContainerInput = styled.div`
     width:540px;
     height: 40px;
     margin: 0;
     padding: 0;
     position: relative;
     @media screen and (max-width:320px) {
        font-size: 16px;
        max-width:280px;
     }
 `;

const ContainerIcon = styled.div`
     position: absolute;
     top: 6px;
     right:16px;
 `;
type TInputInterface = {
  type?: 'text' | 'email' | 'password' | 'url';
  placeholder?: string ;
  value: string;
  name?: string;
  error?: boolean;
  icon?: any;
  errorText?: string;
  color?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onIconClick?(e: React.MouseEvent<HTMLDivElement>): void;
  onBlur?(e?: React.FocusEvent<HTMLInputElement>): void;
  onFocus?(e?: React.FocusEvent<HTMLInputElement>): void;
};
type TerrorText = {
  erorText?: string
};
const ErorTextStyle = styled.span`
color:#FF1E1E;
font-size: ${({ theme: { fifthLevelHeading: { size } } }) => `${size}px`} ;
font-family: ${({ theme: { fifthLevelHeading: { family } } }) => family};
line-height: ${({ theme: { fifthLevelHeading: { height } } }) => `${height}px`} ;
font-weight: ${({ theme: { fifthLevelHeading: { weight } } }) => weight};
`;

const ErorText = ({ erorText }: TerrorText) => (
  <ErorTextStyle>{erorText}</ErorTextStyle>
);

export const InputField = ({
  type, placeholder, value, name, error, icon, errorText, onChange, onIconClick, onBlur, onFocus,
}: TInputInterface) => (
  <ContainerInput>
    <InputStyle
      error={error}
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur} />
    <ContainerIcon onClick={onIconClick}>
      {icon}
    </ContainerIcon>
    {error && <ErorText erorText={errorText} />}
  </ContainerInput>
);
export default InputField;
