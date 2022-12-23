import React, { useState } from "react";
import MainLayout from "../../layouts/Main";
import { posts as testPosts } from "../../testData/posts";
import { Post } from "../../types/Post";
import { Post as PostComponent } from "./components/Post";
import { WritePost } from "./components/WritePost";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const [posts, setPosts] = useState<Post[]>(testPosts);

  return (
    <MainLayout>
      <div className="">
        <WritePost />
      </div>
      <div className="">
        {posts.map((post, i) => (
          <PostComponent key={i} post={post} />
        ))}
      </div>
    </MainLayout>
  );
};
