import styled from 'styled-components';
import React, { useState, FC } from 'react';

const InputStyle = styled.input<{ error: boolean | undefined }>`
     box-sizing: border-box;
     width:540px;
     height: 40px;
     padding: 8px 16px 8px 16px;
     position: relative;
     font-size: ${({ theme: { text18: { size } } }) => `${size}px`} ;
     font-family: ${({ theme: { text18: { family } } }) => family};
     line-height: ${({ theme: { text18: { height } } }) => `${height}px`} ;
     font-weight: ${({ theme: { text18: { weight } } }) => weight};
     outline:none;
     color: ${({ theme: { secondaryText } }) => secondaryText};
     border: 1px solid ${({ error }) => (error ? ((props) => props.theme.inputField.errorColor) : ((props) => props.theme.inputField.defaultBorder))};
     @media screen and (max-width:320px) {
        font-size: 16px;
        max-width:280px;
     }
     :hover {

      border: 1px solid ${({ error }) => (error ? ((props) => props.theme.inputField.errorColor) : ((props) => props.theme.inputField.borderHover))};

     }
     :disabled {
       background-color: ${((props) => props.theme.inputField.disabledInput)};
     }
     :active {

      border: 1px solid ${({ error }) => (error ? ((props) => props.theme.inputField.errorColor) : ((props) => props.theme.inputField.borderActive))};

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
const LabelStyle = styled.label`
 margin: 0;
 color:${((props) => props.theme.labelColor)};
 font-size: ${({ theme: { labelInput: { size } } }) => `${size}px`} ;
font-family: ${({ theme: { labelInput: { family } } }) => family};
line-height: ${({ theme: { labelInput: { height } } }) => `${height}px`} ;
font-weight: ${({ theme: { labelInput: { weight } } }) => weight};
 `;

const ContainerIcon = styled.div<{ isPointerIcon: boolean | undefined }>`
     position: absolute;
     top:32px;
     right:16px;
     cursor:${({ isPointerIcon }) => (isPointerIcon ? 'pointer': 'default')}`;
     

type TInputInterface = {
  type: 'text' | 'email' | 'password' | 'url';
  placeholder?: string;
  value: string;
  name?: string;
  error?: boolean;
  icon?: React.ReactNode;
  errorText?: string;
  disabled?: boolean;
  labelText?: string;
  isPointerIcon?:boolean;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onIconClick?(e: React.MouseEvent<HTMLDivElement>): void;
  onBlur?(e?: React.FocusEvent<HTMLInputElement>): void;
  onFocus?(e?: React.FocusEvent<HTMLInputElement>): void;
};
type TerrorText = {
  erorText?: string;
  isPointerIcon?: boolean;

};
const ErorTextStyle = styled.span`
margin: 0;
color: ${((props) => props.theme.inputField.errorColor)};
font-size: ${({ theme: { labelInput: { size } } }) => `${size}px`} ;
font-family: ${({ theme: { labelInput: { family } } }) => family};
line-height: ${({ theme: { labelInput: { height } } }) => `${height}px`} ;
font-weight: ${({ theme: { labelInput: { weight } } }) => weight};
`;

const ErorText = ({ erorText}: TerrorText) => (
  <ErorTextStyle>{erorText}</ErorTextStyle>
);

export const InputField = ({

  type,
  placeholder,
  value,
  name,
  error,
  icon = null,
  errorText,
  onChange,
  onIconClick,
  onBlur,
  onFocus,
  disabled,
  labelText,
  isPointerIcon


}: TInputInterface) => (
  <ContainerInput>
    <LabelStyle>
      {labelText}
      <InputStyle
        disabled={disabled}
        error={error}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur} />
    </LabelStyle>
    <ContainerIcon onClick={onIconClick} isPointerIcon={isPointerIcon} >
      {icon}
    </ContainerIcon>
    {error && <ErorText erorText={errorText}/>}
  </ContainerInput>
);
export default InputField;
