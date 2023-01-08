import React, { ReactNode, useEffect, useState } from "react";

interface DialogProps {
	component: ReactNode;
	closeFunction: Function;
	title?: string;
	open: boolean;
}

export const Dialog: React.FC<DialogProps> = ({
	component,
	title,
	closeFunction,
	open,
}) => {
	const [closing, setClosing] = useState(false);
	const [animationState, setAnimationState] = useState<"opening" | "closing">(
		"closing"
	);

	useEffect(() => {
		console.log(open);
		console.log(animationState);

		open === true ? setAnimationState("opening") : setAnimationState("closing");

		console.log(animationState);
	}, [open]);

	return (
		<div
			className={`fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-60 duration-200 
			${animationState === "opening" ? "opacity-100" : "opacity-0 delay-500"} 
			${open === false ? "hidden" : ""}`}
		>
			<div
				className={`w-auto bg-mainDark rounded-2xl p-4 m-4 overflow-y-scroll duration-500 
				${animationState === "opening" ? "h-5/6 delay-200" : "h-0"}`}
			>
				<div className="flex flex-row-reverse justify-between p-1 items-center mb-2">
					<button
						onClick={() => {
							setAnimationState("closing");
							setTimeout(() => {
								closeFunction();
							}, 700);
						}}
						className="p-2 border-[1px] rounded-full border-gray hover:border-red"
					>
						Close X
					</button>
					{title ? title : ""}
				</div>
				{component}
			</div>
		</div>
	);
};
