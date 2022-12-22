import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Post as IPost } from "../../../types/Post";
import ProfileImage from "../../../assets/Profile_Image.png";
import { LikeIcon } from "../../../assets/LikeIcon";
import { RepostIcon } from "../../../assets/RepostIcon";
import { CommentIcon } from "../../../assets/CommentIcon";
import { relativeDateFormatter } from "../../../helpers/relativeDateFormatter";
import { ShareIcon } from "../../../assets/ShareIcon";

interface PostProps {
  post: IPost;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/${post.user?.profile.tag}/${post.id}`)}
      className="flex w-full text-left bg-darkTransparentHighlight hover:bg-darkHighlight rounded-xl mb-8 p-6 -z-10"
    >
      <div className="mr-6 relative">
        {/* overlay */}
        <Link to={`/${post.user?.profile.tag}`}>
          <div className="absolute top-0 left-0 w-16 h-16 rounded-full shadow-black shadow-[inset_0px_0px_6px_rgba(0,0,0,0.5)] opacity-0 hover:opacity-100"></div>
          <img
            alt="Profile"
            src={ProfileImage}
            className="w-16 h-16 rounded-full"
          />
        </Link>
      </div>
      <div className="grow">
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
            <div className="text-gray text-sm">
              {relativeDateFormatter(post.createdAt.getTime())}
            </div>
          </div>

          <button className="text-gray">...</button>
        </div>

        <div className="mb-8">{post.content}</div>

        <div className="flex justify-between">
          <Button
            className="bg-red"
            icon={<LikeIcon />}
            title="Like"
            amount={post.likes.length}
          />
          <Button
            className="bg-green"
            icon={<RepostIcon />}
            title="Repost"
            amount={0}
          />
          <Button
            className="bg-blue"
            icon={<CommentIcon />}
            title="Comment"
            amount={post.comments.length}
          />
          <Button icon={<ShareIcon />} title="Share" />
        </div>
      </div>
    </button>
  );
};

const Button: React.FC<{
  title: string;
  icon: React.ReactNode;
  amount?: number;
  className?: string | undefined;
  onClick?: () => void;
}> = ({ title, icon, amount, className }) => {
  return (
    <button
      onSubmit={() => console.log("help")}
      className="border-gray border px-2 py-1 rounded-3xl relative hover:bg-mainDark duration-100 transition-all"
    >
      {amount !== undefined && (
        <div
          className={`absolute -top-2 -right-2 text-xs ${
            className ?? "bg-green"
          } px-2 py-[0.0625rem] rounded-full`}
        >
          {Intl.NumberFormat("en-US", {
            notation: "compact",
            maximumFractionDigits: 1,
          }).format(amount)}
        </div>
      )}
      <div className={`flex items-center space-x-2 p-1`}>
        <div>{icon}</div>
        <div>{title}</div>
      </div>
    </button>
  );
};
