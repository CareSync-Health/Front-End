// ThemeContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // default theme
  const [appearance, setAppearance] = useState('default'); // default appearance

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedAppearance = localStorage.getItem('appearance');

    if (savedTheme) {
      setTheme(savedTheme);
    }

    if (savedAppearance) {
      setAppearance(savedAppearance);
    }
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleAppearanceChange = (newAppearance) => {
    setAppearance(newAppearance);
    localStorage.setItem('appearance', newAppearance);
  };

  return (
    <ThemeContext.Provider value={{ theme, appearance, handleThemeChange, handleAppearanceChange }}>
      {children}
    </ThemeContext.Provider>
  );
};