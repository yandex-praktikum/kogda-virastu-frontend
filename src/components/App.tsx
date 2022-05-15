import React, { useEffect } from 'react';
import {
  Route, Routes,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { useDispatch, useSelector } from '../services/hooks';
import  Profile  from '../pages/profile';

import Editor from '../pages/editor';
import Register from './Register';
import Login from './Login';
import Settings from './Settings/Settings';
import { jwt } from '../services/api';
import Home from './Home';
import Article from './Article/index';
import { getUserThunk } from '../thunks';
import basicThemes, { defaultTheme } from '../themes/index';
import { setLanguage } from '../store';
import Header from '../widgets/Header';

import NotFound from '../pages/not-found';

const App = () => {
  const dispatch = useDispatch();
  const { currentTheme, currentLang } = useSelector((state) => state.system);
  const { themes, langNames, vocabularies } = useSelector((state) => state.all);

  useEffect(() => {
    if (jwt.test()) {
      dispatch(getUserThunk());
    }
  }, [dispatch]);

  useEffect(() => {
    const language = navigator.language.split('-')[0];
    if (langNames.includes(language)) {
      dispatch(setLanguage(language));
    }
  }, [dispatch]);
  return (
    <div>
      <IntlProvider locale={currentLang} messages={vocabularies[currentLang]}>
        <ThemeProvider theme={
          themes[currentTheme ?? defaultTheme]
          ?? basicThemes[currentTheme ?? defaultTheme]
        }>
          <Header />
    
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/article/:id' element={<Article />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/editor/:slug' element={<Editor />} />
            <Route path='/editor' element={<Editor />} />
            <Route path='/:username' element={<Profile />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </IntlProvider>
    </div>
  );
};

export default App;
