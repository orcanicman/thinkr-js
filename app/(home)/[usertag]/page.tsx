import BackgroundImage from "../../../components/assets/test_background_img.jpg";
import ProfileImage from "../../../components/assets/Profile_Image.png";
import Image from "next/image";
import { getProfileWithUserByTag } from "../../../lib/users";
import { Post } from "../Post";

const getUser = async (tag: string) => {
  const { profile, error } = await getProfileWithUserByTag(tag);

  return profile;
};

const Page = async ({
  params: { usertag },
}: {
  params: { usertag: string };
}) => {
  const following = true;
  let currTab = "posts";

  const profile = await getUser(usertag);
  return (
    <div>
      <div className="flex flex-col bg-darkTransparentHighlight w-full rounded-2xl mb-8">
        <div className="flex flex-col">
          <Image
            src={BackgroundImage}
            alt="profile background"
            className="w-full h-64 object-cover object-center rounded-t-2xl"
          />
          <Image
            src={ProfileImage}
            alt="profile"
            className="w-28 h-28 rounded-2xl -mt-12 ml-10"
          />
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-col ml-10 mb-1 space-y-2">
            <div className="space-x-3">
              <span className="font-bold text-2xl">
                {profile?.name ?? `@${usertag}`}
              </span>
              <span className="text-gray">
                {profile?.tag && `@${profile?.tag}`}
              </span>
            </div>
            <div>{profile?.bio}</div>
          </div>
          <button
            className={`px-2 py-1 m-4 h-fit border-[1px] rounded-3xl duration-75 border-gray hover:bg-mainDark ${
              following ? "bg-gray" : ""
            }`}
          >
            {following ? "Unfollow" : "Follow"}
          </button>
        </div>

        <div className="flex flex-row justify-between text-center">
          <div className="p-3 flex-grow rounded-bl-2xl hover:bg-darkHighlight hover:cursor-pointer duration-75 ease-out transition-all flex flex-col justify-center items-center">
            <p>Posts</p>
            <div
              className={`h-1 bg-green rounded-xl duration-200 ease-in-out ${
                currTab === "posts" ? "w-1/2" : "w-0"
              }`}
            ></div>
          </div>
          <div className="p-3 flex-grow hover:bg-darkHighlight hover:cursor-pointer duration-75 ease-out transition-all flex flex-col justify-center items-center">
            <p>Liked posts</p>
            <div
              className={`h-1 bg-green rounded-xl duration-200 ease-in-out ${
                currTab === "liked" ? "w-1/2" : "w-0"
              }`}
            ></div>
          </div>
          <div className="p-3 flex-grow rounded-br-2xl hover:bg-darkHighlight hover:cursor-pointer duration-75 ease-out transition-all flex flex-col justify-center items-center">
            <p>Comments</p>
            <div
              className={`h-1 w-1/2 bg-green rounded-xl duration-200 ease-in-out ${
                currTab === "comments" ? "w-1/2" : "w-0"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div className="">
        {profile?.user.posts.length
          ? profile?.user.posts.map((post, i) => (
              <Post key={i} post={post} data-superjson />
            ))
          : "this user has no posts"}
      </div>
    </div>
  );
};

export default Page;
