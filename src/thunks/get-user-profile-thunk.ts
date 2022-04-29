import { AxiosError } from 'axios';
import { AppThunk } from '../store/store.types';
import {
  userFetchRequested, userFetchSucceeded, userFetchFailed, setUser,
} from '../store';
import { fetchProfile } from '../services/api';
import { TAPIError, TAPIProfile } from '../services/api.types';
import makeErrorMessage from '../services/helpers/make-error-message';

const getUserProfileThunk: AppThunk = (user: string) => async (dispatch) => {
  try {
    dispatch(userFetchRequested());
    const res = await fetchProfile(user);
    const { profile } = res.data as TAPIProfile;
    const {
      username = '', email = '', bio, image,
    } = profile;
    dispatch(setUser({
      username, email, bio, image,
    }));
    dispatch(userFetchSucceeded());
  } catch (error) {
    dispatch(userFetchFailed(makeErrorMessage(error as AxiosError<TAPIError>)));
  }
};
export default getUserProfileThunk;
