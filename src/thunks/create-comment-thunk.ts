import { AxiosError } from 'axios';
import { batch } from 'react-redux';
import { AppDispatch, AppThunk, RootState } from '../store/store.types';
import { postComment } from '../services/api';
import {
  commentPostRequested,
  commentPostSucceeded,
  commentPostFailed,
} from '../store';
import { TAPIError } from '../services/api.types';
import makeErrorMessage from '../services/helpers/make-error-message';
import { resetComment } from '../store/commentFormSubSlice';
import { setViewCommentFeed } from '../store/viewSlice';

const createComment: AppThunk = (slug: string) => async (
  dispatch: AppDispatch,
  getState: () => RootState,
) => {
  const comment = getState().forms.comment.comment ?? '';
  try {
    dispatch(commentPostRequested());
    const { data } = await postComment(slug, comment);
    batch(() => {
      dispatch(setViewCommentFeed(data.comment));
      dispatch(resetComment());
      dispatch(commentPostSucceeded());
    });
  } catch (error) {
    dispatch(commentPostFailed(makeErrorMessage(error as AxiosError<TAPIError>)));
  }
};
export default createComment;
