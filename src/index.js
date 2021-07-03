import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { NavContextProvider } from './context/navContext';

ReactDOM.render(
  <React.StrictMode>
    <NavContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NavContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);