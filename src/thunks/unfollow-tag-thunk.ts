import { AxiosError } from 'axios';
import { AppThunk } from '../store/store.types';
import {
  unfollowTagRequested,
  unfollowTagSucceeded,
  unfollowTagFailed,
} from '../store';
import { unfollowTag } from '../services/api';
import { makeErrorObject } from '../services/helpers';
import { TAPIError } from '../services/api.types';

const unfollowTagThunk: AppThunk = (tag: string) => async (dispatch) => {
  dispatch(unfollowTagRequested());
  try {
    await unfollowTag(tag);
    dispatch(unfollowTagSucceeded());
  } catch (error) {
    dispatch(unfollowTagFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};

export default unfollowTagThunk;