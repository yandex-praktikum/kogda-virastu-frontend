import styled from 'styled-components';
import { useState } from 'react';
const InputStyle = styled.input<{ error: boolean | undefined }>`
     width:540px;
     height: 40px;
     box-sizing: border-box;
     padding: 8px 16px 8px 16px;
     font-family: var(--default-text-18);
     color: var(--color-text-secondary);
     border: 1px solid ${({ error }) => error ? '#FF1E1E' : 'var(--color-gray)'};
     @media screen and (max-width:320px) {
        font-size: 16px;
        max-width:280px;
     }
 `
type TInputInterface = {
    type?: 'text' | 'email' | 'password' | 'url';
    placeholder?: string;
    value: string;
    name?: string;
    success?: boolean;
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
}
const ErorTextStyle = styled.span`
color:#FF1E1E;
font-family: var(--default-h5);
`

const ErorText = ({ erorText }: TerrorText) => {
    return (
        <ErorTextStyle>{erorText}</ErorTextStyle>
    )
}

export const Input = ({ type, placeholder, value, name, success, error, icon, errorText, onChange, onIconClick, onBlur, onFocus }: TInputInterface) => {
    return (
        <>
            <InputStyle error={error} type={type} placeholder={placeholder} value={value} name={name} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
            {error && <ErorText erorText={errorText} />}
        </>
    )
}
export default Input