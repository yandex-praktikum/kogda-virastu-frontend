import {
  setTitle,
  setDescription,
  setBody,
  setTags,
  resetArticle,
} from './articleFormSubSlice';

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

import {
  setUsernameProfile,
  setEmailProfile,
  setBioProfile,
  setImageProfile,
} from './profileFormSubSlice';

import {
  setAllArticles,
  setAllTags,
  clearArticles,
  clearTags,
  clearAll,
} from './allSlice';
import { setUser, clearUser } from './userSlice';

export {
  setTitle,
  setDescription,
  setBody,
  setTags,
  resetArticle,
  changeEmailLogin,
  changePasswordLogin,
  resetFormLogin,
  changeUsernameRegister,
  changeEmailRegister,
  changePasswordRegister,
  resetFormRegister,
  setUsernameProfile,
  setEmailProfile,
  setBioProfile,
  setImageProfile,
  setAllArticles,
  setAllTags,
  clearArticles,
  clearTags,
  clearAll,
  setUser,
  clearUser,
};
