import React, { ChangeEventHandler, FC, FocusEventHandler } from 'react';
import TextAreaField from './textAreaFieldConfig';

type TFieldInput = {
  minHeight?: number;
  value?: string;
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
  errorText?: string;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
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

export const FieldAboutUser: FC<TFieldInput> = ({
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
    labelText='Расскажите о себе'
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

// eslint-disable-next-line react/require-default-props
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
    isHasBorder={isHasBorder} />
);
