import { AxiosError } from 'axios';
import { AppThunk } from '../store/store.types';
import {
  profileImagePostRequested,
  profileImagePostSucceeded,
  profileImagePostingFailed,
} from '../store';
import { postProfileImage } from '../services/api';
import { makeErrorObject } from '../services/helpers';
import { TAPIError } from '../services/api.types';

const postProfileImageThunk: AppThunk = () => async (dispatch, getState) => {
  dispatch(profileImagePostRequested());
  const data = getState().forms.profile.image ?? {};
  console.log(data);

  try {
    await postProfileImage(data);
    dispatch(profileImagePostSucceeded());
  } catch (error) {
    dispatch(
      profileImagePostingFailed(makeErrorObject(error as AxiosError<TAPIError>)),
    );
  }
};

export default postProfileImageThunk;
