import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProviderWrapper } from './context/theme.context';
import { AuthProviderWrapper } from './context/theme.context';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <ThemeProviderWrapper>
          <App />
        </ThemeProviderWrapper>
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();