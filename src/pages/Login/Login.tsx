import React from "react";
import { AuthLayout } from "../../layouts/AuthLayout";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(event);
  };

  return (
    <AuthLayout
      title="Login"
      subTitle="Sing in to see what your friends are thinking!"
    >
      <form onSubmit={handleSubmit}>
        <input placeholder="your name" />
        <input placeholder="your password" />
        <input />
      </form>
    </AuthLayout>
  );
};
