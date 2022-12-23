import React, { useState } from "react";
import MainLayout from "../../layouts/Main";
import { PostComponent } from "./components/PostComponent";
import { WritePost } from "./components/WritePost";
import { posts as testPosts } from "../../testData/posts";
import { Post } from "../../types/Post";

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
