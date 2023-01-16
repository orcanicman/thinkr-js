"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../components/assets/logo";

const TopBar = () => {
  const [logoClickedCount, setLogoClickedCount] = useState(0);

  const handleEasterEgg = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (location.pathname === "/") {
      // add check if user is scrolled all the way up.
      setLogoClickedCount(logoClickedCount + 1);
    }
  };

  return (
    <div className="flex">
      <div className="hidden md:flex w-[16rem] xl:w-[24rem] p-6 items-center">
        <Link href={"/"} className="mr-4">
          <div
            onClick={handleEasterEgg}
            style={{
              transform: `rotate(${logoClickedCount * 90 + "deg"})`,
            }}
            className={`cursor-pointer transition-all`}
          >
            <Logo />
          </div>
        </Link>

        <input
          className="bg-darkTransparentHighlight px-4 py-2 rounded-2xl w-full"
          placeholder="Look for something.."
        />
      </div>
      <div className="grow p-6 text-2xl flex font-bold items-center">
        PageTitle
      </div>
      <div className="hidden lg:flex md:w-[16rem] xl:w-[24rem] p-6 items-center">
        right..
      </div>
    </div>
  );
};

export default TopBar;
