import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TArticles, TTags } from '../types/types';
import { TThemes } from '../types/styles.types';
import themes from '../themes';

type TAllState = {
  articles: TArticles | null;
  tags: TTags | null;
  themes: TThemes,
  themesNames: Array<string>,
};
const initialState : TAllState = {
  articles: null,
  tags: null,
  themes,
  themesNames: Object.keys(themes),
};

const allSlice = createSlice({
  name: 'all',
  initialState,
  reducers: {
    setAllArticles: (state : TAllState, action: PayloadAction<TArticles>) => ({
      ...state, articles: action.payload,
    }),
    setAllTags: (state : TAllState, action: PayloadAction<TTags>) => ({
      ...state, tags: action.payload,
    }),
    clearArticles: (state: TAllState) => ({ ...state, articles: null }),
    clearTags: (state: TAllState) => ({ ...state, tags: null }),
    clearAll: (state: TAllState) => ({ ...state, articles: null, tags: null }),
    setAllThemes: (state:TAllState, action: PayloadAction<TThemes>) => ({
      ...state, themes: action.payload,
    }),
  },
});

const allReducer = allSlice.reducer;
export const {
  setAllArticles,
  setAllTags,
  clearArticles,
  clearTags,
  clearAll,
  setAllThemes,
} = allSlice.actions;
export default allReducer;
