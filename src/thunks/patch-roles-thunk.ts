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

const patchRolesThunk: AppThunk = (user: any) => async (dispatch) => {
  dispatch(rolesPatchRequested());
  let roles;
  if ((user.roles.indexOf("admin") > -1)) {
    roles = ["user"]
  } else {
    roles = ["user", "admin"]
  }
  console.log(roles);
  
  try {
    await patchRoles(user.username, roles );
    dispatch(rolesPatchSucceeded());
  } catch (error) {
    dispatch(rolesPatchFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};

export default patchRolesThunk;
