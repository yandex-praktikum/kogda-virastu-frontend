/* eslint-disable */
import { AxiosError, AxiosResponse } from 'axios';
import { generateInviteRequested, generateInviteSucceeded, setGeneratedInvite } from '../store';
import { AppThunk } from '../store/store.types';
import { postGenerateInvite } from '../services/api';
import { TAPIProfile, TAPIError } from '../services/api.types';

const generateInviteThunk: AppThunk = () => async (dispatch) => {
  try {
    dispatch(generateInviteRequested());
    const {
      data: { code },
    } = await postGenerateInvite() as AxiosResponse<any>;
    if (code) {dispatch(setGeneratedInvite(code))};
    setTimeout(() => {
      dispatch(generateInviteSucceeded());
    }, 200);
    // setTimeout(() => {
    //   dispatch(dispatch(clearTag()))
    // }, 1000);
  } catch (error) {
    // dispatch(followProfilePostFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};

export default generateInviteThunk;
