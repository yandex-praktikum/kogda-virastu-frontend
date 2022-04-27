import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from '../types/types';

type TProfileFormState = {
  username: string | null;
  email: string | null;
  bio: string | null;
  image: string | null;
};

const initialState : TProfileFormState = {
  username: null,
  email: null,
  bio: null,
  image: null,
};

const profileSubSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUsernameProfile: (state : TProfileFormState, action: PayloadAction<string>) => ({
      ...state, username: action.payload,
    }),
    setEmailProfile: (state : TProfileFormState, action: PayloadAction<string>) => ({
      ...state, email: action.payload,
    }),
    setBioProfile: (state : TProfileFormState, action: PayloadAction<string>) => ({
      ...state, bio: action.payload,
    }),
    setImageProfile: (state : TProfileFormState, action: PayloadAction<string>) => ({
      ...state, image: action.payload,
    }),
    setFormProfile: (state : TProfileFormState, action : PayloadAction<TUser>) => ({
      ...state, ...action.payload,
    }),
    resetFormProfile: (state :TProfileFormState) => ({
      ...state, ...initialState,
    }),
  },
});

const profileReducer = profileSubSlice.reducer;
export const {
  setUsernameProfile,
  setEmailProfile,
  setBioProfile,
  setImageProfile,
} = profileSubSlice.actions;
export default profileReducer;
