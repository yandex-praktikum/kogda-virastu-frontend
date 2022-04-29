import { AxiosError } from 'axios';
import { AppDispatch, AppThunk, RootState } from '../store/store.types';
import {
  likeArticleDeleteFailed,
  likeArticleDeleteRequested,
  likeArticleDeleteSucceeded,
  setAllArticles,
} from '../store';
import { deleteLikeArticle } from '../services/api';
import makeErrorMessage from '../services/helpers/make-error-message';
import { TAPIError } from '../services/api.types';

const deleteLikeThunk: AppThunk = (slug: string) => async (
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

export default deleteLikeThunk;
