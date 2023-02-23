import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import { ThemeProvider } from '@emotion/react';
import { theme } from './mui';
 
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <ThemeProvider theme= {theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </Router>    
);
