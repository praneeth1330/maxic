import React from "react";
import Video from "./video.mp4";
import { useContext } from "react";
import { MyContext } from "../home/Images";
import { Team } from "./Team";
import Footer from "../footer/Footer";

const About_Header = () => {
	return (
		<div
			className="w-full h-full flex
         flex-col justify-center items-center"
		>
			<div className="w-11/12 gap-6 h-40 lg:h-56 flex   items-center justify-center">
				<p className="uppercase text-sm md:text-lg ">About</p>
				<p className="border-l-2 pl-3 md:pl-6 font-libra text-xl md:text-2xl lg:text-5xl py-2">
					We Are Maxic Studio
				</p>
			</div>
			<div className="w-11/12 py-6">
				<div className="">
					<video
						className=" w-full  h-[30vh] md:h-[40vh] lg:h-[60vh] object-cover  "
						loop
						autoPlay
						muted
					>
						<source src={Video} type="video/mp4" />
					</video>
				</div>
			</div>
			<div className="w-11/12 grid grid-cols-1 lg:grid-cols-3 lg:gap-6 items-start justify-between">
				<div className="lg:col-span-2 px-6 py-6 gap-6 flex flex-col items-start justify-start ">
					<p className="text-2xl md:text-3xl font-semibold">
						Say Hello From Alexis !
					</p>
					<p className=" lg:text-2xl ">
						We are a fairly small, flexible design studio that designs for print
						and web. <br /> Alexis works flexibly with clients to fulfil their
						design needs. Whether you need to create a brand from scratch,
						including marketing and a beautiful and functional website or
						whether you are looking for a great experience.
					</p>
				</div>
				<div className=" px-6 py-6 gap-6 flex flex-col ">
					<p className="text-3xl font-semibold">Our Services</p>
					<ul className="cursor-pointer  text-lg flex flex-col gap-y-2 text-gray-400 service ">
						<li>branding & strategy</li>
						<li>Video & Animation</li>
						<li>Web Design & Development</li>
						<li>Packaging Design</li>
						<li>Marketing, SEO & Social Media</li>
					</ul>
				</div>
			</div>
			<div className="w-11/12 flex flex-col gap-6 py-6">
				<h2 className=" text-4xl ">Our Team</h2>
				<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 ">
					{Team.map((itc, index) => {
						return (
							<div
								className="relative w-full h-full overflow-hidden content"
								key={index}
							>
								<a href={itc.image} target="_blank">
									<div className="content-overlay"></div>

									<img
										src={itc.image}
										alt=""
										className="w-full h-full object-cover"
									/>
									<div className="content-details fadeIn-bottom flex flex-col gap-y-3">
										<h2 className="text-white">{itc.name}</h2>
										<h3 className="content-title text-2xl text-white text-center">
											{itc.post}
										</h3>
									</div>
								</a>
							</div>
						);
					})}
					<div className="flex flex-col justify-center text-center items-center ">
						<p className="text-2xl font-dm  w-1/3 capitalize cursor-pointer">
							<a href="/">become a member in maxic</a>
						</p>
					</div>
				</div>
			</div>
			<div className="w-11/12 py-6 flex justify-center items-end ">
				<div className=" py-6 border-l-2 border-black ">
					<p className=" text-3xl pl-10  text-start">
						I’ve worked with many agencies throughout the world. I’ve found
						Alexis to be one of those special agencies you wish all the others
						were like.
					</p>
					<div className="pt-6 px-6">
						<p className="">Alexander Wright</p>
						<p className="">Adobe</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About_Header;
