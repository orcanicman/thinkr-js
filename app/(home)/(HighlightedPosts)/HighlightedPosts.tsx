"use client";
import { Comment, Post, Prisma, Profile, User } from "@prisma/client";
import React from "react";
import MeatBall from "../../../components/assets/menu_meatball";
import Settings from "../../../components/assets/settings";
import { HighlightedItem } from "./HighlightedItem";

interface HighlightedPostsProps {
  posts: (Post & {
    _count: Prisma.PostCountOutputType;
    comments: Comment[];
    likedBy: User[];
    user: User & {
      profile: Profile | null;
    };
  })[];
}

export const HighlightedPosts: React.FC<HighlightedPostsProps> = ({
  posts,
}) => {
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
          {post.content}
        </HighlightedItem>
      ))}
    </div>
  );
};
