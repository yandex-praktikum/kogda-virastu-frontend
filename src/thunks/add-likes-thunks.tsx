import { AxiosError } from 'axios';
import { AppDispatch, AppThunk, RootState } from '../store/store.types';
import { postLikeArticle } from '../services/api';
import {
  setAllArticles,
  likeArticlePostRequested,
  likeArticlePostSucceeded,
  likeArticlePostFailed,
} from '../store';
import { TAPIError } from '../services/api.types';
import makeErrorMessage from '../services/helpers/make-error-message';

const addLikeThunk: AppThunk = (slug: string) => async (
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
export default addLikeThunk;
