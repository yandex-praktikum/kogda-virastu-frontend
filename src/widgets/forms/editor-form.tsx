import React, {
  useEffect, ChangeEvent, SyntheticEvent, FC, useMemo,
} from 'react';
import { useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from '../../services/hooks';

import {
  setTitle,
  setDescription,
  setBody,
  setTags,
  resetArticle,
  setImage,
  clearViewArticle,
} from '../../store';
import {
  deleteArticleThunk,
  getArticleThunk,
  patchArticleThunk,
  postArticleThunk,
} from '../../thunks';
import {
  ButtonContainer,
  ButtonsWrapper,
  Form,
  FormContainer,
  FormTitle,
  InputFieldset,
} from './forms-styles';
import {

  FieldAboutArticle,

  FieldTextArticle,

} from '../../ui-lib/inputs/textarea-fields';

import {
  DeletePostButton, FieldNameArticle, FieldTags, FieldUrl, PublishPostButton, SavePostButton,
} from '../../ui-lib';

const EditorForm: FC = () => {
  const dispatch = useDispatch();
  const {
    title, description, body, tags, link,
  } = useSelector((state) => state.forms.article) ?? {};
  const { isArticleFetching } = useSelector((state) => state.api);
  const { slug } = useParams();
  const initialArticle = useSelector((state) => state.view.article);

  useEffect(() => () => {
    dispatch(resetArticle());
    dispatch(clearViewArticle());
  }, [dispatch]);

  useEffect(() => {
    if (initialArticle?.tagList) {
      dispatch(setTags(initialArticle.tagList.toString()));
    }
  }, [initialArticle, dispatch]);

  useMemo(() => {
    dispatch(resetArticle());
    dispatch(clearViewArticle());
    if (slug && !title) {
      dispatch(getArticleThunk(slug));
    }
  }, [slug, dispatch, title]);

  if (slug && isArticleFetching) {
    return <div>Подождите...</div>;
  }

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.target.value));
  };

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setDescription(e.target.value));
    e.target.style.height = `${e.target.scrollHeight + 2}px`;
  };

  const onChangeBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setBody(e.target.value));
    e.target.style.height = `${e.target.scrollHeight + 2}px`;
  };

  const onChangeTags = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTags(e.target.value));
  };

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setImage(e.target.value));
  };

  const submitForm = (e: SyntheticEvent<Element>) => {
    e.preventDefault();

    if (slug) {
      dispatch(patchArticleThunk(slug));
    } else {
      dispatch(postArticleThunk());
    }
  };

  const deleteArticle = () => {
    dispatch(deleteArticleThunk(slug));
  };

  return (
    <FormContainer>
      <FormTitle>
        <FormattedMessage id={slug ? 'editArticle' : 'newArticle'} />
      </FormTitle>
      <Form onSubmit={submitForm}>
        <InputFieldset rowGap={24}>
          <FieldNameArticle
            value={title === '' ? '' : title || initialArticle?.title || ''}
            onChange={onChangeTitle} />
          <FieldAboutArticle
            value={
              description === '' ? ''
                : description || initialArticle?.description || ''
            }
            onChange={onChangeDescription} />
          <FieldUrl
            value={link === '' ? '' : link || initialArticle?.link || ''}
            onChange={onChangeImage} />
          <FieldTextArticle
            value={body === '' ? '' : body || initialArticle?.body || ''}
            onChange={onChangeBody}
            minHeight={300} />
          <FieldTags
            value={tags === '' ? '' : tags || ''}
            onChange={onChangeTags} />
        </InputFieldset>
        <ButtonContainer>
          {slug ? (
            <ButtonsWrapper>
              <SavePostButton disabled={isArticleFetching} />
              <DeletePostButton onClick={deleteArticle} />
            </ButtonsWrapper>
          ) : (
            <PublishPostButton disabled={isArticleFetching} />
          )}
        </ButtonContainer>
      </Form>
    </FormContainer>
  );
};

export default EditorForm;
