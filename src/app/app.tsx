import React, { useEffect } from 'react';
import { /* Route, */ Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { useDispatch, useSelector } from '../services/hooks';

import { jwt } from '../services/api';

import { getPublicFeedThunk, getUserThunk } from '../thunks';
import basicThemes, { defaultTheme } from '../themes/index';
import { setLanguage } from '../store';

/* import NotFound from '../pages/not-found'; */

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
        {/* Тут будет шапка */}
        <Routes>
          {/* Тут будет роутинг  */}
        </Routes>
        {/* Тут будет подвал */}
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
