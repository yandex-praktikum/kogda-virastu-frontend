/* eslint-disable*/
import { AxiosError, AxiosResponse } from 'axios';
import {
  followTagRequested,
  followTagSucceeded,
  followProfilePostFailed,
  setTag,
  clearTag,
} from '../store';
import { AppThunk } from '../store/store.types';
import { TAPIProfile, TAPIError } from '../services/api.types';
import { makeErrorObject } from '../services/helpers';
import { postFollowTag } from '../services/api';

const followTagThunk: AppThunk = (tag: string) => async (dispatch) => {
  try {
    dispatch(followTagRequested());
    await postFollowTag(tag) as AxiosResponse<TAPIProfile>;
    dispatch(setTag(tag));
    setTimeout(() => {
      dispatch(followTagSucceeded())
    }, 800);
    setTimeout(() => {
      dispatch(dispatch(clearTag()))
    }, 1000);
  } catch (error) {
    dispatch(followProfilePostFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};

export default followTagThunk;
