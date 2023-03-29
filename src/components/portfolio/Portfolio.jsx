import React from "react";
import Footer from "../footer/Footer";
import Images from "../home/Images";

const Portfolio = () => {
	return (
		<div className="w-full flex items-center justify-center flex-col">
			<div className="w-11/12 flex flex-col justify-center items-center">
				<div className="py-3 w-10/12">
					<p className=" font-libra sm:text-xl  lg:text-xl text-center lg:leading-[2rem] py-3 lg:py-6">
						Maxic Photography Studio based in India, Bangaloor. <br />{" "}
						specialises in shooting liquids and my colourful liquid work, <br />{" "}
						titled “Biford”, has become very well <br /> known and collectable.
					</p>
				</div>
				<Images />
			</div>
			<Footer />
		</div>
	);
};

export default Portfolio;
