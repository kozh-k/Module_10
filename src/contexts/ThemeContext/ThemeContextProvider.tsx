import { useState, useEffect } from "react";
import { ThemeContext } from "@/contexts/ThemeContext/ThemeContext";
import type { Theme } from "@/types/themeType";

interface IThemeContextProviderProps {
   children: React.ReactNode;
}

export default function ThemeContextProvider({
   children,
}: IThemeContextProviderProps) {
   const [theme, setTheme] = useState<Theme>(() => {
      const currentTheme = localStorage.getItem("theme");
      return (currentTheme as Theme) || "dark";
   });

   // const getCurrentTheme = (): Theme => {
   //    const currentTheme = localStorage.getItem("theme");
   //    if (currentTheme) {
   //       return currentTheme as Theme;
   //    } else {
   //       return "dark";
   //    }
   // };

   useEffect(() => {
      const htmlElement = document.documentElement;
      htmlElement.setAttribute("data-theme", theme);

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
