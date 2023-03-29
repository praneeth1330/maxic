import { useState } from "react";
import { Route, Router, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";

import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Portfolio_Details from "./components/portfolio/Portfolio_Details";
import Main_Nav from "./components/Main_Nav";
import Contacts from "./components/Contacts";
import { MyContext } from "./components/home/Images";
import Video_gallery from "./components/video/Video_gallery";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main_Nav />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="portfolio" element={<Portfolio />} />
					<Route path="portfolio_details" element={<Portfolio_Details />} />
					<Route path="videos" element={<Video_gallery />} />
					<Route path="contacts" element={<Contacts />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
