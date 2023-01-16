import { getProfileWithUserByTag } from "../../../lib/users";

interface ProfilePageLayoutProps {
  children: React.ReactNode;
  params: { usertag: string };
}

const getData = async (tag: string) => {
  const { profile, error } = await getProfileWithUserByTag(tag);
  if (!profile) {
    throw new Error("Failed to fetch data");
  }

  return profile;
};

const ProfilePageLayout = async ({
  children,
  params: { usertag },
}: ProfilePageLayoutProps) => {
  const posts = await getData(usertag);

  return (
    <div>
      <div>topData</div>
      <pre>{JSON.stringify(posts)}</pre>
      <div>childe</div>
      <div>{children}</div>
    </div>
  );
};

export default ProfilePageLayout;
