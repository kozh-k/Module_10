import { useState } from "react";
import { UserContext } from "@/contexts/UserContext/UserContext";
import { currentUser } from "@/data/currentUser";

interface IUserContextProviderProps {
   children: React.ReactNode;
}

export default function UserContextProvider({
   children,
}: IUserContextProviderProps) {
   const [userData, setUserData] = useState(currentUser);
   const [accessToken, setAccessToken] = useState<string>("");

   const login = async (email: string, password: string): Promise<void> => {
      try {
         //await request...
         
         //const responce = await...
         // const data = await responce.json();
         // setAccessToken(data.accessToken);

         console.log(email, password);
         setUserData({ ...userData, isLoggedIn: true });
      } catch (error) {
         console.log('login', error);
      }
   };

   const logout = (): void => {
      setAccessToken('');
      setUserData({ ...userData, isLoggedIn: false });
   };

   const value = {
      ...userData,
      accessToken,
      login,
      logout,
   };

   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
