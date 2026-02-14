import { useState } from "react";
import { UserContext } from "@/contexts/UserContext/UserContext";
import type { User } from "@/types/userType";
import { users } from "@/data/users";

interface IUserContextProviderProps {
   children: React.ReactNode;
}

export default function UserContextProvider({
   children,
}: IUserContextProviderProps) {
   const [userData, setUserData] = useState<User>({
      id: 0,
      name: "",
      email: "",
      password: "",
      handle: "",
      avatar: "",
      isLoggedIn: false,
   });
   const [accessToken, setAccessToken] = useState<string>("");

   const register = async (email: string, password: string): Promise<void> => {
      try {
         const response = await Promise.resolve({
            id: Date.now(),
            name: "Default Name",
            email: email,
            password: password,
            handle: "",
            avatar:
               "https://innostudio.de/fileuploader/images/default-avatar.png",
            isLoggedIn: true,
         });

         //const responce = await... POST
         // const data = await responce.json();
         // setAccessToken(data.accessToken)

         setUserData(response);
         setAccessToken(`mock-token-${response.id}`);

         users.push(response);
      } catch (error) {
         console.log("registration error", error);
      }
   };

   const login = async (email: string, password: string): Promise<void> => {
      const foundUser = users.find(
         (user) => user.email === email && user.password === password,
      );

      if (foundUser) {
         const response = await Promise.resolve({
            id: Date.now(),
            name: "Default Name",
            email: email,
            password: password,
            handle: "",
            avatar:
               "https://innostudio.de/fileuploader/images/default-avatar.png",
            isLoggedIn: true,
         });

         //const responce = await... POST
         // const data = await responce.json();
         // setAccessToken(data.accessToken)

         setUserData(response);
         setAccessToken(`mock-token-${response.id}`);
      } else {
         throw new Error("user is already exists");
      }
   };

   const logout = (): void => {
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
