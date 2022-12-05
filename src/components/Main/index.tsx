import React from "react";
import Content from "../Content/index";
import Sidebar from "../Sidebar/index";
import "./index.css";

const Main = () => {
	return (
		<div className="main-wrapper">
			<Sidebar />
			<Content />
		</div>
	);
};

export default Main;
