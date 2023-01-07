import React, { useState } from "react";
import MeatBall from "../../../assets/menu_meatball";
import Settings from "../../../assets/settings";
import { HighlightedItem } from "./HighlightedItem";
import { posts as testPosts } from "../../../testData/posts";
import { Post } from "../../../types/Post";
interface HighlightedPostsProps {}

export const HighlightedPosts: React.FC<HighlightedPostsProps> = () => {
  const [posts, setPosts] = useState<Post[]>(testPosts);
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
