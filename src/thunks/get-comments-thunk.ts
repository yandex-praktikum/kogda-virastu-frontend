import { batch } from 'react-redux';
import { AxiosError } from 'axios';
import { AppThunk, AppDispatch } from '../store/store.types';
import { fetchComments } from '../services/api';
import {
  setViewCommentsFeed, commentsFetchSucceeded, commentsFetchFailed, commentsFetchRequested,
} from '../store';
import makeErrorMessage from '../services/helpers/make-error-message';
import { TAPIError } from '../services/api.types';

const getComments: AppThunk = (slug: string) => async (dispatch: AppDispatch) => {
  dispatch(commentsFetchRequested());
  try {
    const { data: { comments } } = await fetchComments(slug);
    batch(() => {
      dispatch(setViewCommentsFeed(comments));
      dispatch(commentsFetchSucceeded());
    });
  } catch (error) {
    dispatch(commentsFetchFailed(makeErrorMessage(error as AxiosError<TAPIError>)));
  }
};

export default getComments;
