import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ProfilePage } from "./pages/Profile/ProfilePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/:tag",
		element: <ProfilePage />,
	},
	{
		path: "/:tag/followers",
		element: <ProfilePage />,
	},
	{
		path: "/:tag/following",
		element: <ProfilePage />,
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
