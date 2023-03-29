import React, { useEffect, useRef, useState } from "react";
import Fade from "react-reveal/Fade";

const delay = 3000;
const bg = [
	{
		image:
			"https://images.pexels.com/photos/34769/person-human-female-girl.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		text_h: "Capturing Moments",
		text: "Freeze time with our lens",
	},
	{
		image:
			"https://images.pexels.com/photos/168609/pexels-photo-168609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		text_h: " A Journey in Pictures",
		text: "A visual journey through life",
	},
	{
		image:
			"https://images.pexels.com/photos/54098/us-army-soldiers-army-men-54098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		text_h: "The World in Focus",
		text: "A new perspective ",
	},
];

// const bg = [
// 	"https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// 	"https://images.pexels.com/photos/888923/pexels-photo-888923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// 	"https://images.pexels.com/photos/7314973/pexels-photo-7314973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// ];

const Header = () => {
	const [index, setIndex] = useState(0);
	const timeOut = useRef(null);
	function resetTimeout() {
		if (timeOut.current) {
			clearTimeout(timeOut.current);
		}
	}

	useEffect(() => {
		resetTimeout();
		timeOut.current = setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === bg.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);

		return () => {
			resetTimeout();
		};
	}, [index]);
	return (
		<div className="flex items-center justify-center -z-30">
			<div className="flex  items-center flex-col gap-5 overflow-hidden  w-11/12 ">
				<div
					className="whitespace-nowrap transition-all ease-in-out"
					style={{
						transform: `translate3d(${-index * 100}%, 0, 0)`,
						transitionDuration: "0.5s",
						transitionTimingFunction: "ease",
						willChange: "transform",
					}}
				>
					{bg.map((props, index) => (
						<div
							className="inline-block  md:h-[40vh] lg:h-[80vh] w-full h-[30vh] -z-30"
							key={index}
						>
							<img
								src={props.image}
								alt=""
								className="h-full
                         w-full object-cover"
							/>
							<div className=" absolute bottom-1/3  text-center w-full flex flex-col gap-4">
								<Fade bottom>
									<h3 className="font-libra text-xl md:text-4xl lg:text-5xl text-white  text-center">
										{props.text_h}
									</h3>
								</Fade>
								<Fade bottom>
									<p className="text-xs lg:text-sm text-white">{props.text}</p>
								</Fade>
								<button className="text-white text-xl">
									<a
										href="#"
										className=" border-b-2 border-white py-1 hover:text-gray-400 hover:border-gray-400"
									>
										Explore Now
									</a>
								</button>
							</div>
						</div>
					))}
				</div>

				<div className="">
					{bg.map((_, idx) => (
						<div
							key={idx}
							className={`slideshowDot${index === idx ? " active" : ""}`}
							onClick={() => {
								setIndex(idx);
							}}
						></div>
					))}
				</div>
				<div className="py-3 lg:py-6 w-10/12">
					<Fade bottom>
						<p className=" font-libra sm:text-xl  lg:text-2xl text-center lg:leading-[3rem] py-3 lg:py-6">
							Maxic Photography Studio based in India, Bangaloor. <br />{" "}
							specialises in shooting liquids and my colourful liquid work,{" "}
							<br /> titled “Biford”, has become very well <br /> known and
							collectable.
						</p>
					</Fade>
				</div>
			</div>
		</div>
	);
};

export default Header;
