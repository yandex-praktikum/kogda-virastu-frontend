import { followProfilePostRequested, followProfilePostSucceeded, followProfilePostFailed, followProfileDeleteRequested, followProfileDeleteSucceeded, followProfileDeleteFailed } from '../store'
import { postFollowProfile, deleteFollowProfile } from '../services/api';
import { AppDispatch, AppThunk, RootState } from '../store/store.types'
import { setViewedProfile } from '../store';
import { AxiosError, AxiosResponse } from 'axios';
import { TAPIError, TAPIProfile } from '../services/api.types';
import { batch } from 'react-redux';
import makeErrorMessage from '../services/helpers/make-error-message';

export const followProfileThunk: AppThunk = (username: string) => async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(followProfilePostRequested());
    try {
        const { data: { profile } } = await postFollowProfile(username) as AxiosResponse<TAPIProfile>
        batch(() => {
            dispatch(followProfilePostSucceeded());
            dispatch(setViewedProfile(profile))
        })
    } catch (error) {
        dispatch(followProfilePostFailed(makeErrorMessage(error as AxiosError<TAPIError>)))
    }
}

export const unfollowProfileThunk: AppThunk = (username: string) => async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(followProfileDeleteRequested());
    try {
        const { data: { profile } } = await deleteFollowProfile(username) as AxiosResponse<TAPIProfile>
        batch(() => {
            dispatch(followProfileDeleteSucceeded());
            dispatch(setViewedProfile(profile))
        })
    } catch (error) {
        dispatch(followProfileDeleteFailed(makeErrorMessage(error as AxiosError<TAPIError>)))
    }


}




