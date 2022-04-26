import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  username: string | null,
  email: string | null,
  password: string | null
}

const initialState: TInitialState = {
  username: null,
  email: null,
  password: null
}

const registerFormSlice = createSlice({
  name: 'registerForm',
  initialState: initialState,
  reducers: {
    changeUsername(state, action) {
      state.username = action.payload;
    },
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changePassword(state, action) {
      state.password = action.payload;
    }
  }
})

export const registerFormReducer = registerFormSlice.reducer;
export const { changeUsername, changeEmail, changePassword } = registerFormSlice.actions; 
 
