import React from "react";
import Header from "../../components/Header/index";
import Main from "../../components/Main/index";

const Home = () => {
	return (
		<div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
			<Header />
			<Main />
		</div>
	);
};

export default Home;
