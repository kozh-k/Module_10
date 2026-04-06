import type { Post } from "@/types/postType";
import { users } from "@/data/users";

export const posts: Post[] = [
   {
      owner: users[0],
      date: new Date("2026-02-12T15:30:45"),
      image: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
      description: "Post description",
      likesQuantity: 99,
      comments: ["first comment", "second comment"],
   },
   {
      owner: users[0],
      date: new Date("2026-02-10T12:30:00"),
      image: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
      description: "Post description longer",
      likesQuantity: 5,
      comments: [],
   },
   {
      owner: users[0],
      date: new Date("2026-02-13T05:40:28"),
      description: "Post description without image",
      likesQuantity: 15,
      comments: ["first comment", "second comment", "third comment"],
   },
];
