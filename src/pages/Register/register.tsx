import React from "react";
import { AuthLayout } from "../../layouts/AuthLayout";

interface RegisterProps { }

export const Register: React.FC<RegisterProps> = ({ }) => {
    return (
        <AuthLayout title="" subTitle="" >
            <div className="border-b border-b-gray text-center">
                <form className="flex flex-column">
                    <input placeholder="usename" />
                    <input placeholder="email" />
                    <input placeholder="password" />
                </form>
            </div>


        </AuthLayout>
    );
};
