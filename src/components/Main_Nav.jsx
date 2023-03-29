import React from "react";
import Nav from "./navbar/Nav";
import { Outlet } from "react-router-dom";
import ToTop from "../components/home/ToTop";

const Main_Nav = () => {
	return (
		<div>
			<Nav />
			<ToTop />
			<Outlet />
		</div>
	);
};

export default Main_Nav;
