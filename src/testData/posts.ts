import { Post } from "../types/Post";
import { user } from "./users";

export const post: Post = {
  user: user,
  content: "this is a test post...",
  comments: [],
  likes: [],
};

export const posts: Post[] = [
  post,
  {
    user: user,
    content: "this is a second test post...",
    comments: [],
    likes: [],
  },
];
