import { createContext } from "react";
import type { IUser } from "../../types/userType";

export const UserContext = createContext<IUser>({} as IUser);