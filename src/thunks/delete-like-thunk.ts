import { AxiosError } from 'axios';
import { AppDispatch, AppThunk, RootState } from '../store/store.types';
import {
  likeArticleDeleteFailed,
  likeArticleDeleteRequested,
  likeArticleDeleteSucceeded,
  setViewArticle,
  setViewFeed,
} from '../store';
import { deleteLikeArticle } from '../services/api';
import { makeErrorObject } from '../services/helpers';
import { TAPIError } from '../services/api.types';

const deleteLikeThunk: AppThunk = (slug: string) => async (
  dispatch: AppDispatch,
  getState: () => RootState,
) => {
  try {
    dispatch(likeArticleDeleteRequested());
    const { data: { article } } = await deleteLikeArticle(slug);
    // Type Guard - в TAllState допускается null,  в TArticles - нет
    const articles = getState().view.feed ?? [];
    const articleView = getState().view.article ?? [];
    if (articleView) {
      dispatch(setViewArticle(article));
    }
    dispatch(setViewFeed(articles?.map((item) => {return item.slug === article.slug ? article : item })));
    dispatch(likeArticleDeleteSucceeded());
  } catch (error) {
    dispatch(likeArticleDeleteFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};

export default deleteLikeThunk;
