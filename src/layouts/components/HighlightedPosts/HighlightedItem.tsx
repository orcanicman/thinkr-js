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
    <div className="flex justify-between cursor-pointer">
      <div>
        <div className={`${post && "hover:underline"}`}>{children}</div>
        {post && (
          <div className="font-light text-sm text-gray">
            likes: {post.likes.length}
          </div>
        )}
      </div>
      {logo && <div>{logo}</div>}
    </div>
  );
};
