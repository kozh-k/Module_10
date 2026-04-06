export interface User {
   id: number;
   name: string;
   email: string;
   password: string;
   handle: string;
   avatar?: string;
   isLoggedIn: boolean;
}

export interface UserContextType extends User {
   accessToken: string;
   register: (email: string, password: string) => Promise<void>;
   login: (email: string, password: string) => Promise<void>;
   logout: () => void;
}
