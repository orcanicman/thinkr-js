import { Comment, Post, Prisma, Profile, User } from "@prisma/client";
import React from "react";

interface HighlightedItemProps {
  children: React.ReactNode;
  logo?: React.ReactNode;
  post?: Post & {
    _count: Prisma.PostCountOutputType;
    comments: Comment[];
    likedBy: User[];
    user: User & {
      profile: Profile | null;
    };
  };
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
            likes: {post.likedBy.length}
          </div>
        )}
      </div>
      {logo && <div>{logo}</div>}
    </div>
  );
};
