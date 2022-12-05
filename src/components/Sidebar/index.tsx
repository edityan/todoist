import React from "react";
import Menu from "../Menu/index";
import Project from "../Project/index";
import "./index.css";

const Sidebar = () => {
	return (
		<div className="sidebar-wrapper">
			<Menu />
			<Project />
		</div>
	);
};

export default Sidebar;
