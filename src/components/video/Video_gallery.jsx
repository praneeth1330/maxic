import React, { useEffect, useState } from "react";
import Image_Card from "../home/Image_Card";
import axios from "axios";
import { Fade } from "react-reveal";
import Footer from "../footer/Footer";

const Video_gallery = () => {
	const [video, setVideo] = useState([]);

	useEffect(() => {
		const Apicall = async () => {
			const API_KEY =
				"563492ad6f91700001000001e6704743d2194be4aa4d2d05f2122395";

			const url =
				"https://api.pexels.com/videos/search?query=photographer&per_page=10";

			await axios
				.get(url, {
					headers: {
						Authorization: API_KEY,
					},
				})
				.then((response) => {
					setVideo(response.data.videos);
					console.log(response.data.videos);
				})
				.catch((error) => {
					console.log(error);
				});
		};
		Apicall();
	}, []);

	return (
		<div className="w-full flex justify-center items-center flex-col">
			<Fade bottom>
				<div className="py-12 text-center flex flex-col gap-6">
					<p className=" text-sm lg:text-2xl text-gray-400 capitalize">
						Video gallery
					</p>
					<p className=" text-3xl lg:text-6xl font-libra">Write & Share</p>
				</div>
			</Fade>

			<div className="w-11/12 columns-1  lg:columns-2 gap-3 space-y-3 py-12">
				{video.map((itc, index) => {
					return (
						<div className="" key={index}>
							<Fade bottom>
								<div className="  ">
									<video className=" w-full object-cover  " loop autoPlay muted>
										<source src={itc.video_files[0].link} type="video/mp4" />
									</video>
								</div>
							</Fade>
						</div>
					);
				})}
			</div>
			<Footer />
		</div>
	);
};

export default Video_gallery;
