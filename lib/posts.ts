import { Post, User } from "@prisma/client";
import prisma from "./prisma/client";

export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        _count: true,
        comments: true,
        likedBy: true,
        user: { include: { profile: true } },
      },
    });
    return { posts };
  } catch (error) {
    return { error };
  }
}

export async function createPost(user: User & { post: Post }) {
  try {
    const post = await prisma.post.create({
      data: { userId: user.id, content: user.post.content },
    });
    return { post };
  } catch (error) {
    return { error };
  }
}
