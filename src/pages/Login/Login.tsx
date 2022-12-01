import React from "react";
import MainLayout from "../../layouts/Main";
import { NotLoggedInLayout } from "../../layouts/NotLoggedIn";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  return (
    <NotLoggedInLayout>
      <div className="">Login...</div>
    </NotLoggedInLayout>
  );
};
