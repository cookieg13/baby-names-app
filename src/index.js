import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/styles.css';
import App from './App';
import { NamesProvider } from './provider/names';
import { AppStateProvider } from './provider/appState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NamesProvider>
      <AppStateProvider>
    <App/>
    </AppStateProvider>
    </NamesProvider>
  </React.StrictMode>
);

