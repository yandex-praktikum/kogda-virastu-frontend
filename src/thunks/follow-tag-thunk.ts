import { AxiosError } from 'axios';
import { AppThunk } from '../store/store.types';
import { followTag } from '../services/api';
import {
  followTagRequested,
  followTagSucceeded,
  followTagFailed,
} from '../store';
import { makeErrorObject } from '../services/helpers';
import { TAPIError } from '../services/api.types';


const followTagThunk: AppThunk = (tag: string) => async (dispatch) => {
  dispatch(followTagRequested());
  try {
    await followTag(tag);
    dispatch(followTagSucceeded());
  } catch (error) {
    dispatch(followTagFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};
export default followTagThunk;