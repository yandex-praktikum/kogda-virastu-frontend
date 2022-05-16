import React, { ChangeEventHandler, FC, FocusEventHandler } from 'react';
import { useIntl } from 'react-intl';
import TextAreaField from './textAreaFieldConfig';

interface IFieldInput {
  minHeight?: number,
  value: string,
  error?: boolean,
  placeholder?: string,
  errorText?: string,
  onBlur?: FocusEventHandler<HTMLTextAreaElement>,
  onFocus?: FocusEventHandler<HTMLTextAreaElement>,
  onChange: ChangeEventHandler<HTMLTextAreaElement>,
}

export const FieldAboutArticle: FC<IFieldInput> = ({
  value,
  onBlur = undefined,
  onFocus = undefined,
  onChange,
  placeholder = '',
  error = false,
  errorText = '',
  minHeight = 0,
}) => {
  const intl = useIntl();
  return (
    <TextAreaField
      placeholder={placeholder}
      name='FieldAboutArticle'
      errorText={errorText}
      error={error}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      onChange={onChange}
      labelText={intl.messages.articleAbout as string}
      minHeight={minHeight} />
  );
};

FieldAboutArticle.defaultProps = {
  onBlur: undefined,
  onFocus: undefined,
  placeholder: '',
  error: false,
  errorText: '',
  minHeight: 0,
};

export const FieldAboutUser: FC<IFieldInput> = ({
  value,
  onBlur = undefined,
  onFocus = undefined,
  onChange,
  placeholder = '',
  error = false,
  errorText = '',
  minHeight = 0,
}) => {
  const intl = useIntl();
  return (
    <TextAreaField
      placeholder={placeholder}
      name='FieldAboutArticle'
      errorText={errorText}
      error={error}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      onChange={onChange}
      labelText={intl.messages.aboutUser as string}
      minHeight={minHeight} />
  );
};

FieldAboutUser.defaultProps = {
  onBlur: undefined,
  onFocus: undefined,
  placeholder: '',
  error: false,
  errorText: '',
  minHeight: 0,
};

export const FieldTextArticle: FC<IFieldInput> = ({
  value,
  onBlur = undefined,
  onFocus = undefined,
  onChange,
  placeholder = '',
  error = false,
  errorText = '',
  minHeight = 0,
}) => {
  const intl = useIntl();
  return (
    <TextAreaField
      placeholder={placeholder}
      name='FieldTextArticle'
      errorText={errorText}
      error={error}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      onChange={onChange}
      labelText={intl.messages.articleText as string}
      minHeight={minHeight} />
  );
};

FieldTextArticle.defaultProps = {
  onBlur: undefined,
  onFocus: undefined,
  placeholder: '',
  error: false,
  errorText: '',
  minHeight: 0,
};

export const FieldTextComment: FC<IFieldInput> = ({
  value,
  onBlur = undefined,
  onFocus = undefined,
  onChange,
  placeholder = '',
  error = false,
  errorText = '',
  minHeight = 0,
}) => (
  <TextAreaField
    placeholder={placeholder}
    name='FieldTextComment'
    errorText={errorText}
    error={error}
    onBlur={onBlur}
    onFocus={onFocus}
    value={value}
    onChange={onChange}
    minHeight={minHeight}
    isHasBorder={false} />
);

FieldTextComment.defaultProps = {
  onBlur: undefined,
  onFocus: undefined,
  placeholder: '',
  error: false,
  errorText: '',
  minHeight: 0,
};
