import React from "react";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.css";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/index";
import Landing from "./pages/Landing/index";

const router = createBrowserRouter([
	{
		path: "/auth/register",
		element: <Register />,
	},
	{
		path: "/auth/login",
		element: <Login />,
	},
	{
		path: "/",
		element: <Landing />,
	},
	{
		path: "/dashboard",
		element: <Home />,
	},
	{
		path: "*",
		element: <Navigate to="/" />,
	},
]);

const rootId = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootId);
root.render(
	<React.StrictMode>
		<RecoilRoot>
			<RouterProvider router={router} />
		</RecoilRoot>
	</React.StrictMode>
);
