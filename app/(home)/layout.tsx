import { getPosts } from "../../lib/posts";
import { HighlightedPosts } from "./(HighlightedPosts)/HighlightedPosts";
import { Profile } from "./(Profile)/Profile";
import TopBar from "./TopBar";

interface MainProps {
  children: React.ReactNode;
}

const getData = async () => {
  const { posts, error } = await getPosts();
  if (!posts) {
    throw new Error("Failed to fetch data");
  }

  return posts;
};

const MainLayout = async ({ children }: MainProps) => {
  const posts = await getData();

  return (
    <div className="bg-mainDark min-h-screen text-mainLight">
      <TopBar />
      <div className="flex">
        <div className="hidden md:block md:w-[16rem] md:min-w-[16rem] xl:min-w-[24rem] xl:w-[24rem] p-6">
          <Profile
            user={{
              id: "a",
              createdAt: new Date(),
              profile: {
                bio: "testbio",
                createdAt: new Date(),
                id: "1234",
                name: "my name",
                tag: "testUser",
                userId: "a",
              },
              followedBy: [],
              isFollowing: [],
            }}
            data-superjson
          />
        </div>
        <main className="grow p-6">{children}</main>
        <div className="hidden lg:block md:w-[16rem] md:min-w-[16rem] xl:w-[24rem] xl:min-w-[24rem] p-6">
          <HighlightedPosts posts={posts} data-superjson />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
