import { faChevronLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ProjectList from "../ProjectList";
import "./index.css";

const Project = () => {
	const projects = [
		{
			label: "Inbox",
			count: 2,
		},
		{
			label: "Upcoming",
			count: 5,
		},
		{
			label: "Upcomings",
			count: 5,
		},
		...Array(10)
			.fill(0)
			.map((_) => ({
				label: "test",
				count: 10,
			})),
	];

	const [showMenuList, setShowMenuList] = useState(false);
	const [initState, setInitState] = useState(true);

	const handleMenuList = () => {
		setShowMenuList(!showMenuList);
	};

	return (
		<>
			<div className="project-wrapper">
				<p>Projects</p>
				<div className="icon-project-wrapper">
					<FontAwesomeIcon icon={faPlus} className="icon-project" />
					<FontAwesomeIcon
						icon={faChevronLeft}
						className={
							showMenuList ? "icon-project rotate-right" : "icon-project"
						}
						onClick={handleMenuList}
					/>
				</div>
			</div>
			{
				<div
					className={
						showMenuList ? "project-list show-project-list" : "project-list"
					}
				>
					{projects.map((data, index) => {
						return <ProjectList key={index} data={data} />;
					})}
				</div>
			}
		</>
	);
};

export default Project;
