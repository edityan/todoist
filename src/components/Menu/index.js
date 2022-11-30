import { faCalendarDays, faInbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./index.css";

const Menu = () => {
	const menus = [
		{
			label: "Inbox",
			icon: faInbox,
			color: "#77DD77",
			count: 2,
		},
		{
			label: "Upcoming",
			icon: faCalendarDays,
			color: "#FAC898",
			count: 5,
		},
	];

	const [selected, setSelected] = useState(0);

	const handleClick = (index) => {
		setSelected(index);
	};

	return (
		<>
			{menus.map((data, index) => {
				const { label, icon, color, count } = data;
				let active = selected === index;

				return (
					<div
						key={index}
						className={!active ? "menu-wrapper" : "menu-selected"}
						onClick={() => handleClick(index)}
					>
						<div className="menu-left">
							<FontAwesomeIcon
								icon={icon}
								style={{ color: `${color}`, marginRight: "10px" }}
							/>
							<p>{label}</p>
						</div>
						<p className="count-menu">{count}</p>
					</div>
				);
			})}
		</>
	);
};

export default Menu;
