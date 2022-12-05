import React from "react";
import { AuthLayout } from "../../layouts/AuthLayout";

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = ({}) => {
  return (
    <AuthLayout title="" subTitle="">
      <form>
        <input placeholder="usename" />
        <input placeholder="email" />
        <input placeholder="password" />
      </form>
    </AuthLayout>
  );
};
