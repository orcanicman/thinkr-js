import { Post } from "./Post";

const Posts = ({ posts }: { posts: any[] }) => {
  return (
    <div>
      {posts.map((post, i) => (
        <Post key={i} post={post} data-superjson />
      ))}
    </div>
  );
};

export default Posts;
