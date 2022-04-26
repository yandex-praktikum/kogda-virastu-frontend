import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { TAppActions, TArticleActions } from '../constants/actionTypes';
import store from '../store';

import {
  setTitle,
  setDescription,
  setBody,
  setTags,
  resetNewArticle,
} from './articleSlice';

import {
  changeEmailLogin,
  changePasswordLogin,
  resetFormLogin,
} from './loginFormSubSlice';

import {
  changeUsernameRegister,
  changeEmailRegister,
  changePasswordRegister,
  resetFormRegister,
} from './registerFormSubSlice';

export {
  setTitle,
  setDescription,
  setBody,
  setTags,
  resetNewArticle,
  changeEmailLogin,
  changePasswordLogin,
  resetFormLogin,
  changeUsernameRegister,
  changeEmailRegister,
  changePasswordRegister,
  resetFormRegister,
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
type TApplicationActions = TAppActions | TArticleActions;
export type AppThunk<TReturn = void> = ActionCreator<
ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;
