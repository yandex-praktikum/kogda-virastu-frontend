import { batch } from 'react-redux';
import { AxiosError } from 'axios';
import { patchCurrentUser } from '../services/api';
import { settingsPatchFailed, settingsPatchRequested, settingsPatchSucceeded } from '../store/apiSlice';
import { resetFormProfile } from '../store/profileFormSubSlice';
import { AppDispatch, AppThunk, RootState } from '../store/store.types';
import makeErrorMessage from '../services/helpers/make-error-message';
import { setUser } from '../store';
import { TAPIError } from '../services/api.types';

const patchCurrentUserThunk: AppThunk = () => async (
  dispatch: AppDispatch,
  getState: () => RootState,
) => {
  dispatch(settingsPatchRequested());
  const profile = getState().forms.profile ?? {};
  // Type Guards
  const user = profile.username || '';
  const mail = profile.email || '';
  const pass = profile.password || '';
  const about = profile.bio || '';
  const link = profile.image || '';

  try {
    const {
      data: {
        user: {
          username, email, bio, image,
        },
      },
    } = await patchCurrentUser({
      username: user, email: mail, password: pass, bio: about, image: link,
    });
    batch(() => {
      dispatch(setUser({
        username, email, bio, image,
      }));
      dispatch(resetFormProfile());
      dispatch(settingsPatchSucceeded());
    });
  } catch (error) {
    dispatch(settingsPatchFailed(makeErrorMessage(error as AxiosError<TAPIError>)));
  }
};

export default patchCurrentUserThunk;
