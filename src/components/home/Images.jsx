import React, { useState, useEffect } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";
import { createContext } from "react";
import Api from "./Api";
import Image_Card from "./Image_Card";
import About_Header from "../About/About_Header";

export const MyContext = createContext();

const Images = () => {
	const [image, setImage] = useState([]);
	const [search, setSearch] = useState("random");

	// api-------------------------
	const Data = async () => {
		const response = await axios.get(
			`https://api.unsplash.com/search/photos?page=5&per_page=20&query=${search}&client_id=t2cO9jpQF5AAlF0mn2rcrCipkGDD9j9UjefRn-8GxBk`
		);
		setImage(response.data.results);
		console.log(response.data.results);
	};
	useEffect(
		(e) => {
			Data();
		},
		[search]
	);
	// api-------------------------------------------
	return (
		<div className=" ">
			<MyContext.Provider value={{ image, setImage, search, setSearch }}>
				<Api />
				<Image_Card />
			</MyContext.Provider>
			<div className=" flex justify-center items-center flex-col gap-6">
				<div className=" py-6">
					<p className="text-gray-400 cursor-pointer font-libra hover:text-black ">
						Loading...
					</p>
				</div>
			</div>
		</div>
	);
};

export default Images;
