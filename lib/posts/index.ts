import prisma from "../prisma/client";

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

// export async function createUser(user) {
//   try {
//     const userFromDB = await prisma.user.create({ data: user })
//     return { user: userFromDB }
//   } catch (error) {
//     return { error }
//   }
// }

// export async function getUserById(id) {
//   try {
//     const user = await prisma.user.findUnique({
//       where: { id },
//       include: { tweets: true }
//     })
//     return { user }
//   } catch (error) {
//     return { error }
//   }
// }
