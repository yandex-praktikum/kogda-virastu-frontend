import { AppDispatch, AppThunk, RootState } from '../store/store.types'
import { commentDeleteRequested, commentDeleteSucceeded, commentDeleteFailed,  setViewCommentsFeed } from '../store'
import { deleteComment } from "../services/api"
import { AxiosError, AxiosResponse } from 'axios';
import { TAPIError, TAPIArticle } from '../services/api.types';
import { batch } from 'react-redux';
import makeErrorMessage from '../services/helpers/make-error-message';

const deleteCommentThunk: AppThunk = (slug: string, commentId: string) => async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(commentDeleteRequested());
    try {
        const {status} = await  deleteComment(slug, commentId) as AxiosResponse<null>
        const { view: { commentsFeed } } = getState();
        const newCommentsFeed = commentsFeed?.filter(comment => {
            comment.id !== commentId
        })
        batch(() => {
            dispatch(commentDeleteSucceeded());
            dispatch(setViewCommentsFeed(newCommentsFeed ?? []));
        })
    } catch (error) {
        dispatch(commentDeleteFailed(makeErrorMessage(error as AxiosError<TAPIError>)))
    }
}

export default deleteCommentThunk;