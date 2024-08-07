import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss'
import reportWebVitals from './reportWebVitals';
import { CssBaseline } from '@mui/material';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <CssBaseline />
      <App />
    </>
);
reportWebVitals();
