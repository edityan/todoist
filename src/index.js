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
import Home from "./pages/Home";
import Landing from "./pages/Landing";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RecoilRoot>
			<RouterProvider router={router} />
		</RecoilRoot>
	</React.StrictMode>
);
