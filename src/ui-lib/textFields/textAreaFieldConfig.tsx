import styled from 'styled-components';
import React from 'react';
import { TextFieldStyle, LabelStyle, ErorText } from './textFields-styles';

type TTextAreaStyleProps = {
  error: boolean | undefined;
  minHeight?: number;
}

const TextAreaStyle = styled.textarea<TTextAreaStyleProps>`
  ${TextFieldStyle}
  resize: none;
  min-height: ${({ minHeight }) => minHeight ?? 0}px;
`;

const ContainerTextArea = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  @media screen and (max-width:768px) {
    font-size: 16px;
  }
`;

type TTextAreaInterface = {
  placeholder?: string;
  value?: string;
  name?: string;
  error?: boolean;
  errorText?: string;
  disabled?: boolean;
  labelText?: string;
  onChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
  onBlur?(e?: React.FocusEvent<HTMLTextAreaElement>): void;
  onFocus?(e?: React.FocusEvent<HTMLTextAreaElement>): void;
  minHeight?: number;
};

export const TextAreaField = ({
  placeholder, value, name, error, errorText, onChange, onBlur, onFocus,
  disabled, labelText, minHeight
}: TTextAreaInterface) => (
  <ContainerTextArea>
    <LabelStyle>
      {labelText}
      <TextAreaStyle
        disabled={disabled}
        error={error}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        minHeight={minHeight}
        rows={1}
      />
    </LabelStyle>
    {error && <ErorText erorText={errorText} />}
  </ContainerTextArea>
);

export default TextAreaField;