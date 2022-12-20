import { User } from "./User";

export type Profile = {
  user?: User;
  picture: string;
  background: string;
  bio: string;
  tag: string;
  email: string;
  name: string;
};
