import { useState } from "react";
import { UserContext } from "./UserContext";
import type { Theme } from "../../types/themeType";

interface AppContextProviderProps {
   children: React.ReactNode;
}

export default function AppContextProvider({
   children,
}: AppContextProviderProps) {
   const getCurrentTheme = (): Theme => {
      const currentTheme = localStorage.getItem("theme");
      if (currentTheme) {
         return currentTheme as Theme;
      } else {
         return "dark";
      }
   };

   const [userData, setUserData] = useState({
      id: 1,
      name: "Name Surname",
      isLoggedIn: true,
      avatar: "https://innostudio.de/fileuploader/images/default-avatar.png",
      theme: getCurrentTheme() as Theme,
   });

   const login = async (email: string, password: string): Promise<void> => {
      //await request...
      console.log(email, password);
      setUserData({ ...userData, isLoggedIn: true });
   };

   const logout = (): void => {
      setUserData({ ...userData, isLoggedIn: false });
   };

   const toggleTheme = (): void => {
      if (userData.theme === "dark") {
         localStorage.setItem("theme", "light");
         setUserData({ ...userData, theme: "light" });
      } else {
         localStorage.setItem("theme", "dark");
         setUserData({ ...userData, theme: "dark" });
      }
   };

   const value = {
      ...userData,
      login,
      logout,
      toggleTheme,
   };

   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
