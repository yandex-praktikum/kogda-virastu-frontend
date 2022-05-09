import React, { useEffect } from 'react';
import {
  Route, Routes,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { useDispatch, useSelector } from '../services/hooks';
import Profile from './Profile/Profile';
import Header from './Header';
import Editor from './Editor';
import Register from './Register';
import Login from './Login';
import Settings from './Settings/Settings';
import { jwt } from '../services/api';
import Home from './Home';
import Article from './Article/index';
import { getUserThunk } from '../thunks';
import basicThemes, { defaultTheme } from '../themes/index';
import { ru, en } from '../vocabularies';

const App = () => {
  const dispatch = useDispatch();
  const { currentTheme } = useSelector((state) => state.system);
  const { themes } = useSelector((state) => state.all);
  useEffect(() => {
    if (jwt.test()) {
      dispatch(getUserThunk());
    }
  }, [dispatch]);

  const language = navigator.language.split('-')[0];
  let vocabulary = {};
  switch (language) {
    case 'ru':
      vocabulary = ru;
      break;
    case 'en':
      vocabulary = en;
      break;
    default: vocabulary = ru;
  }

  return (
    <div>
      <IntlProvider locale={language} messages={vocabulary}>
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
          </Routes>
        </ThemeProvider>
      </IntlProvider>
    </div>
  );
};

export default App;
