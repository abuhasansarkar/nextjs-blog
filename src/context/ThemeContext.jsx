"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStore = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "dark";
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStore();
  });

  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  useEffect(()=>{
    localStorage.setItem("theme", theme)
  },[theme])

  
  const value = {theme, setTheme, toggle}

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
