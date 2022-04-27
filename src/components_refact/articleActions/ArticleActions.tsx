import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { TArticle } from '../../types/types';
import { DELETE_ARTICLE } from '../../constants';
import { deleteArticle } from '../../services/api';

export const ArticleActions: FC<{ article: TArticle, canModify: boolean }> = ({ article, canModify }) => {
  const dispatch = useDispatch();
  const del = () => {
    dispatch({ type: DELETE_ARTICLE, payload: deleteArticle(article.slug) });
  };

  if (canModify) {
    return (

      <span>

        <Link
          to={`/editor/${article.slug}`}
          className='btn btn-outline-secondary btn-sm'>
          <i className='ion-edit' />
          {' '}
          Edit Article
        </Link>

        <button className='btn btn-outline-danger btn-sm' onClick={del}>
          <i className='ion-trash-a' />
          {' '}
          Delete Article
        </button>

      </span>
    );
  }

  return (
    <span />
  );
};
