import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAPIError } from '../services/api.types';

type TAPIState = {
  successMessage: string | null,
  errorMessage: string | null,
  errorObject: TAPIError | null,
  isUserRegistering: boolean,
  isUserFetching: boolean,
  isUserLoggingIn: boolean,
  isUserPatching: boolean,
  isPublicFeedFetching: boolean,
  isArticleFetching: boolean,
  isArticleNotFound: boolean,
  isPrivateFeedFetching: boolean,
  isArticlePosting: boolean,
  isArticlePostingSucceeded: boolean,
  isArticleDeleting: boolean,
  isArticleRemoved: boolean,
  isArticlePatching: boolean,
  isArticlePatchingSucceeded: boolean,
  isLikeArticlePosting: boolean,
  isLikeArticleDeleting: boolean,
  isTagsFetching: boolean,
  isCommentsFetching: boolean,
  isCommentPosting: boolean,
  isCommentDeleting: boolean,
  isProfileFetching: boolean,
  isProfileNotFound: boolean,
  isFollowProfilePosting: boolean,
  isFollowProfileDeleting: boolean,
  isSettingsPatching: boolean,
  isSettingsUpdateSucceeded: boolean,
  isAllPostsRequested: boolean,
};

const initialState: TAPIState = {
  successMessage: null,
  errorMessage: null,
  errorObject: null,
  isUserRegistering: false,
  isUserLoggingIn: false,
  isUserFetching: false,
  isUserPatching: false,
  isPublicFeedFetching: false,
  isArticleFetching: false,
  isArticleNotFound: false,
  isPrivateFeedFetching: false,
  isArticlePosting: false,
  isArticlePostingSucceeded: false,
  isArticleDeleting: false,
  isArticleRemoved: false,
  isArticlePatching: false,
  isArticlePatchingSucceeded: false,
  isLikeArticlePosting: false,
  isLikeArticleDeleting: false,
  isTagsFetching: false,
  isCommentsFetching: false,
  isCommentPosting: false,
  isCommentDeleting: false,
  isProfileFetching: false,
  isProfileNotFound: false,
  isFollowProfilePosting: false,
  isFollowProfileDeleting: false,
  isSettingsPatching: false,
  isSettingsUpdateSucceeded: false,
  isAllPostsRequested: false,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setSuccessMessage: (state: TAPIState, action: PayloadAction<string>) => ({
      ...state, successMessage: action.payload,
    }),
    clearSuccessMessage: (state: TAPIState) => ({
      ...state, successMessage: null,
    }),
    setErrorMessage: (state: TAPIState, action: PayloadAction<string>) => ({
      ...state, errorMessage: action.payload,
    }),
    clearErrorMessage: (state: TAPIState) => ({
      ...state, errorMessage: null,
    }),
    setErrorObject: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, errorObject: action.payload,
    }),
    clearErrorObject: (state: TAPIState) => ({
      ...state, errorObject: null,
    }),
    allPostsRequested: (state: TAPIState) => ({
      ...state, isAllPostsRequested: true,
    }),
    allPostsRequestSucceeded: (state: TAPIState) => ({
      ...state, isAllPostsRequested: false,
    }),
    allPostsRequestFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isUserRegistering: false, errorObject: action.payload,
    }),
    userRegistrationRequested: (state: TAPIState) => ({
      ...state, isUserRegistering: true,
    }),
    userRegistrationSucceeded: (state: TAPIState) => ({
      ...state, isUserRegistering: false,
    }),
    userRegistrationFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isUserRegistering: false, errorObject: action.payload,
    }),
    userLoginRequested: (state: TAPIState) => ({
      ...state, isUserLoggingIn: true,
    }),
    userLoginSucceeded: (state: TAPIState) => ({
      ...state, isUserLoggingIn: false,
    }),
    userLoginFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isUserLoggingIn: false, errorObject: action.payload,
    }),
    userFetchRequested: (state: TAPIState) => ({
      ...state, isUserFetching: true,
    }),
    userFetchSucceeded: (state: TAPIState) => ({
      ...state, isUserFetching: false,
    }),
    userFetchFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isUserFetching: false, errorObject: action.payload,
    }),
    userPatchRequested: (state: TAPIState) => ({
      ...state, isUserPatching: true,
    }),
    userPatchSucceeded: (state: TAPIState) => ({
      ...state, isUserPatching: false,
    }),
    userPatchFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isUserPatching: false, errorObject: action.payload,
    }),
    publicFeedRequested: (state: TAPIState) => ({
      ...state, isPublicFeedFetching: true,
    }),
    publicFeedSucceeded: (state: TAPIState) => ({
      ...state, isPublicFeedFetching: false,
    }),
    publicFeedFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isPublicFeedFetching: false, errorObject: action.payload,
    }),
    articleFetchRequested: (state: TAPIState) => ({
      ...state, isArticleFetching: true, isArticleNotFound: false,
    }),
    articleFetchSucceeded: (state: TAPIState) => ({
      ...state, isArticleFetching: false, isArticleNotFound: false,
    }),
    articleFetchFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isArticleFetching: false, errorObject: action.payload,
    }),
    setArticleFetchNotFound: (state: TAPIState) => ({
      ...state, isArticleNotFound: true,
    }),
    clearArticleFetchNotFound: (state: TAPIState) => ({
      ...state, isArticleNotFound: false,
    }),
    privateFeedRequested: (state: TAPIState) => ({
      ...state, isPrivateFeedFetching: true,
    }),
    privateFeedSucceeded: (state: TAPIState) => ({
      ...state, isPrivateFeedFetching: false,
    }),
    privateFeedFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isPrivateFeedFetching: false, errorObject: action.payload,
    }),
    articlePostRequested: (state: TAPIState) => ({
      ...state, isArticlePosting: true, sArticlePostingSucceeded: false,
    }),
    articlePostSucceeded: (state: TAPIState) => ({
      ...state, isArticlePosting: false, isArticlePostingSucceeded: true,
    }),
    articlePostClear: (state: TAPIState) => ({
      ...state,
      isArticlePosting: false,
      isArticlePostingSucceeded: false,
      successMessage: null,
      errorMessage: null,
      errorObject: null,
    }),
    articlePostFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isArticlePosting: false, errorObject: action.payload,
    }),
    articleDeleteRequested: (state: TAPIState) => ({
      ...state, isArticleDeleting: true, isArticleRemoved: false,
    }),
    articleDeleteSucceeded: (state: TAPIState) => ({
      ...state, isArticleDeleting: false, isArticleRemoved: true,
    }),
    articleDeleteFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isArticleDeleting: false, errorObject: action.payload,
    }),
    articleDeleteClear: (state: TAPIState) => ({
      ...state,
      isArticleDeleting: false,
      isArticleRemoved: false,
      successMessage: null,
      errorMessage: null,
      errorObject: null,
    }),
    articlePatchRequested: (state: TAPIState) => ({
      ...state, isArticlePatching: true,
    }),
    articlePatchSucceeded: (state: TAPIState) => ({
      ...state, isArticlePatching: false, isArticlePatchingSucceeded: true,
    }),
    articlePatchClear: (state: TAPIState) => ({
      ...state,
      isArticlePatching: false,
      isArticlePatchingSucceeded: false,
      successMessage: null,
      errorMessage: null,
      errorObject: null,
    }),
    articlePatchFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isArticlePatching: false, errorObject: action.payload,
    }),
    likeArticlePostRequested: (state: TAPIState) => ({
      ...state, isLikeArticlePosting: true,
    }),
    likeArticlePostSucceeded: (state: TAPIState) => ({
      ...state, isLikeArticlePosting: false,
    }),
    likeArticlePostFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isLikeArticlePosting: false, errorObject: action.payload,
    }),
    likeArticleDeleteRequested: (state: TAPIState) => ({
      ...state, isLikeArticleDeleting: true,
    }),
    likeArticleDeleteSucceeded: (state: TAPIState) => ({
      ...state, isLikeArticleDeleting: false,
    }),
    likeArticleDeleteFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isLikeArticleDeleting: false, errorObject: action.payload,
    }),
    tagsFetchRequested: (state: TAPIState) => ({
      ...state, isTagsFetching: true,
    }),
    tagsFetchSucceeded: (state: TAPIState) => ({
      ...state, isTagsFetching: false,
    }),
    tagsFetchFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isTagsFetching: false, errorObject: action.payload,
    }),
    commentsFetchRequested: (state: TAPIState) => ({
      ...state, isCommentsFetching: true,
    }),
    commentsFetchSucceeded: (state: TAPIState) => ({
      ...state, isCommentsFetching: false,
    }),
    commentsFetchFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isCommentsFetching: false, errorObject: action.payload,
    }),
    commentPostRequested: (state: TAPIState) => ({
      ...state, isCommentPosting: true,
    }),
    commentPostSucceeded: (state: TAPIState) => ({
      ...state, isCommentPosting: false,
    }),
    commentPostFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isCommentPosting: false, errorObject: action.payload,
    }),
    commentDeleteRequested: (state: TAPIState) => ({
      ...state, isCommentDeleting: true,
    }),
    commentDeleteSucceeded: (state: TAPIState) => ({
      ...state, isCommentDeleting: false,
    }),
    commentDeleteFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isCommentDeleting: false, errorObject: action.payload,
    }),
    profileFetchRequested: (state: TAPIState) => ({
      ...state, isProfileFetching: true, isProfileNotFound: false,
    }),
    profileFetchSucceeded: (state: TAPIState) => ({
      ...state, isProfileFetching: false, isProfileNotFound: false,
    }),
    profileFetchFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isProfileFetching: false, errorObject: action.payload,
    }),
    setProfileFetchNotFound: (state: TAPIState) => ({
      ...state, isProfileNotFound: true,
    }),
    clearProfileFetchNotFound: (state: TAPIState) => ({
      ...state, isProfileNotFound: false,
    }),
    followProfilePostRequested: (state: TAPIState) => ({
      ...state, isFollowProfilePosting: true,
    }),
    followProfilePostSucceeded: (state: TAPIState) => ({
      ...state, isFollowProfilePosting: false,
    }),
    followProfilePostFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isFollowProfilePosting: false, errorObject: action.payload,
    }),
    followProfileDeleteRequested: (state: TAPIState) => ({
      ...state, isFollowProfileDeleting: true,
    }),
    followProfileDeleteSucceeded: (state: TAPIState) => ({
      ...state, isFollowProfileDeleting: false,
    }),
    followProfileDeleteFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isFollowProfileDeleting: false, errorObject: action.payload,
    }),
    settingsPatchRequested: (state: TAPIState) => ({
      ...state, isSettingsPatching: true, isSettingsUpdateSucceeded: false,
    }),
    settingsPatchSucceeded: (state: TAPIState) => ({
      ...state, isSettingsPatching: false, isSettingsUpdateSucceeded: true,
    }),
    settingsResetUpdateSucceeded: (state: TAPIState) => ({
      ...state, isSettingsUpdateSucceeded: false, errorObject: null,
    }),
    settingsPatchFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state,
      isSettingsPatching: false,
      isSettingsUpdateSucceeded: false,
      errorObject: action.payload,
    }),
  },
});

const apiReducer = apiSlice.reducer;
export const {
  setSuccessMessage,
  setErrorMessage,
  clearSuccessMessage,
  clearErrorMessage,
  clearErrorObject,
  setErrorObject,
  userRegistrationRequested,
  userRegistrationSucceeded,
  userRegistrationFailed,
  userLoginRequested,
  userLoginSucceeded,
  userLoginFailed,
  userFetchRequested,
  userFetchSucceeded,
  userFetchFailed,
  userPatchRequested,
  userPatchSucceeded,
  userPatchFailed,
  publicFeedRequested,
  publicFeedSucceeded,
  publicFeedFailed,
  articleFetchRequested,
  articleFetchSucceeded,
  articleFetchFailed,
  privateFeedRequested,
  privateFeedSucceeded,
  privateFeedFailed,
  articlePostRequested,
  articlePostSucceeded,
  articlePostFailed,
  articleDeleteRequested,
  articleDeleteSucceeded,
  articleDeleteFailed,
  articlePatchRequested,
  articlePatchSucceeded,
  articlePatchFailed,
  likeArticlePostRequested,
  likeArticlePostSucceeded,
  likeArticlePostFailed,
  likeArticleDeleteRequested,
  likeArticleDeleteSucceeded,
  likeArticleDeleteFailed,
  tagsFetchRequested,
  tagsFetchSucceeded,
  tagsFetchFailed,
  commentsFetchRequested,
  commentsFetchSucceeded,
  commentsFetchFailed,
  commentPostRequested,
  commentPostSucceeded,
  commentPostFailed,
  commentDeleteRequested,
  commentDeleteSucceeded,
  commentDeleteFailed,
  profileFetchRequested,
  profileFetchSucceeded,
  profileFetchFailed,
  followProfilePostRequested,
  followProfilePostSucceeded,
  followProfilePostFailed,
  followProfileDeleteRequested,
  followProfileDeleteSucceeded,
  followProfileDeleteFailed,
  settingsPatchFailed,
  settingsPatchRequested,
  settingsPatchSucceeded,
  settingsResetUpdateSucceeded,
  allPostsRequested,
  allPostsRequestSucceeded,
  allPostsRequestFailed,
  setArticleFetchNotFound,
  clearArticleFetchNotFound,
  clearProfileFetchNotFound,
  setProfileFetchNotFound,
  articleDeleteClear,
  articlePatchClear,
  articlePostClear,
} = apiSlice.actions;
export default apiReducer;
