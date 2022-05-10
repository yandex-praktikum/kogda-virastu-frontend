import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultTheme } from '../themes';
import { defaultLang } from '../vocabularies';

type TSystemState = {
  isLoggedIn: boolean;
  appName: string;
  currentTheme: string,
  currentLang: string,
};

const initialState: TSystemState = {
  isLoggedIn: false,
  appName: 'Real World',
  currentTheme: defaultTheme,
  currentLang: defaultLang,
};

const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    onLogin: (state: TSystemState) => ({ ...state, isLoggedIn: true }),
    onLogout: (state: TSystemState) => ({ ...state, isLoggedIn: false }),
    setTheme: (state: TSystemState, action: PayloadAction<string>) => ({
      ...state, currentTheme: action.payload,
    }),
    setLanguage: (state: TSystemState, action: PayloadAction<string>) => ({
      ...state, currentLang: action.payload,
    }),
  },
});

const systemReducer = systemSlice.reducer;
export const {
  onLogin,
  onLogout,
  setTheme,
  setLanguage,
} = systemSlice.actions;
export default systemReducer;
