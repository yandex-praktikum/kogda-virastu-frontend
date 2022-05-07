import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import { ThemeProvider } from 'styled-components';
import { light } from './theme';
import { AlegreyaSansFonts, AlegreyaFonts } from './vendor/fonts';
import GlobalStyles from './ui-lib';

import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={light}>
        <BrowserRouter>
        <GlobalStyles/>
        <AlegreyaSansFonts />
        <AlegreyaFonts />
        <App />
      </BrowserRouter>
      </ThemeProvider> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
