// Supports weights 200-800
import '@fontsource-variable/plus-jakarta-sans';
import '@fontsource/balsamiq-sans';
// Supports weights 400-900
import '@fontsource-variable/playfair-display';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styles from './index.module.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
