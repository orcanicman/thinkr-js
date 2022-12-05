import React from "react";

type AuthLayoutProps = {
  title: string;
  subTitle: string;
};

export const AuthLayout = ({
  title,
  subTitle,
  children,
}: React.PropsWithChildren<AuthLayoutProps>) => {
  return (
    <div>
      <img /> {/* LOGO */}
      <h2>Thinkr</h2>
      <h3>"Speak your mind"</h3>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      {children}
      <button>toggle theme</button>
    </div>
  );
};
