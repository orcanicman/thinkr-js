import React, { useState } from "react";
import ProfileImage from "../../../assets/Profile_Image.png";
import { User } from "../../../types/User";

interface WritePostProps {
	user: User;
}

export const WritePost: React.FC<WritePostProps> = ({ user }) => {
	//ideas -> takes in user to show user profile picture and maybe name
	// -> to autogrow textarea need js on change ig could use it for a character counter in bottom left!
	const [value, setValue] = useState("");
	const maxCharCount: number = 200;

	const inputFieldChange = (event: React.FormEvent<HTMLDivElement>) => {
		setValue(event.currentTarget.innerText);
	};

	const post = () => {
		console.log(value);
	};

	return (
		<div className="bg-darkTransparentHighlight rounded-xl flex flex-col mb-8 p-6">
			<div className="flex flex-row">
				<div className="w-16 h-16 rounded-full mr-6 min-w-[4rem]">
					<img src={ProfileImage} alt="Poster profile" />
					{/* <img src={user.profile.picture} alt="Poster profile" /> */}
				</div>

				<div className="relative w-full">
					<div
						className={`absolute top-0 left-0 text-gray p-2 ${
							value.length ? "opacity-0" : "opacity-100"
						}`}
					>
						What are you thinking about?
					</div>
					<div
						id="newPostInputField"
						className="bg-darkTransparentHighlight outline-none resize-none mb-8 rounded-md p-2 w-full whitespace-pre-wrap break-all relative"
						placeholder="What are you thinking about?"
						contentEditable
						onInput={inputFieldChange}
					/>
				</div>
			</div>

			<div className="flex justify-between items-end">
				<div className="text-gray">
					<span className={value.length > 200 ? "text-red" : ""}>
						{value.length}
					</span>
					{` / ${maxCharCount} characters`}
				</div>

				<button
					className="bg-green rounded-full py-2 px-4 mx-2 transition-all hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
					disabled={!value.length || value.length > maxCharCount}
					onClick={post}
				>
					Post
				</button>
			</div>
		</div>
	);
};
