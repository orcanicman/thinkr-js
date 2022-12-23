import React from "react";
import { Post } from "../../../types/Post";

interface PostComponentProps {
  post: Post;
}

export const PostComponent: React.FC<PostComponentProps> = ({}) => {
  return <div>...post</div>;
};
