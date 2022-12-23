import { Post } from "./Post";
import { User } from "./User";

export type Comment = {
  user?: User;
  content: string;
  post: Post;
  likes: User[];
};
