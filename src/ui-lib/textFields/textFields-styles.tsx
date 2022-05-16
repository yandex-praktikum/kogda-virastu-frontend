import styled, { css } from 'styled-components';
import { getPropOnCondition } from '../../services/helpers';

type TTextFieldStyleProps = {
  error: boolean;
  minHeight?: number;
};

export const TextFieldStyle = css<TTextFieldStyleProps>`
  box-sizing: border-box;
  width: 100%;
  padding: 8px 16px 8px 16px;
  position: relative;
  font-size: ${({ theme: { text18: { size } } }) => size}px ;
  font-family: ${({ theme: { text18: { family } } }) => family};
  line-height: ${({ theme: { text18: { height } } }) => height}px ;
  font-weight: ${({ theme: { text18: { weight } } }) => weight};
  outline:none;
  color: ${({ theme: { secondaryText } }) => secondaryText};
  border: 1px solid ${({ error }) => (error ? ((props) => props.theme.inputField.errorColor) : ((props) => props.theme.inputField.defaultBorder))};

  @media screen and (max-width:768px) {
  font-size: 16px;
  }
  :hover {
  border: 1px solid ${({ error, theme: { inputField: { borderHover, errorColor } } }) => getPropOnCondition(error, borderHover, errorColor) as string};
  }
  :disabled {
  background-color: ${((props) => props.theme.inputField.disabledInput)};
  }
  :active {
  border: 1px solid ${({ error }) => (error ? ((props) => props.theme.inputField.errorColor) : ((props) => props.theme.inputField.borderActive))};
  }
`;

export const LabelStyle = styled.label`
  width: 100%;
  margin: 0;
  color:${((props) => props.theme.labelColor)};
  font-size: ${({ theme: { labelInput: { size } } }) => `${size}px`} ;
  font-family: ${({ theme: { labelInput: { family } } }) => family};
  line-height: ${({ theme: { labelInput: { height } } }) => `${height}px`} ;
  font-weight: ${({ theme: { labelInput: { weight } } }) => weight};
`;

const ErrorTextStyle = styled.span`
margin: 0;
color: ${((props) => props.theme.inputField.errorColor)};
font-size: ${({ theme: { labelInput: { size } } }) => `${size}px`} ;
font-family: ${({ theme: { labelInput: { family } } }) => family};
line-height: ${({ theme: { labelInput: { height } } }) => `${height}px`} ;
font-weight: ${({ theme: { labelInput: { weight } } }) => weight};
`;

type TErrorText = {
  errorText?: string
};

export const ErorText = ({ errorText }: TErrorText) => (
  <ErrorTextStyle>{errorText}</ErrorTextStyle>
);
