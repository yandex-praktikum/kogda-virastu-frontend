import React, { useEffect } from 'react';
import {  Route,  Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { useDispatch, useSelector } from '../services/hooks';

import { jwt } from '../services/api';

import { getPublicFeedThunk, getUserThunk } from '../thunks';
import basicThemes, { defaultTheme } from '../themes/index';
import { setLanguage } from '../store';
import Header from '../widgets/Header';
import Footer from '../widgets/Footer';
import Profile from '../pages/profile';
import NotFound from '../pages/not-found';
import Main from '../pages/main';
import Login from '../pages/login';
import Register from '../pages/register';
import Settings from '../pages/settings';
import ArticlePage from '../pages/aricle';
import Editor from '../pages/editor';


const App = () => {
  const dispatch = useDispatch();
  const { currentTheme, currentLang } = useSelector((state) => state.system);
  const { themes, langNames, vocabularies } = useSelector((state) => state.all);

  useEffect(() => {
    if (jwt.test()) {
      dispatch(getUserThunk());
      dispatch(getPublicFeedThunk());
    }
    const language = navigator.language.split('-')[0];
    if (langNames.includes(language)) {
      dispatch(setLanguage(language));
    }
  }, [dispatch, langNames]);

  return (
    <IntlProvider locale={currentLang} messages={vocabularies[currentLang]}>
      <ThemeProvider theme={
                    themes[currentTheme ?? defaultTheme]
                    ?? basicThemes[currentTheme ?? defaultTheme]
                }>
        <Header />
        <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/registration' element={<Register />} />
        <Route path='/:username' element={<Profile />} />
        <Route path='/editArticle' element={<Editor />} />
        <Route path='/:username' element={<Profile />} />
        <Route path='/articles/:user' element={<ArticlePage />} />
        <Route path='*' element={<NotFound />} />
          {/* Тут будет роутинг  */}
        </Routes>
        <Footer />
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
