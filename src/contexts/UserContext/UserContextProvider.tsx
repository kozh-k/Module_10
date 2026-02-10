import { useState } from "react";
import { UserContext } from "./UserContext";
import { users } from "../../data/users";

interface IUserContextProviderProps {
   children: React.ReactNode;
}

export default function UserContextProvider({
   children,
}: IUserContextProviderProps) {
   const [userData, setUserData] = useState(users[0]);

   const login = async (email: string, password: string): Promise<void> => {
      //await request...
      console.log(email, password);
      setUserData({ ...userData, isLoggedIn: true });
   };

   const logout = (): void => {
      setUserData({ ...userData, isLoggedIn: false });
   };

   const value = {
      ...userData,
      login,
      logout,
   };

   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
