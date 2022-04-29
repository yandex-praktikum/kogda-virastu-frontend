import { patchCurrentUser } from '../services/api';
import { settingsPatchFailed, settingsPatchRequested, settingsPatchSucceeded } from '../store/apiSlice';
import { resetFormProfile } from '../store/profileFormSubSlice';
import { AppDispatch, AppThunk } from '../store/store.types';

const patchCurrentUserThunk: AppThunk = (data: {
  email: string;
  username: string;
  bio: string;
  image: string;
  password?: string;
}) => async (dispatch: AppDispatch) => {
  try {
    dispatch(settingsPatchRequested());
    await patchCurrentUser(data);
    dispatch(resetFormProfile());
    dispatch(settingsPatchSucceeded());
  } catch (error) {
    console.dir(error);
    dispatch(settingsPatchFailed(error));
  }
};

export default patchCurrentUserThunk;
