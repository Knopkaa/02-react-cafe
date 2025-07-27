import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
// @ts-ignore
import 'modern-normalize';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
