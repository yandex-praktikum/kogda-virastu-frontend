import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TArticles, TTags } from '../types/types';
import { TThemes } from '../types/styles.types';
import themes from '../themes';
import { TVocabularies } from '../types/vocabularies.types';
import vocabularies from '../vocabularies';

type TAllState = {
  articles: TArticles | null;
  articlesCount: number;
  tags: TTags | null;
  themes: TThemes,
  themesNames: Array<string>,
  vocabularies: TVocabularies,
  langNames: Array<string>,
};
const initialState : TAllState = {
  articles: null,
  articlesCount: 0,
  tags: null,
  themes,
  themesNames: Object.keys(themes),
  vocabularies,
  langNames: Object.keys(vocabularies),
};

const allSlice = createSlice({
  name: 'all',
  initialState,
  reducers: {
    setAllArticles: (state : TAllState, action: PayloadAction<TArticles>) => ({
      ...state, articles: action.payload,
    }),
    setAllArticlesCount: (state: TAllState, action: PayloadAction<number>) => ({
      ...state, articlesCount: action.payload,
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
    setAllVocabularies: (state: TAllState, action:PayloadAction<TVocabularies>) => ({
      ...state, vocabularies: action.payload,
    }),
  },
});

const allReducer = allSlice.reducer;
export const {
  setAllArticles,
  setAllArticlesCount,
  setAllTags,
  clearArticles,
  clearTags,
  clearAll,
  setAllThemes,
  setAllVocabularies,
} = allSlice.actions;
export default allReducer;
