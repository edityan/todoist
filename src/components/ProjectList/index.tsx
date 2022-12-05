import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ProjectType } from "../../types/Project";
import "./index.css";

interface ProjectListProps {
	data: ProjectType;
}

const ProjectList = ({ data }: ProjectListProps) => {
	const { label, count } = data;

	console.log(data);

	return (
		<div className="project-list-wrapper">
			<div className="project-list-left">
				<FontAwesomeIcon icon={faCircle} className="project-list-icon" />
				<p>{label}</p>
			</div>
			<div className="project-list-right">
				<p>{count}</p>
			</div>
		</div>
	);
};

export default ProjectList;
