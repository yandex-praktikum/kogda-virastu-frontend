import React, { ChangeEventHandler, FC, FocusEventHandler } from 'react';
import { useIntl } from 'react-intl';
import TextAreaField from './textAreaFieldConfig';

interface IFieldInput {
  minHeight?: number,
  value: string,
  error?: boolean,
  placeholder?: string,
  errorText?: string,
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

export const FieldAboutArticle: FC<IFieldInput> = ({
  value,
  onBlur = undefined,
  onChange,
  placeholder = '',
  error = false,
  errorText = '',
  minHeight = undefined,
}) => {
  const intl = useIntl();
  return (
    <TextAreaField
      placeholder={placeholder}
      name='FieldAboutArticle'
      errorText={errorText}
      error={error}
      onBlur={onBlur}
      value={value}
      onChange={onChange}
      labelText={intl.messages.articleAbout as string}
      minHeight={minHeight} />
  );
};

FieldAboutArticle.defaultProps = {
  onBlur: undefined,
  placeholder: '',
  error: false,
  errorText: '',
  minHeight: undefined,
};

export const FieldAboutUser: FC<IFieldInput> = ({
  value,
  onBlur = undefined,
  onChange,
  placeholder = '',
  error = false,
  errorText = '',
  minHeight = undefined,
}) => {
  const intl = useIntl();
  return (
    <TextAreaField
      placeholder={placeholder}
      name='FieldAboutArticle'
      errorText={errorText}
      error={error}
      onBlur={onBlur}
      value={value}
      onChange={onChange}
      labelText={intl.messages.aboutUser as string}
      minHeight={minHeight} />
  );
};

FieldAboutUser.defaultProps = {
  onBlur: undefined,
  placeholder: '',
  error: false,
  errorText: '',
  minHeight: undefined,
};

export const FieldTextArticle: FC<IFieldInput> = ({
  value,
  onBlur = undefined,
  onChange,
  placeholder = '',
  error = false,
  errorText = '',
  minHeight = undefined,
}) => {
  const intl = useIntl();
  return (
    <TextAreaField
      placeholder={placeholder}
      name='FieldTextArticle'
      errorText={errorText}
      error={error}
      onBlur={onBlur}
      value={value}
      onChange={onChange}
      labelText={intl.messages.articleText as string}
      minHeight={minHeight} />
  );
};

FieldTextArticle.defaultProps = {
  onBlur: undefined,
  placeholder: '',
  error: false,
  errorText: '',
  minHeight: undefined,
};

export const FieldTextComment: FC<IFieldInput & { isHasBorder?: boolean }> = ({
  value,
  onBlur = undefined,
  onChange,
  placeholder = '',
  error = false,
  errorText = '',
  minHeight = undefined,
  isHasBorder = false,
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

FieldTextComment.defaultProps = {
  onBlur: undefined,
  placeholder: '',
  error: false,
  errorText: '',
  minHeight: undefined,
  isHasBorder: false,
};
