import React from 'react';
import { createContext, useState } from "react";

const initialThemeMode = localStorage.getItem('themeMode') || 'dark';
const ThemeContext = createContext({
  themeMode: initialThemeMode,
  toggleTheme: () => {},
  setTheme: theme => {},
});

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(initialThemeMode);

  const toggleThemeHandler = () => {
    setTheme(prevTheme => {
      const updTheme = prevTheme === 'dark' ? 'light' : 'dark';
      updTheme === 'dark' ? document.body.classList.add('dark') : document.body.classList.remove('dark')
      localStorage.setItem('themeMode', updTheme);
      return updTheme;
    })
  }
  const setThemeHandler = theme => {
    localStorage.setItem('themeMode', theme);
    setTheme(theme)
  }

  const context = {
    themeMode: theme,
    toggleTheme: toggleThemeHandler,
    setTheme: setThemeHandler,
  };

  return <ThemeContext.Provider value={context}>
    {props.children}
  </ThemeContext.Provider>
}

export default ThemeContext;