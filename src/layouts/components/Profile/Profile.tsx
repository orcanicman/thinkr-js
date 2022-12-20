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
        <div className="basis-1/2 border-r border-r-gray mt-2 mb-2 text-sm">
          {user.following.length}
          <div className="basis-1/2 text-gray">Following</div>
        </div>

        <div className="basis-1/2 mt-2 text-sm">
          {user.followers.length}
          <div className="basis-1/2 text-gray">Followers</div>
        </div>
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
