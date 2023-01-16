"use client";
import BackgroundImage from "../../../components/assets/test_background_img.jpg";
import ProfileImage from "../../../components/assets/Profile_Image.png";
import { Profile as IProfile, User } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";

interface ProfileProps {
  user: User & { profile: IProfile; followedBy: User[]; isFollowing: User[] };
}

export const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="flex flex-col bg-darkTransparentHighlight w-full rounded-2xl">
      <div className="flex flex-col">
        <Image
          src={BackgroundImage}
          alt="profile background"
          className="w-full h-24 rounded-t-2xl"
        />
        <Image
          src={ProfileImage}
          alt="profile"
          className="w-16 h-16 rounded-2xl mx-auto -mt-8"
        />
      </div>
      <div className="border-b border-b-gray text-center">
        <div className="text-xl font-bold">{user.profile.name}</div>
        <div className="text-gray text-sm mb-2">@{user.profile.tag}</div>
        <div className="text-center mb-6">{user.profile.bio}</div>
      </div>

      <div className="flex text-center">
        <Link
          href={`/${user.profile.tag}/following`}
          className="basis-1/2 py-2 hover:cursor-pointer hover:bg-darkHighlight border-r border-r-gray text-sm"
        >
          {user.isFollowing.length}
          <div className="text-gray">Following</div>
        </Link>

        <Link
          href={`/${user.profile.tag}/followers`}
          className="basis-1/2 py-2 hover:cursor-pointer hover:bg-darkHighlight text-sm"
        >
          {user.followedBy.length}
          <div className="text-gray">Followers</div>
        </Link>
      </div>
      <div className="border-t border-t-gray p-4 w-full justify-center flex">
        <Link
          href={`/${user.profile.tag}`}
          className="underline text-green cursor-pointer text-sm"
        >
          Show Profile
        </Link>
      </div>
    </div>
  );
};
