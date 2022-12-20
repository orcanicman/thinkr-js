import { User } from "./User";

export type Post = {
  user?: User;
  content: string;
  likes: User[];
  comments: Comment[];
};
