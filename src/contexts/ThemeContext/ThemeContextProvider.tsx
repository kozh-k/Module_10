import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "../../types/themeType";

interface IThemeContextProviderProps {
   children: React.ReactNode;
}

export default function ThemeContextProvider({
   children,
}: IThemeContextProviderProps) {
   const getCurrentTheme = (): Theme => {
      const currentTheme = localStorage.getItem("theme");
      if (currentTheme) {
         return currentTheme as Theme;
      } else {
         return "dark";
      }
   };

   const [theme, setTheme] = useState<Theme>(getCurrentTheme());

   useEffect(() => {
      const htmlElement = document.documentElement;
      htmlElement.setAttribute("theme", theme);

      localStorage.setItem("theme", theme);
   }, [theme]);

   const toggleTheme = (): void => {
      if (theme === "dark") {
         localStorage.setItem("theme", "light");
         setTheme("light");
      } else {
         localStorage.setItem("theme", "dark");
         setTheme("dark");
      }
   };

   const value = {
      theme,
      toggleTheme,
   };

   return (
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
   );
}
