import type { User } from "@/types/userType";

export const currentUser: User = {
   id: 0,
   name: "Current User",
   handle: "@currentuser",
   isLoggedIn: true,
   avatar: "https://innostudio.de/fileuploader/images/default-avatar.png",
};
