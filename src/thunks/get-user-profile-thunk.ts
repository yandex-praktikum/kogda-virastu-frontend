import { AxiosError, AxiosResponse } from 'axios';
import { AppThunk } from '../store/store.types';
import {
  userFetchRequested, userFetchSucceeded, userFetchFailed, setUser, setViewProfile
} from '../store';
import { fetchProfile, fetchCurrentUser } from '../services/api';
import { TAPIError, TAPIProfile, TAPIAuth } from '../services/api.types';
import makeErrorMessage from '../services/helpers/make-error-message';

const getUserProfileThunk: AppThunk = (user: string) => async (dispatch) => {
  try {
    dispatch(userFetchRequested());
    const {
      data: {
        profile
      }
    } = await fetchProfile(user.slice(1)) as AxiosResponse<TAPIProfile>;
    dispatch(setViewProfile(
     profile
    ));
    dispatch(userFetchSucceeded());
  } catch (error) {
    dispatch(userFetchFailed(makeErrorMessage(error as AxiosError<TAPIError>)));
  }
};
export default getUserProfileThunk;


