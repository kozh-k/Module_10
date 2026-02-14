import type { User } from "@/types/userType";

export const users: User[] = [
   {
      id: 1,
      name: "Name Surname",
      email: "user@gmail.com",
      password: "qwerty123",
      handle: "@namesurname",
      isLoggedIn: true,
      avatar: "https://innostudio.de/fileuploader/images/default-avatar.png",
   },
];

// export const users = new Set<User>(usersArray);
