import { AppDispatch, AppThunk, RootState } from '../store/store.types'
import { postLikeArticle, deleteLikeArticle } from '../services/api';
import { setAllArticles, likeArticleDeleteRequested, likeArticleDeleteSucceeded, likeArticleDeleteFailed, likeArticlePostRequested, likeArticlePostSucceeded, likeArticlePostFailed } from '../store'
import { AxiosError, AxiosResponse } from 'axios';
import { TAPIError, TAPIArticle } from '../services/api.types';
import { batch } from 'react-redux';
import makeErrorMessage from '../services/helpers/make-error-message';


export const deleteLikeThunk: AppThunk = (slug: string) => async (dispatch: AppDispatch, getState: () => RootState) => {
  dispatch(likeArticleDeleteRequested());
  try {
    const { data: { article } } = await deleteLikeArticle(slug) as AxiosResponse<TAPIArticle>
    const filteredArticlesArray = getState().all.articles?.map(item => { return item.slug !== article.slug ? item : { ...item, favorited: false } })
    batch(() => {
      dispatch(likeArticleDeleteSucceeded())
      dispatch(setAllArticles(filteredArticlesArray ?? []))
    })
  } catch (error) {
    dispatch(likeArticleDeleteFailed(makeErrorMessage(error as AxiosError<TAPIError>)))
  }
}


export const addLikeThunk: AppThunk = (slug: string) => async (dispatch: AppDispatch, getState: () => RootState) => {
  dispatch(likeArticlePostRequested());
  try {
    const { data: { article } } = await postLikeArticle(slug) as AxiosResponse<TAPIArticle>;
    const filteredArticlesArray = getState().all.articles?.map(item => { return item.slug !== article.slug ? item : { ...item, favorited: true} })
    batch(() => {
      dispatch(setAllArticles(filteredArticlesArray ?? []))
      dispatch(likeArticlePostSucceeded())
    })
  } catch (error) {
    dispatch(likeArticlePostFailed(makeErrorMessage(error as AxiosError<TAPIError>)))
  }
}

 