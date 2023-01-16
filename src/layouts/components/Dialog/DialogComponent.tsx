import React, { useContext } from "react";
import { DialogContext } from "./DialogContext";

interface DialogComponentProps {}

export const DialogComponent: React.FC<DialogComponentProps> = () => {
	const dialogState = useContext(DialogContext);

	return (
		<div
			className={`fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 text-mainLight bg-black bg-opacity-60 
			${dialogState?.dialog !== null ? "" : "hidden"}`}
		>
			<div className="w-auto h-5/6 bg-mainDark rounded-2xl p-4 m-4 overflow-y-scroll flex-col">
				<div className="flex flex-row justify-end">
					<button
						className="px-2 py-1 border-[1px] rounded-3xl border-gray hover:border-red"
						onClick={() => {
							dialogState?.setDialog(null);
						}}
					>
						Close X
					</button>
				</div>

				<div>{dialogState?.dialog}</div>
			</div>
		</div>
	);
};
