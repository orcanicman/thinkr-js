import React from "react";
import { IPost } from "./HighlightedPosts";

interface HighlightedItemProps {
  children: React.ReactNode;
  logo?: React.ReactNode;
  post?: IPost;
}

export const HighlightedItem: React.FC<HighlightedItemProps> = ({
  children,
  logo,
  post,
}: HighlightedItemProps) => {
  return (
    <div>
      <div
        className={`flex justify-between ${
          post && "hover:underline cursor-pointer"
        }`}
      >
        <div className="">{children}</div>
        {logo && <div>{logo}</div>}
      </div>
      {post && (
        <div className="font-light text-sm text-gray">
          likes: {post.likes.length}
        </div>
      )}
    </div>
  );
};
