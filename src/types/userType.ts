export interface User {
   id: number;
   name: string;
   handle: string;
   avatar?: string;
   isLoggedIn: boolean;
}

export interface UserContextType extends User{
   login: (email: string, password: string) => Promise<void>;
   logout: () => void;
}
