import styled from 'styled-components';
import React, { useState, FC } from 'react';
import { TextFieldStyle, LabelStyle, ErorText } from './textFields-styles';

const InputStyle = styled.input<{ error: boolean | undefined }>`
     ${TextFieldStyle}
 `;
const ContainerInput = styled.div`
     width: 100%;
     margin: 0;
     padding: 0;
     position: relative;
     @media screen and (max-width:768px) {
        font-size: 16px;
     }
 `;

const ContainerIcon = styled.div`
     position: absolute;
     top:32px;
     right:16px;
 `;
type TInputInterface = {
  type: 'text' | 'email' | 'password' | 'url';
  placeholder?: string;
  value?: string;
  name?: string;
  error?: boolean;
  icon?: React.ReactNode;
  errorText?: string;
  disabled?: boolean;
  labelText?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onIconClick?(e: React.MouseEvent<HTMLDivElement>): void;
  onBlur?(e?: React.FocusEvent<HTMLInputElement>): void;
  onFocus?(e?: React.FocusEvent<HTMLInputElement>): void;
};

export const InputField = ({
  type, placeholder, value, name, error, icon = null, errorText, onChange, onIconClick, onBlur, onFocus,
  disabled, labelText,
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
    <ContainerIcon onClick={onIconClick}>
      {icon}
    </ContainerIcon>
    {error && <ErorText erorText={errorText} />}
  </ContainerInput>
);
export default InputField;
