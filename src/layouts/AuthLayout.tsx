import React from "react";
import Logo from "../assets/logo";


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

        <>

            <div className=" flex justify-center pt-6 pb-4">
                <Logo />
            </div>

            <div className=" text-center text-darkHighlight ">

                <h2>Thinkr</h2>
                <h3>"Speak your mind"</h3>
                <h3>{subTitle}</h3>
                <h1>{title}</h1>

                <div>
                    {children}
                </div>

                < button > Darkmode</button >
            </div>



        </>

    );
};
