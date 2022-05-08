import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TSystemState = {
  isLoggedIn: boolean;
  appName: string;
  currentTheme: string,
};

const initialState: TSystemState = {
  isLoggedIn: false,
  appName: 'Real World',
  currentTheme: 'light',
};

const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    onLogin: (state: TSystemState) => ({ ...state, isLoggedIn: true }),
    onLogout: (state: TSystemState) => ({ ...state, isLoggedIn: false }),
    setTheme: (state: TSystemState, action: PayloadAction<string>) => ({
      ...state, currentTheme: action.payload      
    })
  },
});

const systemReducer = systemSlice.reducer;
export const {
  onLogin,
  onLogout,
  setTheme,
} = systemSlice.actions;
export default systemReducer;
