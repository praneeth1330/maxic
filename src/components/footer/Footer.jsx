import React from "react";

const Footer = () => {
	return (
		<div className="w-full font-dm flex justify-center items-center">
			<footer className="w-11/12 h-auto border-t-2 border-gray-200 ">
				<div className=" grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 justify-center items-center lg:gap-6 gap-3 h-60">
					<div className="  flex text-sm   justify-center lg:justify-start gap-3 font-bold items-center uppercase ">
						<p>term & condition</p>
						<p>policy</p>
						<p>map</p>
					</div>
					<div className=" flex flex-col justify-between gap-3 items-center">
						<h3 className=" text-5xl font-semibold">Maxic</h3>
						<p>
							© 2021 <strong>Maxic</strong>. Made with{" "}
							<i class="fa-solid fa-heart text-red-600"></i>
							by <strong>Praneeth</strong>
						</p>
					</div>
					<div className=" flex font-semibold  gap-3 items-center text-gray-400 w-full justify-center lg:justify-end cursor-pointer">
						<p className=" ">FOLLOW US ON SOCIAL</p>

						<i class="fa-brands fa-instagram fa-lg"></i>
						<i class="fa-brands fa-twitter fa-lg"></i>
						<i class="fa-brands fa-facebook fa-lg"></i>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
