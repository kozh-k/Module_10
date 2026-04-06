import type { User } from "@/types/userType";

export interface Post {
   owner: User;
   date: Date;
   image?: string;
   description: string;
   likesQuantity: number;
   comments: string[];
}
