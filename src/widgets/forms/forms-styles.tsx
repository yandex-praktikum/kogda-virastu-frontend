import styled, { css } from 'styled-components';
import { TFontProperties } from '../../types/styles.types';
import { Link } from 'react-router-dom';

type TFormTextProps = {
  font: TFontProperties;
  color: string;
}

type TInputFieldsetProps = {
  rowGap: number;
}

const textStyles = css<TFormTextProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.font.size}px;
  font-family: ${(props) => props.font.family};
  font-weight: ${(props) => props.font.weight};
  line-height: ${(props) => props.font.height}px;
`;

export const FormContainer = styled.div`
  padding: 16px 0 0 0;
  width: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormTitle = styled.h2`
  margin: 0 0 40px 0;
  ${textStyles};
`;

export const FormLoginLink = styled(Link)`
  margin: 0 0 24px 0;
  text-decoration: none;
  ${textStyles};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputFieldset = styled.fieldset<TInputFieldsetProps>`
  padding: 0;
  margin: 0 0 24px 0;
  display: flex;
  flex-direction: column;
  row-gap: ${(props) => props.rowGap}px;
  box-sizing: border-box;
`;