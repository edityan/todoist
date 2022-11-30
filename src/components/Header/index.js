import { faBars, faHouse, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./index.css";

const Header = () => {
	let initial = "J";

	return (
		<header className="header-wrapper">
			<div className="header-left">
				<button className="icon-wrapper">
					<FontAwesomeIcon icon={faBars} />
				</button>
				<button className="icon-wrapper">
					<FontAwesomeIcon icon={faHouse} />
				</button>
				<div className="greeting">
					<p>Good Morning, Joshua</p>
				</div>
			</div>
			<div className="header-right">
				<button className="icon-wrapper">
					<FontAwesomeIcon icon={faPlus} />
				</button>
				<button className="icon-wrapper-profile">
					<p>{initial}</p>
				</button>
			</div>
		</header>
	);
};

export default Header;
