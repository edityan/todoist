import React from "react";
import Content from "../Content";
import Sidebar from "../Sidebar";
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
