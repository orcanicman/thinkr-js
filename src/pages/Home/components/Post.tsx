import React from "react";
import { Link } from "react-router-dom";
import { Post as IPost } from "../../../types/Post";
import ProfileImage from "../../../assets/Profile_Image.png";

interface PostProps {
  post: IPost;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="bg-darkTransparentHighlight rounded-xl mb-8 p-6">
      <div className="flex">
        <div className="mr-6">
          <Link to={`/${post.user?.profile.tag}`}>
            <img
              alt="Profile"
              src={ProfileImage}
              className="w-16 h-16 rounded-full"
            />
          </Link>
        </div>
        <div className="grow">
          {/* Top stuff */}
          <div className="flex justify-between mb-4 items-baseline">
            <div className="flex flex-col">
              <div className="flex space-x-2 items-baseline">
                <Link
                  to={`/${post.user?.profile.tag}`}
                  className="text-lg font-bold hover:underline"
                >
                  {post.user?.profile.name}
                </Link>
                <Link
                  to={`/${post.user?.profile.tag}`}
                  className="text-gray text-sm hover:underline"
                >
                  @{post.user?.profile.tag}
                </Link>
              </div>
              <div className="text-gray text-sm">...time ago</div>
            </div>

            <button className="text-gray">...</button>
          </div>

          {/* actual content */}
          <div className="mb-4">{post.content}</div>

          {/* bottom stuff, likes etc */}
          <div className="flex justify-between">
            <div>{post.likes.length}</div>
            <div>{post.comments.length}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
