import prisma from "./prisma/client";
import { Account, Profile, User } from "@prisma/client";

export async function createUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const createdUser = await prisma.user.create({
      data: {
        account: {
          create: {
            email: email,
            password: password,
          },
        },
      },
    });

    return { user: createdUser };
  } catch (error) {
    return { error };
  }
}

export async function createProfile(
  user: User & { account: Account; profile: Profile }
) {
  try {
    const createdProfile = await prisma.user.update({
      where: { id: user.id },
      data: {
        profile: {
          create: {
            bio: user.profile.bio,
            name: user.profile.name,
            tag: user.profile.tag,
          },
        },
      },
    });

    return { user: createdProfile };
  } catch (error) {
    return { error };
  }
}

export async function getAccountWithEmail({ email }: { email: string }) {
  try {
    const account = await prisma.account.findUniqueOrThrow({
      where: { email },
    });

    return { account };
  } catch (error) {
    return { error };
  }
}

export async function getProfileWithUserByTag(tag: string) {
  try {
    const profile = await prisma.profile.findUniqueOrThrow({
      where: { tag: tag },
      include: {
        user: {
          include: {
            _count: true,
            followedBy: true,
            following: true,
            posts: {
              include: {
                _count: true,
                comments: true,
                likedBy: true,
                user: { include: { profile: true } },
              },
            },
          },
        },
      },
    });
    return { profile };
  } catch (error) {
    return { error };
  }
}
