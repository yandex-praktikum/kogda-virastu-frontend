import { AxiosError, AxiosResponse } from 'axios';
import { AppThunk } from '../store/store.types';
import {
  userFetchRequested, userFetchSucceeded, userFetchFailed, setUser,
} from '../store';
import { fetchProfile } from '../services/api';
import { TAPIError, TAPIProfile } from '../services/api.types';
import { makeErrorObject } from '../services/helpers';

const getUserProfileThunk: AppThunk = (user: string) => async (dispatch) => {
  try {
    dispatch(userFetchRequested());
    const {
      data: {
        profile: {
          username = '', email = '', bio, image,
        },
      },
    } = await fetchProfile(user) as AxiosResponse<TAPIProfile>;
    dispatch(setUser({
      username, email, bio, image,
    }));
    dispatch(userFetchSucceeded());
  } catch (error) {
    dispatch(userFetchFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};
export default getUserProfileThunk;
