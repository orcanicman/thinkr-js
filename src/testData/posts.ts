import { Post } from "../types/Post";
import { user } from "./users";

export const post: Post = {
  user: user,
  id: "dy23ui34o624wy12eq",
  content: "this is a test post...",
  comments: [],
  likes: [],
  createdAt: new Date(),
};

export const posts: Post[] = [
  post,
  {
    id: "dy23ui34o624wy12e1",
    user: user,
    content: "this is a second test post...",
    comments: [],
    likes: [],
    createdAt: new Date("12/21/2022"),
  },
];
