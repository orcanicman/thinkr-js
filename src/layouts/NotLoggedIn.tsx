import React from "react";
import Logo from "../assets/logo";

interface NotLoggedInProps {
  children: React.ReactNode;
}

export const NotLoggedInLayout: React.FC<NotLoggedInProps> = ({ children }) => {
  return <div className="">{children}</div>;
};
