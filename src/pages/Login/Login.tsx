import React from "react";
import { AuthLayout } from "../../layouts/AuthLayout";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  return (
    <AuthLayout>
      <form>
        <h1 className="mb-8 text-6xl font-bold text-center text-white">
          Sign in
        </h1>
        <h1 className="mb-6 font-light text-center text-white">
          Sign in and see what your friends are thinking
        </h1>

        <input
          className="mb-8 placeholder:text-white placeholder:font-light text-white bg-darkTransparentHighlight px-4 py-3 rounded-xl w-full"
          placeholder="Email"
        />

        <input
          className="mb-8 placeholder:text-white placeholder:font-light text-white bg-darkTransparentHighlight px-4 py-3 rounded-xl w-full"
          placeholder="Password"
        />

        <div className="flex items-center">
          <input type="checkbox" className="mr-4 ring-mainDark" />
          <div className="text-white font-light ">Remember me</div>

          <div className="ml-32 text-green "> Forgot password?</div>
        </div>
        <div className="flex justify-center ">
          <button className="mt-8  px-4 py-3 rounded-xl w-full  text-white font-light bg-green">
            Login
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};
