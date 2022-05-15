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
  isHasBorder?: boolean;
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

export const FieldTextComment: FC<TFieldInput & { isHasBorder?: boolean }> = ({
  value, onBlur, onChange, placeholder, error, errorText, minHeight, isHasBorder,
}) => (
  <TextAreaField
    placeholder={placeholder}
    name='FieldTextComment'
    errorText={errorText}
    error={error}
    onBlur={onBlur}
    value={value}
    onChange={onChange}
    minHeight={minHeight}
    isHasBorder={isHasBorder}
  />
);