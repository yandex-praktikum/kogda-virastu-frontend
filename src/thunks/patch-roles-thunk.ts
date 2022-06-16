import { AxiosError } from 'axios';
import { patchRoles } from '../services/api';
import {
  rolesPatchRequested,
  rolesPatchSucceeded,
  rolesPatchFailed,
} from '../store';
import { AppThunk } from '../store/store.types';
import { makeErrorObject } from '../services/helpers';
import { TAPIError } from '../services/api.types';

/* eslint-disable*/

const patchRolesThunk: AppThunk = () => async (dispatch, user) => {
  dispatch(rolesPatchRequested());
  console.log(user);
  try {
    await patchRoles(user);
    dispatch(rolesPatchSucceeded());
  } catch (error) {
    dispatch(rolesPatchFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};

export default patchRolesThunk;
