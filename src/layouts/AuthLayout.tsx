import React from "react";
import Logo from "../assets/logo";

type AuthLayoutProps = {};

export const AuthLayout = ({
  children,
}: React.PropsWithChildren<AuthLayoutProps>) => {
  return (
    <div className="bg-mainDark h-screen">
      <div className="bg-mainDark flex justify-center pt-6 pb-4">
        <Logo />
      </div>

      <div className="text-center text-white mb-6">
        <h1 className="text-2xl font-bold">Thinkr</h1>
        <h3 className="font-thin">"Speak your mind"</h3>
      </div>
      <div className="flex justify-center">{children}</div>
    </div>
  );
};
