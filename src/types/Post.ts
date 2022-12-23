import { User } from "./User";

export type Post = {
  id: string;
  user?: User;
  content: string;
  likes: User[];
  comments: Comment[];
  createdAt: Date;
};
