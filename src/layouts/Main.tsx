import React, { ReactNode, useState } from "react";
import { DialogContext } from "./components/Dialog/DialogContext";
import { HighlightedPosts } from "./components/HighlightedPosts/HighlightedPosts";
import { Profile } from "./components/Profile/Profile";
import { TopBar } from "./components/TopBar/TopBar";
import { DialogComponent } from "./components/Dialog/DialogComponent";

interface MainProps {
	children: React.ReactNode;
}

const MainLayout: React.FC<MainProps> = ({ children }) => {
	const [dialog, setDialog] = useState<ReactNode | null>(null);

	return (
		<DialogContext.Provider value={{ dialog, setDialog }}>
			<div className="bg-mainDark min-h-screen text-mainLight">
				<TopBar />
				<div className="flex">
					<div className="hidden md:block md:w-[16rem] md:min-w-[16rem] xl:min-w-[24rem] xl:w-[24rem] p-6">
						<Profile />
					</div>
					<main className="grow p-6">{children}</main>
					<div className="hidden lg:block md:w-[16rem] md:min-w-[16rem] xl:w-[24rem] xl:min-w-[24rem] p-6">
						<HighlightedPosts />
					</div>
				</div>
			</div>
			<DialogComponent />
		</DialogContext.Provider>
	);
};

export default MainLayout;
