import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  successMessage: string | null,
  errorMessage: string | null,
  isUserRegistered: boolean,
  isCurrentUserFetched: boolean,
  isUserLogged: boolean,
  isCurrentUserPatched: boolean,
  isArticlesFetched: boolean,
  isArticleFetched: boolean,
  isFeedFetched: boolean,
  isArticlePosted: boolean,
  isArticleDeleted: boolean,
  isArticlePatched: boolean,
  isLikeArticlePosted: boolean,
  isLikeArticleDeleted: boolean,
  isTagsFetched: boolean,
  isCommentsFetched: boolean,
  isCommentPosted: boolean,
  isCommentDeleted: boolean,
  isProfileFetched: boolean,
  isFollowProfilePosted: boolean,
  isFollowProfileDeleted: boolean
}

const initialState: TInitialState = {
  successMessage: null,
  errorMessage: null,
  isUserRegistered: false,
  isUserLogged: false,
  isCurrentUserFetched: false,
  isCurrentUserPatched: false,
  isArticlesFetched: false,
  isArticleFetched: false,
  isFeedFetched: false,
  isArticlePosted: false,
  isArticleDeleted: false,
  isArticlePatched: false,
  isLikeArticlePosted: false,
  isLikeArticleDeleted: false,
  isTagsFetched: false,
  isCommentsFetched: false,
  isCommentPosted: false,
  isCommentDeleted: false,
  isProfileFetched: false,
  isFollowProfilePosted: false,
  isFollowProfileDeleted: false
}

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setSuccessMessage: (state: TInitialState, action: PayloadAction<string>) => ({
      ...state, successMessage: action.payload
    }),
    setErrorMessage: (state: TInitialState, action: PayloadAction<string>) => ({
      ...state, errorMessage: action.payload
    }),
    userRegistered: (state: TInitialState) => ({
      ...state, isUserRegistered: true
    }),
    userLogged: (state: TInitialState) => ({
      ...state, isUserLogged: true
    }),
    currentUserFetched: (state: TInitialState) => ({
      ...state, isCurrentUserFetched: true
    }),
    currentUserPatched: (state: TInitialState) => ({
      ...state, isCurrentUserPatched: true
    }),
    articlesFetched: (state: TInitialState) => ({
      ...state, isArticlesFetched: true
    }),
    articleFetched: (state: TInitialState) => ({
      ...state, isArticleFetched: true
    }),
    feedFetched: (state: TInitialState) => ({
      ...state, isFeedFetched: true
    }),
    articlePosted: (state: TInitialState) => ({
      ...state, isArticlePosted: true
    }),
    articleDeleted: (state: TInitialState) => ({
      ...state, isArticleDeleted: true
    }),
    articlePatched: (state: TInitialState) => ({
      ...state, isArticlePatched: true
    }),
    likeArticlePosted: (state: TInitialState) => ({
      ...state, isLikeArticlePosted: true
    }),
    likeArticleDeleted: (state: TInitialState) => ({
      ...state, isLikeArticleDeleted: true
    }),
    tagsFetched: (state: TInitialState) => ({
      ...state, isTagsFetched: true
    }),
    commentsFetched: (state: TInitialState) => ({
      ...state, isCommentsFetched: true
    }),
    commentPosted: (state: TInitialState) => ({
      ...state, isCommentPosted: true
    }),
    commentDeleted: (state: TInitialState) => ({
      ...state, isCommentDeleted: true
    }),
    profileFetched: (state: TInitialState) => ({
      ...state, isProfileFetched: true
    }),
    followProfilePosted: (state: TInitialState) => ({
      ...state, isFollowProfilePosted: true
    }),
    followProfileDeleted: (state: TInitialState) => ({
      ...state, isFollowProfileDeleted: true
    })
  }
});

const apiReducer = apiSlice.reducer;
export const {
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
} = apiSlice.actions;
export default apiReducer;