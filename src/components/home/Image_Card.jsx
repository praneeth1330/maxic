import React from "react";
import { Fade } from "react-reveal";
import { useContext } from "react";
import { MyContext } from "./Images";

const Image_Card = () => {
	const { image, setTmage, search, setSearch } = useContext(MyContext);

	return (
		<div className="w-full flex items-center justify-center ">
			<div className=" columns-2  lg:columns-3 w-11/12 h-auto gap-6  space-y-6 grid-flow-col-dense">
				{image.map((itc, index) => {
					return (
						<Fade bottom left>
							<div
								className="relative w-full h-full overflow-hidden content"
								key={index}
							>
								<a href={itc.urls.regular} target="_blank">
									<div className="content-overlay"></div>
									<p className="absolute top-1 right-1 text-gray-500  text-xs ">
										{itc.width} X {itc.height}
									</p>

									<img src={itc.urls.regular} alt="" />
									<div className="content-details fadeIn-bottom flex flex-col gap-y-3">
										<h2 className="text-white">{itc.tags[0].title}</h2>
										<h3 className="content-title text-2xl text-white text-center">
											{itc.user.name}
										</h3>

										{itc.user.social.instagram_username ? (
											<h2 className="">
												<a
													href={`https://www.instagram.com/${itc.user.social.instagram_username}`}
													target="_blank"
													className="hover:text-gray-500 flex gap-1 justify-center items-center text-sm text-white uppercase"
												>
													<i class="fa-brands fa-instagram"></i>
													{itc.user.social.instagram_username}
												</a>
											</h2>
										) : (
											<div></div>
										)}
									</div>
								</a>
							</div>
						</Fade>
					);
				})}
			</div>
		</div>
	);
};

export default Image_Card;
