import { AxiosError } from 'axios';
import { AppDispatch, AppThunk, RootState } from '../store/store.types';
import { postLikeArticle, deleteLikeArticle } from '../services/api';
import {
  setAllArticles,
  likeArticleDeleteRequested,
  likeArticleDeleteSucceeded,
  likeArticleDeleteFailed,
  likeArticlePostRequested,
  likeArticlePostSucceeded,
  likeArticlePostFailed,
} from '../store';
import { TAPIError } from '../services/api.types';
import makeErrorMessage from '../services/helpers/make-error-message';

export const deleteLikeThunk: AppThunk = (slug: string) => async (
  dispatch : AppDispatch,
  getState: () => RootState,
) => {
  try {
    dispatch(likeArticleDeleteRequested());
    const { data: { article } } = await deleteLikeArticle(slug);
    // Type Guard - в TAllState допускается null,  в TArticles - нет
    const articles = getState().all.articles ?? [];
    dispatch(setAllArticles(articles?.filter((item) => (item.slug !== article.slug))));
    dispatch(likeArticleDeleteSucceeded());
  } catch (error) {
    dispatch(likeArticleDeleteFailed(makeErrorMessage(error as AxiosError<TAPIError>)));
  }
};

export const addLikeThunk: AppThunk = (slug: string) => async (
  dispatch : AppDispatch,
  getState: () => RootState,
) => {
  try {
    dispatch(likeArticlePostRequested());
    const { data: { article } } = await postLikeArticle(slug);
    const articles = getState().all.articles ?? [];
    dispatch(setAllArticles(articles.map(
      (item) => (item.slug === article.slug ? article : item
      ),
    )));
    dispatch(likeArticlePostSucceeded());
  } catch (error) {
    dispatch(likeArticlePostFailed(makeErrorMessage(error as AxiosError<TAPIError>)));
  }
};
