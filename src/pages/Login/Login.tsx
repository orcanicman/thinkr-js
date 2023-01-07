import React from "react";
import { AuthLayout } from "../../layouts/AuthLayout";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  return (
    <AuthLayout>
      <form>
        <h1 className="mb-6 text-6xl font-bold text-center text-white">
          Sign in
        </h1>
        <h1 className="mb-2 text-sm text-center text-white">
          See what your friends are doing
        </h1>

        <input placeholder="your name" className=" border-t-black" />
        <br></br>
        <input placeholder="your password" className="mt-4 border-t-black" />
      </form>
    </AuthLayout>
  );
};
