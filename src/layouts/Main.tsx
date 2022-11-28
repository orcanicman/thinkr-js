import React from "react";
import Logo from "../assets/logo";

interface MainProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainProps> = ({ children }) => {
  return (
    <div className="bg-mainDark min-h-screen text-mainLight">
      <div className="flex">
        <div className="w-[20rem] flex p-6 items-center justify-between">
          <div className="mr-4">
            <Logo />
          </div>
          <div className="">
            <input
              className="bg-darkTransparentHighlight p-2 rounded-2xl"
              placeholder="Searchbar..."
            />
          </div>
        </div>
        <div className="grow p-6 text-2xl flex font-bold items-center">
          PageTitle
        </div>
        <div className="w-[20rem] p-6 flex items-center">right..</div>
      </div>
      <div className="flex">
        <div className="w-[20rem] p-6">left..</div>
        <main className="grow p-6">{children}</main>
        <div className="w-[20rem] p-6">right..</div>
      </div>
    </div>
  );
};

export default MainLayout;
