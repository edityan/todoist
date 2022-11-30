import React from "react";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.css";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/Login";

const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/",
		element: <Landing />,
	},
	{
		path: "/user",
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
