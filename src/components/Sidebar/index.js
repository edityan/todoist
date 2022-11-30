import React from "react";
import Menu from "../Menu";
import Project from "../Project";
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
