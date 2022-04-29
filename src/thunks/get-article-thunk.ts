import { batch } from 'react-redux';
import { AxiosError } from 'axios';
import { AppThunk, AppDispatch } from '../store/store.types';
import { fetchArticle } from '../services/api';
import {
  articleFetchRequested, articleFetchSucceeded, articleFetchFailed, setViewArticle,
} from '../store';
import makeErrorMessage from '../services/helpers/make-error-message';
import { TAPIError } from '../services/api.types';

const getArticleThunk: AppThunk = (slug: string) => async (dispatch: AppDispatch) => {
  dispatch(articleFetchRequested());
  try {
    const { data: { article } } = await fetchArticle(slug);
    batch(() => {
      dispatch(setViewArticle(article));
      dispatch(articleFetchSucceeded());
    });
  } catch (error) {
    dispatch(articleFetchFailed(makeErrorMessage(error as AxiosError<TAPIError>)));
  }
};

export default getArticleThunk;
