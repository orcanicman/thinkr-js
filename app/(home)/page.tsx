import { getPosts } from "../../lib/posts";
import { Post } from "./Post";

const getData = async () => {
  const { posts, error } = await getPosts();
  if (!posts) {
    throw new Error("Failed to fetch data");
  }

  return posts;
};

const Page = async () => {
  const posts = await getData();

  return posts.map((post, i) => <Post key={i} post={post} data-superjson />);
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
