import React from "react";
import Logo from "../assets/logo";
import { HighlightedPosts } from "./components/TopBar/HighlightedPosts";
import { Profile } from "./components/TopBar/Profile";
import { TopBar } from "./components/TopBar/TopBar";

interface MainProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainProps> = ({ children }) => {
  return (
    <div className="bg-mainDark min-h-screen text-mainLight">
      <TopBar />
      <div className="flex">
        <div className="w-[20rem] p-6">
          <Profile />
        </div>
        <main className="grow p-6">{children}</main>
        <div className="w-[20rem] p-6">
          <HighlightedPosts />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
