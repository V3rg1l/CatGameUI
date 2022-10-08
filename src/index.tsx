import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/File/App';
import FilesManager from './pages/File/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);

