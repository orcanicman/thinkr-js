import { Post } from "./Post";
import { Profile } from "./Profile";

export type User = {
  profile: Profile;
  posts: Post[];
  following: User[];
  followers: User[];
  likes: Post[];
};
