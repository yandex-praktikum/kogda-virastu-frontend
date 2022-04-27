import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TLanguagesData } from "../types/types";

//Прописываем здесь либо импортируем
const languagesData: TLanguagesData = {
  ru: {
    articleName: 'Название статьи',
    signUp: 'Зарегистрироваться'
  },
  en: {
    articleName: 'Article name',
    signUp: 'Register'
  }
}

type TInitialState = {
  // isLoggedIn: boolean,
  languages: TLanguagesData,
  selectedLanguage: string
};

const initialState: TInitialState = {
  // isLoggedIn: false,
  languages: languagesData,
  selectedLanguage: 'ru'
};

const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    // userLogged: (state: TInitialState) => ({
    //   ...state, isLoggedIn: true
    // }),
    // userLoggedOut: (state: TInitialState) => ({
    //   ...state, isLoggedIn: false
    // }),
    setSelectedLanguage: (state: TInitialState, action: PayloadAction<string>) => ({
      ...state, selectedLanguage: action.payload
    })
  }
})

const systemReducer = systemSlice.reducer;
export const {
  // userLogged,
  // userLoggedOut,
  setSelectedLanguage
} = systemSlice.actions;
export default systemReducer;