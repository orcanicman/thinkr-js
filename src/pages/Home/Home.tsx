import React, { useState } from "react";
import ProfileImage from "../../assets/Profile_Image.png";
import MainLayout from "../../layouts/Main";
import { posts as testPosts } from "../../testData/posts";
import { Post } from "../../types/Post";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const [posts, setPosts] = useState<Post[]>(testPosts);

  return (
    <MainLayout>
      <div className="mb-32">write post...</div>
      <div className="">
        {testPosts.map((post, i) => (
          <div
            key={i}
            className="bg-darkTransparentHighlight rounded-xl mb-8 p-6"
          >
            <div className="flex">
              <div className="mr-6">
                <img alt="Profile" src={ProfileImage} className="w-16 h-16" />
              </div>
              <div className="grow">
                <div>{post.user?.profile.name}</div>
                <div>{post.content}</div>
                <div className="flex justify-between">
                  <div>{post.likes.length}</div>
                  <div>{post.comments.length}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};
