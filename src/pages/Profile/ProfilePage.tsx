import React, { useState } from "react";
import MainLayout from "../../layouts/Main";
import { Post } from "../../types/Post";
import { Post as PostComponent } from "../../pages/Home/components/Post";
import { User } from "../../types/User";

import { posts as testPosts } from "../../testData/posts";
import { user as testUser } from "../../testData/users";
import BackgroundImage from "../../assets/test_background_img.jpg";
import ProfileImage from "../../assets/Profile_Image.png";

interface ProfilePageProps {}

export const ProfilePage: React.FC<ProfilePageProps> = () => {
	const [user, setUser] = useState<User>(testUser);
	const [posts, setPosts] = useState<Post[]>(testPosts);
	const [currTab, setCurrTab] = useState<"posts" | "liked" | "comments">(
		"posts"
	);

	return (
		<MainLayout>
			<div className="flex flex-col bg-darkTransparentHighlight w-full rounded-2xl mb-8">
				<div className="flex flex-col">
					<img
						// should be src={user.profile.background}
						src={BackgroundImage}
						alt="profile background"
						className="w-full h-64 object-cover object-center rounded-t-2xl"
					/>
					<img
						// should be src={user.profile.picture}
						src={ProfileImage}
						className="w-28 h-28 rounded-2xl -mt-12 ml-10"
						alt="profile"
					/>
				</div>

				<div className="flex flex-row justify-between">
					<div className="flex flex-col ml-10 mb-1 space-y-2">
						<div className="space-x-3">
							<span className="font-bold">{user.profile.name}</span>
							<span className="text-gray">@{user.profile.tag}</span>
						</div>
						<div>{user.profile.bio}</div>
					</div>
					{/* <div className="mr-10">followers following maybe?</div> */}
				</div>

				<div className="flex flex-row justify-between text-center">
					<div className="p-3 flex-grow rounded-bl-2xl hover:bg-darkHighlight hover:cursor-pointer duration-75 ease-out transition-all flex flex-col justify-center items-center">
						<p>Posts</p>
						<div
							className={`h-1 w-1/2 bg-green rounded-xl ${
								currTab === "posts" ? "" : "hidden"
							}`}
						></div>
					</div>
					<div className="p-3 flex-grow hover:bg-darkHighlight hover:cursor-pointer duration-75 ease-out transition-all flex flex-col justify-center items-center">
						<p>Liked posts</p>
						<div
							className={`h-1 w-1/2 bg-green rounded-xl ${
								currTab === "liked" ? "" : "hidden"
							}`}
						></div>
					</div>
					<div className="p-3 flex-grow rounded-br-2xl hover:bg-darkHighlight hover:cursor-pointer duration-75 ease-out transition-all flex flex-col justify-center items-center">
						<p>Comments</p>
						<div
							className={`h-1 w-1/2 bg-green rounded-xl ${
								currTab === "comments" ? "" : "hidden"
							}`}
						></div>
					</div>
				</div>
			</div>
			<div className="">
				{posts.map((post, i) => (
					<PostComponent key={i} post={post} />
				))}
			</div>
		</MainLayout>
	);
};
