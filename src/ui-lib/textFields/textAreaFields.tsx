import React, { FC } from 'react';
import TextAreaField from './textAreaFieldConfig';

type TFieldInput = {
  name?: string;
  minHeight?: number;
  value?: string;
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
  errorText?: string;
  onBlur?(e?: React.FocusEvent<HTMLTextAreaElement>): void;
  onChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
};

export const FieldAboutArticle: FC<TFieldInput> = ({
  value, onBlur, onChange, placeholder, error, errorText, minHeight,
}) => (
  <TextAreaField
    placeholder={placeholder}
    name='FieldAboutArticle'
    errorText={errorText}
    error={error}
    onBlur={onBlur}
    value={value}
    onChange={onChange}
    labelText='О чем статья'
    minHeight={minHeight} />
);

export const FieldTextArticle: FC<TFieldInput> = ({
  value, onBlur, onChange, placeholder, error, errorText, minHeight,
}) => (
  <TextAreaField
    placeholder={placeholder}
    name='FieldTextArticle'
    errorText={errorText}
    error={error}
    onBlur={onBlur}
    value={value}
    onChange={onChange}
    labelText='Текст статьи'
    minHeight={minHeight} />
);
