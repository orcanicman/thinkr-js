import React, { useState } from "react";
import MainLayout from "../../layouts/Main";
import { Post } from "../../types/Post";
import { PostComponent } from "./components/PostComponent";
import { WritePost } from "./components/WritePost";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const [posts, setPosts] = useState<Post[]>([]);
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
