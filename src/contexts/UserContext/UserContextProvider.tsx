import { useState, useEffect } from "react";
import { UserContext } from "@/contexts/UserContext/UserContext";
import type { User } from "@/types/userType";
import { users } from "@/data/users";

interface IUserContextProviderProps {
   children: React.ReactNode;
}

export default function UserContextProvider({
   children,
}: IUserContextProviderProps) {
   const getInitialUser = (): User => {
      const savedUser = localStorage.getItem("user");

      if (savedUser) {
         return JSON.parse(savedUser);
      }

      return {
         id: Date.now(),
         name: "",
         email: "",
         password: "",
         handle: "",
         avatar: "",
         isLoggedIn: false,
      };
   };

   const [userData, setUserData] = useState<User>(getInitialUser);
   const [accessToken, setAccessToken] = useState<string>("");

   useEffect(() => {
      localStorage.setItem("user", JSON.stringify(userData));
   }, [userData]);

   const register = async (email: string, password: string): Promise<void> => {
      const foundUser = users.find((user) => user.email === email);

      if (foundUser) {
         throw new Error("User with this email already exists", {
            cause: { type: "email" },
         });
      }

      const response = await Promise.resolve({
         id: Date.now(),
         name: "Default Name",
         email: email,
         password: password,
         handle: "",
         avatar: "https://innostudio.de/fileuploader/images/default-avatar.png",
         isLoggedIn: true,
      });

      //const responce = await... POST
      // const data = await responce.json();
      // setAccessToken(data.accessToken)

      setUserData(response);
      setAccessToken(`mock-token-${response.id}`);

      users.push(response);
   };

   const login = async (email: string, password: string): Promise<void> => {
      const foundUser = users.find((user) => user.email === email);

      if (!foundUser) {
         throw new Error("User with this email does not exist", {
            cause: { type: "email" },
         });
      }

      if (foundUser.password !== password) {
         throw new Error("Incorrect password", {
            cause: { type: "password" },
         });
      }

      const response = await Promise.resolve({
         id: Date.now(),
         name: "Default Name",
         email: email,
         password: password,
         handle: "",
         avatar: "https://innostudio.de/fileuploader/images/default-avatar.png",
         isLoggedIn: true,
      });

      //const responce = await... POST
      // const data = await responce.json();
      // setAccessToken(data.accessToken)

      setUserData(response);
      setAccessToken(`mock-token-${response.id}`);
   };

   const logout = (): void => {
      localStorage.removeItem("user");

      setAccessToken("");
      setUserData({
         id: 0,
         name: "",
         email: "",
         password: "",
         handle: "",
         avatar: "",
         isLoggedIn: false,
      });
   };

   const value = {
      ...userData,
      accessToken,
      register,
      login,
      logout,
   };

   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
