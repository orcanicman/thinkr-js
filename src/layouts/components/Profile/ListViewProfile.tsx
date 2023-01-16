import { User } from "../../../types/User";

import ProfileImage from "../../../assets/Profile_Image.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ListViewProfileProps {
	user: User;
}

export const ListViewProfile: React.FC<ListViewProfileProps> = ({ user }) => {
	const [following, setFollowing] = useState<boolean>(false);
	// session.user.following.includes(user) ? setFollowing(true) : setFollowing(false);

	const navigate = useNavigate();

	return (
		<div
			className="md:w-[28rem] w-[80vw] p-3 bg-darkTransparentHighlight duration-75 rounded-2xl m-2 my-4 hover:bg-darkHighlight hover:cursor-pointer"
			onClick={() => {
				navigate(`/${user.profile.tag}`);
			}}
		>
			<div className="flex-row flex justify-start items-center">
				<img
					// should be src={user.profile.picture}
					src={ProfileImage}
					className="w-20 h-20 rounded-2xl p-2"
					alt="profile"
				/>
				<div className="flex flex-row justify-between flex-1 items-center">
					<div className="flex-col ml-2">
						<p className="font-bold hover:underline">{user.profile.name}</p>
						<p className="text-gray hover:underline">@{user.profile.tag}</p>
					</div>
					<button
						className={`px-2 py-1 m-1 border-[1px] rounded-3xl duration-75 border-gray hover:bg-mainDark ${
							following ? "bg-gray" : ""
						}`}
						onClick={(e) => {
							e.stopPropagation();
							console.log("follow button");
							setFollowing(!following);
						}}
					>
						{following ? "Unfollow" : "Follow"}
					</button>
				</div>
			</div>
		</div>
	);
};
