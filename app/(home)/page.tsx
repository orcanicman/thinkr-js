import { getPosts } from "../../lib/posts";
import prisma from "../../lib/prisma/client";
import { Post } from "./Post";
import Posts from "./Posts";

const getData = async () => {
  const { posts, error } = await getPosts();
  if (!posts) {
    throw new Error("Failed to fetch data");
  }

  return posts;
};

const Page = async () => {
  const posts = await getData();

  return <Posts posts={posts} data-superjson />;
};

// post: Post & {
//   comments: Comment[];
//   likedBy: User[];
//   user: User & {
//       profile: Profile | null;
//   };
// }

// post: Post & {
//   comments: Comment[];
//   likedBy: User[];
//   user: User & {
//       profile: Profile | null;
//   };
// }

export default Page;
