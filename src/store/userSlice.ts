import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from '../types/types';

type TUserState = {
  username: string | null;
  email: string | null;
  bio?: string | null;
  image?: string | null;
  nickname?: string | null;
  invite: string | null;
  generatedInvite?: string | null;
};

const initialState: TUserState = {
  username: null,
  email: null,
  bio: null,
  image: null,
  nickname: null,
  invite: null,
  generatedInvite: null,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUser>) => ({
      ...state,
      ...action.payload,
    }),
    setGeneratedInvite: (state, action: PayloadAction<string>) => ({
      ...state,
      generatedInvite: action.payload,
    }),
    clearUser: (state) => ({
      ...state,
      ...initialState,
    }),
  },
});

const userReducer = userSlice.reducer;
export const { setUser, clearUser, setGeneratedInvite } = userSlice.actions;
export default userReducer;
