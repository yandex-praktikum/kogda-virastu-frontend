import { AxiosError } from 'axios';
import { AppThunk } from '../store/store.types';
import {
  usersFetchRequested,
  usersFetchSucceeded,
  usersFetchFailed,
  setUsers,
} from '../store';
import { fetchUsers } from '../services/api';
import { TAPIError } from '../services/api.types';
import { makeErrorObject } from '../services/helpers';

/* eslint-disable*/

const getUsersThunk: AppThunk = () => async (dispatch) => {
  dispatch(usersFetchRequested());
  try {
    const { data: { users, usersCount } } = await fetchUsers();
    dispatch(setUsers(users));
    dispatch(usersFetchSucceeded());
  } catch (error) {
    dispatch(usersFetchFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};

export default getUsersThunk;
