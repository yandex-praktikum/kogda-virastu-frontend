import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  all: [],
  tags: [],
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    getArticlesSuccess(state, action) {
      state.all = action.payload;
    },
    getTagsSuccess(state, action) {
      state.tags = action.payload;
    },
  },
});

export const articlesReducer = articlesSlice.reducer;
export const { getArticlesSuccess, getTagsSuccess } = articlesSlice.actions;
