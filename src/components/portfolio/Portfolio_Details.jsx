import React from "react";
import Footer from "../footer/Footer";
import Image_Card from "../home/Image_Card";

const Portfolio_Details = () => {
	return (
		<div className="w-full flex items-center justify-center flex-col">
			<div className=" w-11/12 flex items-center justify-center py-12 flex-col">
				<div className=" flex flex-col items-center justify-center gap-6 border-b-2 border-gray-200 py-6">
					<div className=" flex gap-6 flex-col items-center justify-center">
						<p className="text-lg lg:text-xl text-gray-400">
							FEATURED , NEW ADDED
						</p>
						<p className=" text-3xl lg:text-5xl  font-dm">Praneeth Miryanam</p>
					</div>
					<div className="grid gap-6 grid-cols-1 lg:grid-cols-4 w-11/12 py-6 ">
						<div className=" flex flex-col gap-3 pr-6  ">
							<p className="text-xl lg:text-2xl text-gray-400">CLIENT</p>
							<p className="lg:text-xl font-libra">
								Archo Architecture Bureau, SG
							</p>
						</div>
						<div className=" flex flex-col gap-3 pr-6  ">
							<p className="text-xl lg:text-2xl text-gray-400">DATE</p>
							<p className="lg:text-xl font-libra">September 25th 2020</p>
						</div>
						<div className=" flex flex-col gap-3 pr-6  ">
							<p className="text-xl lg:text-2xl text-gray-400">TEAMT</p>
							<p className="lg:text-xl font-libra">
								Nindia H. - Editor Kate E. - Photographer
							</p>
						</div>
						<div className=" flex flex-col gap-3 pr-6  ">
							<p className="text-xl lg:text-2xl text-gray-400">SERVICES</p>
							<p className="lg:text-xl font-libra">
								Natural, Studio, Commercial, Portrait
							</p>
						</div>
					</div>
				</div>
				<div className=" flex justify-center items-center gap-3  py-12">
					<p className="w-8/12 text-center text-lg">
						Updated portraits of all Instrument employees for the new Instrument
						site. A unified look and background allows photos to mesh seamlessly
						online. To see it live check out: <br />
						<a href="" className=" text-gray-400">
							{" "}
							https://yourwebsite.com
						</a>
					</p>
				</div>
				<div className=" columns-auto space-y-6 gap-6 flex justify-center items-center flex-col w-full">
					<img
						src="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
					/>
					<img
						src="https://images.pexels.com/photos/1738636/pexels-photo-1738636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
					/>

					<img
						src="https://images.pexels.com/photos/298298/pexels-photo-298298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
					/>
				</div>
				<div className=" flex justify-center items-center py-12">
					<div className="hello uppercase flex items-center gap-3 flex-col justify-center rounded-full border-2 border-gray-200 text-center w-56 h-56 lg:w-96 lg:h-96">
						<p className=" text-lg lg:text-2xl">
							start your <br /> project with us now
						</p>
						<p className="capitalize font-libra text-red-600 text-2xl lg:text-3xl hover:text-black cursor-pointer py-3">
							get Started
						</p>
						<div className=" lg:text-2xl hover:text-black text-gray-400 cursor-pointer">
							<i class="fa-solid fa-circle-arrow-right fa-xl"></i>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Portfolio_Details;
