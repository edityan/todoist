import React from "react";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import { PATH_BASE, PATH_DASHBOARD, PATH_HOME, PATH_LOGIN, PATH_REGISTER } from "./constants/Path";
import "./index.css";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/index";
import Landing from "./pages/Landing/index";

const router = createBrowserRouter([
	{
		path: PATH_REGISTER,
		element: <Register />,
	},
	{
		path: PATH_LOGIN,
		element: <Login />,
	},
	{
		path: PATH_HOME,
		element: <Landing />,
	},
	{
		path: PATH_DASHBOARD,
		element: <Home />,
	},
	{
		path: PATH_BASE,
		element: <Navigate to={PATH_HOME} />,
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
