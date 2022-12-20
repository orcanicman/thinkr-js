import React from "react";
import MainLayout from "../../layouts/Main";
import { AuthLayout } from "../../layouts/AuthLayout";

interface LoginProps { }

export const Login: React.FC<LoginProps> = () => {
    return (

        <AuthLayout
            title="Login"
            subTitle="Sing in to see what your friends are thinking!"
        >
            <form>
                <input placeholder="your name" />
                <input placeholder="your password" />
                <input />
            </form>
        </AuthLayout>
    );
};
