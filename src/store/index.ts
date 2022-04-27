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

import {
  setViewFeed,
  clearViewFeed,
  setViewTags,
  clearViewTags,
  setViewArticle,
  clearViewArticle,
  setSelectedTags,
  clearSelectedTags,
  setViewCommentsFeed,
  clearViewCommentsFeed,
  selectViewComment,
  clearViewComment,
  setPage,
  setPageLimit,
  clearView,
} from './viewSlice';

import {
  setSuccessMessage,
  setErrorMessage,
  userRegistered,
  userLogged,
  currentUserFetched,
  currentUserPatched,
  articlesFetched,
  articleFetched,
  feedFetched,
  articlePosted,
  articleDeleted,
  articlePatched,
  likeArticlePosted,
  likeArticleDeleted,
  tagsFetched,
  commentsFetched,
  commentPosted,
  commentDeleted,
  profileFetched,
  followProfilePosted,
  followProfileDeleted
} from './apiSlice';

import { setSelectedLanguage } from './system';

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
  setViewFeed,
  clearViewFeed,
  setViewTags,
  clearViewTags,
  setViewArticle,
  clearViewArticle,
  setSelectedTags,
  clearSelectedTags,
  setViewCommentsFeed,
  clearViewCommentsFeed,
  selectViewComment,
  clearViewComment,
  setPage,
  setPageLimit,
  clearView,
  setSuccessMessage,
  setErrorMessage,
  userRegistered,
  userLogged,
  currentUserFetched,
  currentUserPatched,
  articlesFetched,
  articleFetched,
  feedFetched,
  articlePosted,
  articleDeleted,
  articlePatched,
  likeArticlePosted,
  likeArticleDeleted,
  tagsFetched,
  commentsFetched,
  commentPosted,
  commentDeleted,
  profileFetched,
  followProfilePosted,
  followProfileDeleted,
  setSelectedLanguage
};
