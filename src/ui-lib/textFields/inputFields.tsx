import InputField from "./inputFieldConfig";
import { FC } from 'react';
import { PaperClipIcon } from '../'

type TFieldInput = {
    name?: string;
    value?: string;
    error?: boolean;
    disabled?: boolean;
    placeholder?: string;
    errorText?: string;
    onBlur?(e?: React.FocusEvent<HTMLInputElement>): void;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const FieldUrl: FC<TFieldInput> = ({ value, onBlur, onChange, placeholder, error, errorText }) => {
  return (
    <InputField placeholder={placeholder}
        name="FieldUrl"
        type='url'
        errorText={errorText}
        error={error}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
        labelText={'URL изображения (опционально)'}
        icon={<PaperClipIcon color='grey' />} />
  )
}
export const FieldProfileImage: FC<TFieldInput> = ({ value, onBlur, onChange, placeholder, error, errorText }) => {
  return (
    <InputField placeholder={placeholder}
        name="FieldProfileImage"
        type='url'
        errorText={errorText}
        error={error}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
        labelText={'URL изображения профиля'}
        icon={<PaperClipIcon color='grey' />} />
  )
}
export const FieldLogin: FC<TFieldInput> = ({ value, onBlur, onChange, placeholder, error, errorText }) => {
  return (
    <InputField placeholder={placeholder}
        name="FieldLogin"
        type='text'
        errorText={errorText}
        error={error}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
        labelText={'Имя пользователя'}
    />
  )
}
export const FieldEmail: FC<TFieldInput> = ({ value, onBlur, onChange, placeholder, error, errorText }) => {
  return (
    <InputField placeholder={placeholder}
        name='Email'
        type='email'
        errorText={errorText}
        error={error}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
        labelText={'Email'}
    />
  )
}
export const FieldPassword: FC<TFieldInput> = ({ value, onBlur, onChange, placeholder, error, errorText }) => {
  return (
    <InputField placeholder={placeholder}
        name="Password"
        type='password'
        errorText={errorText}
        error={error}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
        labelText={'Пароль'}
    />
  )
}
export const FieldNewPassword: FC<TFieldInput> = ({ value, onBlur, onChange, placeholder, error, errorText }) => {
  return (
    <InputField placeholder={placeholder}
        name="NewPassword"
        type='password'
        errorText={errorText}
        error={error}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
        labelText={'Новый пароль'}
    />
  )
}
export const FieldNameArticle: FC<TFieldInput> = ({ value, onBlur, onChange, placeholder, error, errorText }) => {
  return (
    <InputField placeholder={placeholder}
        name="NameArticle"
        type='text'
        errorText={errorText}
        error={error}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
        labelText={'Название статьи'}
    />
  )
}
export const FieldDescriptionArticle: FC<TFieldInput> = ({ value, onBlur, onChange, placeholder, error, errorText }) => {
  return (
    <InputField placeholder={placeholder}
        name='inputField'
        type='text'
        errorText={errorText}
        error={error}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
        labelText={'О чем статья'}
    />
  )
}
export const FieldTags: FC<TFieldInput> = ({ value, onBlur, onChange, placeholder, error, errorText }) => {
  return (
    <InputField placeholder={placeholder}
        name='tags'
        type='text'
        errorText={errorText}
        error={error}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
        labelText={'Теги (через запятую)'}
    />
  )
}







export default FieldUrl
