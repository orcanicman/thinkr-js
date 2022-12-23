import BackgroundImage from "../../../assets/test_background_img.jpg";
import ProfileImage from "../../../assets/Profile_Image.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { User } from "../../../types/User";
import { user as testUser } from "../../../testData/users";

export const Profile = () => {
  // todo: make a user provider.
  const [user, setUser] = useState<User>(testUser);

  return (
    <div className="flex flex-col bg-darkTransparentHighlight w-full rounded-2xl">
      <div className="flex flex-col">
        <img
          // should be src={user.profile.background}
          src={BackgroundImage}
          alt="profile background"
          className="w-full h-24 rounded-t-2xl"
        />
        <img
          // should be src={user.profile.picture}
          src={ProfileImage}
          className="w-16 h-16 rounded-2xl mx-auto -mt-8"
          alt="profile"
        />
      </div>
      <div className="border-b border-b-gray text-center">
        <div className="text-xl font-bold">{user.profile.name}</div>
        <div className="text-gray text-sm mb-2">@{user.profile.tag}</div>
        <div className="text-center mb-6">{user.profile.bio}</div>
      </div>

      <div className="flex text-center">
        <Link
          to={`/${user.profile.tag}/following`}
          className="basis-1/2 py-2 hover:cursor-pointer hover:bg-darkHighlight border-r border-r-gray text-sm"
        >
          {user.following.length}
          <div className="text-gray">Following</div>
        </Link>

        <Link
          to={`/${user.profile.tag}/followers`}
          className="basis-1/2 py-2 hover:cursor-pointer hover:bg-darkHighlight text-sm"
        >
          {user.followers.length}
          <div className="text-gray">Followers</div>
        </Link>
      </div>
      <div className="border-t border-t-gray p-4 w-full justify-center flex">
        <Link
          to={`/${user.profile.tag}`}
          className="underline text-green cursor-pointer text-sm"
        >
          Show Profile
        </Link>
      </div>
    </div>
  );
};
