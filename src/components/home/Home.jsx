import React from "react";
import Footer from "../footer/Footer";
import Nav from "../navbar/Nav";
import Header from "./Header";
import Images from "./Images";
import ToTop from "./ToTop";
import { Outlet } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<Header />
			<Images />
			<ToTop />
			<Footer />
		</div>
	);
};

export default Home;
