import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from '../types/types';

type TProfileState = {
  username: string | null,
  email: string | null,
  bio?: string | null,
  image?: string | null
};

const initialState: TProfileState = {
  username: null,
  email: null,
  bio: null,
  image: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUser: (
      state : TProfileState,
      action: PayloadAction<TUser>,
    ) => ({ ...state, ...action.payload }),
    clearUser: (state : TProfileState) => ({
      ...initialState,
    }),
  },
});

export const profileReducer = profileSlice.reducer;
export const { setUser, clearUser } = profileSlice.actions;
export default profileReducer;
