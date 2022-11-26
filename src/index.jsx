import './scss.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import store from './components/store/store.js';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
