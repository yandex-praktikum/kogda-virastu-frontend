import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  TArticle, TArticles, TComment, TComments, TTags,
} from '../types/types';

type TViewState = {
  feed: TArticles | null;
  article: TArticle | null;
  tagsList: TTags | null;
  selectedTags: TTags | null;
  commentsFeed: TComments | null;
  comment: TComment | null;
  page: number;
  perPage: number;
};

const initialState: TViewState = {
  feed: null,
  article: null,
  tagsList: null,
  selectedTags: null,
  commentsFeed: null,
  comment: null,
  page: 1,
  perPage: 10,
};

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setViewFeed: (state: TViewState, action:PayloadAction<TArticles>) => ({
      ...state, feed: action.payload,
    }),
    clearViewFeed: (state: TViewState) => ({
      ...state, feed: null,
    }),
    setViewTags: (state: TViewState, action:PayloadAction<TTags>) => ({
      ...state, tagsList: action.payload,
    }),
    clearViewTags: (state: TViewState) => ({
      ...state, tagsList: null, selectedTags: null,
    }),
    setViewArticle: (state: TViewState, action:PayloadAction<TArticle>) => ({
      ...state, article: action.payload,
    }),
    clearViewArticle: (state: TViewState) => ({
      ...state, article: null,
    }),
    setSelectedTags: (state: TViewState, action:PayloadAction<TTags>) => ({
      ...state, selectedTags: action.payload,
    }),
    clearSelectedTags: (state: TViewState) => ({
      ...state, selectedTags: null,
    }),
    setViewCommentsFeed: (state: TViewState, action:PayloadAction<TComments>) => ({
      ...state, commentsFeed: action.payload,
    }),
    clearViewCommentsFeed: (state: TViewState) => ({
      ...state, commentsFeed: null,
    }),
    selectViewComment: (state: TViewState, action:PayloadAction<TComment>) => ({
      ...state, comment: action.payload,
    }),
    clearViewComment: (state: TViewState) => ({
      ...state, comment: null,
    }),
    setPage: (state: TViewState, action:PayloadAction<number>) => ({
      ...state, page: action.payload,
    }),
    setPageLimit: (state: TViewState, action:PayloadAction<number>) => ({
      ...state, perPage: action.payload,
    }),
    clearView: (state: TViewState) => ({
      ...state, ...initialState,
    }),
  },
});

export const {
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
} = viewSlice.actions;
export default viewSlice.reducer;
