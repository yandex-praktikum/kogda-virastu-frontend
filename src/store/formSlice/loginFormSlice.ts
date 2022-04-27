import { createSlice } from '@reduxjs/toolkit';

type TinitialState = {
  email: string | null,
  password: string | null
};

const initialState: TinitialState = {
  email: null,
  password: null,
};

const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changePassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const loginFormReducer = loginFormSlice.reducer;
export const { changeEmail, changePassword } = loginFormSlice.actions;
