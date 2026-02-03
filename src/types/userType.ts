import type { Theme } from "./themeType";

export interface IUser {
   id: number;
   name: string;
   avatar?: string;
   isLoggedIn: boolean;
   theme: Theme;
   login: (email: string, password: string) => Promise<void>;
   logout: () => void;
   toggleTheme: (theme: Theme) => void;
}
