import React, { FC, useState } from 'react';
import { InputField } from './inputFieldConfig';
import { PaperClipIcon, EyeIcon, EyeNoIcon } from '../icons';
import { TFieldInput } from '../../types/styles.types';

export const FieldUrl: FC<TFieldInput> = ({
  value,
  onBlur,
  onChange,
  placeholder = '',
  error = false,
  errorText = '',
  disabled = false,
}) => (
  <InputField
    placeholder={placeholder}
    name='FieldURL'
    type='url'
    errorText={errorText}
    error={error}
    onBlur={onBlur}
    value={value}
    onChange={onChange}
    labelText='URL изображения (опционально)'
    icon={<PaperClipIcon color='grey' />}
    disabled={disabled} />
);
export const FieldProfileImage: FC<TFieldInput> = ({
  value,
  onBlur,
  onChange,
  placeholder = '',
  error,
  errorText,
}) => (
  <InputField
    placeholder={placeholder}
    name='FieldProfileImage'
    type='url'
    errorText={errorText}
    error={error}
    onBlur={onBlur}
    value={value}
    onChange={onChange}
    labelText='URL изображения профиля'
    icon={<PaperClipIcon color='grey' />} />
);
export const FieldLogin: FC<TFieldInput> = ({
  value,
  onBlur,
  onChange,
  placeholder = '',
  error,
  errorText,
}) => (
  <InputField
    placeholder={placeholder}
    name='FieldLogin'
    type='text'
    errorText={errorText}
    error={error}
    onBlur={onBlur}
    value={value}
    onChange={onChange}
    labelText='Имя пользователя' />
);
export const FieldNick: FC<TFieldInput> = ({
  value,
  onBlur,
  onChange,
  placeholder = '',
  error,
  errorText,
}) => (
  <InputField
    placeholder={placeholder}
    name='FieldNick'
    type='text'
    errorText={errorText}
    error={error}
    onBlur={onBlur}
    value={value}
    onChange={onChange}
    labelText='Отображаемое имя' />
);
export const FieldEmail: FC<TFieldInput> = ({
  value,
  onBlur,
  onChange,
  placeholder = '',
  error,
  errorText,
}) => (
  <InputField
    placeholder={placeholder}
    name='Email'
    type='email'
    errorText={errorText}
    error={error}
    onBlur={onBlur}
    value={value}
    onChange={onChange}
    labelText='Email' />
);
export const FieldPassword: FC<TFieldInput & { label?: string, name?: string }> = ({
  value,
  onBlur,
  onChange,
  name = 'FieldPassword',
  error,
  errorText,
  label = 'Пароль',
  placeholder = '',
}) => {
  const [passwordState,
    setPasswordState] = useState<'password' | 'text'>('password');
  const [passwordIcon, setPasswordIcon] = useState(<EyeNoIcon color='grey' />);
  const onIconClick = () => {
    if (passwordState === 'password') {
      setPasswordState('text');
      setPasswordIcon(<EyeIcon color='grey' />);
    } else {
      setPasswordState('password');
      setPasswordIcon(<EyeNoIcon color='grey' />);
    }
  };
  return (
    <InputField
      placeholder={placeholder}
      name={name}
      type={passwordState}
      errorText={errorText}
      error={error}
      onBlur={onBlur}
      value={value}
      onChange={onChange}
      labelText={label}
      icon={passwordIcon}
      onIconClick={onIconClick} />
  );
};

export const FieldDescriptionArticle: FC<TFieldInput> = ({
  value,
  onBlur,
  onChange,
  placeholder = '',
  error,
  errorText,
}) => (
  <InputField
    placeholder={placeholder}
    name='descriptionArticle'
    type='text'
    errorText={errorText}
    error={error}
    onBlur={onBlur}
    value={value}
    onChange={onChange}
    labelText='О чем статья' />
);
export const FieldNameArticle: FC<TFieldInput> = ({
  value,
  onBlur,
  onChange,
  placeholder = '',
  error,
  errorText,
}) => (
  <InputField
    placeholder={placeholder}
    name='nameArticle'
    type='text'
    errorText={errorText}
    error={error}
    onBlur={onBlur}
    value={value}
    onChange={onChange}
    labelText='Название статьи' />
);
export const FieldTegs: FC<TFieldInput> = ({
  value,
  onBlur,
  onChange,
  placeholder = '',
  error,
  errorText,
}) => (
  <InputField
    placeholder={placeholder}
    name='tags'
    type='text'
    errorText={errorText}
    error={error}
    onBlur={onBlur}
    value={value}
    onChange={onChange}
    labelText='Теги (через запятую)' />
);
