import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import '@fortawesome/fontawesome-free/js/all';
import App from './App';
import { NavContextProvider } from './context/navContext';
import { ThemeContextProvider } from './context/themeContext';
import ProjectContextProvider from './context/projectContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <NavContextProvider>
        <ProjectContextProvider>
          <BrowserRouter >
            <App />
          </BrowserRouter>
        </ProjectContextProvider>
      </NavContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);