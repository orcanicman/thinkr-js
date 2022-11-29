import React from "react";
import MeatBall from "../../../assets/menu_meatball";
import Settings from "../../../assets/settings";
import { HighlightedItem } from "./HighlightedItem";

export interface IUser {
  id: string;
  name: string;
  tag: string;
}

export interface IPost {
  id: string;
  title: string;
  likes: Array<IUser>;
  comments: Array<IUser>;
}

const posts: IPost[] = [
  {
    id: "qwertyuiop",
    title: "Test post",
    comments: [],
    likes: [{ id: "hlep", name: "Pieter", tag: "pieter123" }],
  },
];

interface HighlightedPostsProps {}

export const HighlightedPosts: React.FC<HighlightedPostsProps> = () => {
  return (
    <div className="bg-darkTransparentHighlight p-6 rounded-2xl space-y-2">
      <HighlightedItem logo={<Settings />}>
        <div className="font-bold text-xl">Popular posts</div>
      </HighlightedItem>
      <HighlightedItem>
        <div className="font-light text-gray text-sm uppercase">
          recent popular posts
        </div>
      </HighlightedItem>
      {posts.map((post, i) => (
        <HighlightedItem key={i} logo={<MeatBall />} post={post}>
          {post.title}
        </HighlightedItem>
      ))}
    </div>
  );
};
