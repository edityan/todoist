import React from "react";
import { Header, Main } from "../../components/Home";

const Home = () => {
	return (
		<div className="h-screen flex flex-col">
			<Header />
			<Main />
		</div>
	);
};

export default Home;
