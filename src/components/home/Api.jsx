import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "./Images";

const Api = () => {
	const { image, setTmage, search, setSearch } = useContext(MyContext);
	return (
		<div className=" flex-col flex items-center justify-center pb-12">
			<div className="flex justify-self-auto justify-between gap-4 items-center w-10/12 h-auto py-3 text-gray-500 md:text-xl flex-wrap btns ">
				<button
					onClick={() => {
						setSearch("images");
					}}
				>
					All
				</button>
				<button
					onClick={() => {
						setSearch("nature");
					}}
				>
					Nature
				</button>
				<button onClick={() => setSearch("couple")}>Couple</button>
				<button onClick={() => setSearch("travel")}>Travel</button>
				<button onClick={() => setSearch("food")}>Food</button>
				<button onClick={() => setSearch("backgrounds")}>backgrounds</button>
				<button onClick={() => setSearch("cat")}>Cat</button>
				<button onClick={() => setSearch("dog ")}>Dog</button>
				<button onClick={() => setSearch("Featured ")}>Featured</button>
				<button onClick={() => setSearch("human")}>human</button>
				<button onClick={() => setSearch("cities")}>cities</button>
				<button onClick={() => setSearch("colors")}>colors</button>
				<button onClick={() => setSearch("sports")}>sports</button>
			</div>
		</div>
	);
};

export default Api;
