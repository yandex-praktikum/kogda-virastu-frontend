import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TTags } from '../types/types';

type TNewArticleFormState = {
  title: string | null,
  description: string | null,
  body: string | null,
  tagList: TTags | null,
};

const initialState : TNewArticleFormState = {
  title: null,
  description: null,
  body: null,
  tagList: null,
};

const newArticleSubSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setTitle: (state : TNewArticleFormState, action: PayloadAction<string>) => ({
      ...state, title: action.payload,
    }),
    setDescription: (state : TNewArticleFormState, action: PayloadAction<string>) => ({
      ...state, description: action.payload,
    }),
    setBody: (state : TNewArticleFormState, action: PayloadAction<string>) => ({
      ...state, body: action.payload,
    }),
    setTags: (state : TNewArticleFormState, action: PayloadAction<TTags>) => ({
      ...state, tagList: action.payload,
    }),
    resetNewArticle: (state :TNewArticleFormState) => ({
      ...state, ...initialState,
    }),
  },
});

const newArticleReducer = newArticleSubSlice.reducer;
const {
  setTitle,
  setDescription,
  setBody,
  setTags,
  resetNewArticle,
} = newArticleSubSlice.actions;
export default newArticleReducer;
export {
  setTitle,
  setDescription,
  setBody,
  setTags,
  resetNewArticle,
};
