import React, { useEffect, useState } from "react";
import Logo from "./pm.logo.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
	const [nav, setNav] = useState(false);
	const [search, setSearch] = useState(false);
	const [scroll, setScroll] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		changeBackground();
	});
	const changeBackground = () => {
		if (window.scrollY >= 200) {
			setScroll(false);
		} else {
			setScroll(true);
		}
	};

	window.addEventListener("scroll", changeBackground);

	const nav_close = () => {
		setNav(!nav);
	};
	const nav_close_2 = () => {
		setNav(!nav);
		setOpen(!open);
	};

	return (
		<div>
			<div className=" flex justify-center items-center z-50 w-full h-24  ">
				<nav
					className={
						scroll
							? "flex justify-between items-center w-11/12 h-20 md:h-24  fixed z-40 bg-white navbar nav-act border-b-2 border-gray-200 "
							: "flex justify-between items-center w-11/12 h-14 md:h-16 top-0 transition-all duration-700 scroll-smooth fixed z-40 bg-white navbar nav-act border-b-2 border-gray-200"
					}
				>
					<div className="w-6 h items-center" onClick={() => setNav(!nav)}>
						{nav ? (
							<div className=""></div>
						) : (
							<div className="flex items-center gap-2">
								<i class="fa-solid fa-bars fa-lg cursor-pointer "></i>
								<p className="text-lg">Menu</p>
							</div>
						)}
					</div>

					<div
						className={
							scroll
								? " w-10 h-10 flex justify-center items-center text-2xl gap-1 cursor-pointer"
								: " w-8 h-8 flex justify-center items-center text-xl transition-all cursor-pointer scroll-smooth duration-500 gap-1 "
						}
					>
						<img src={Logo} alt="" className=" " />

						<a href="/">
							<h1>Maxic</h1>
						</a>
					</div>
					<div className="" onClick={() => setSearch(!search)}>
						{search ? (
							<div className="">
								<i class="fa-solid fa-magnifying-glass  cursor-pointer"></i>
							</div>
						) : (
							<i class="fa-solid fa-magnifying-glass  cursor-pointer"></i>
						)}
					</div>
				</nav>
				{nav && (
					<ul
						className={
							scroll
								? " nav top-0 left-0 w-full h-fit py-4 lg:py-0 pt-24  lg:w-3/12 lg:h-full bg-black gap-6 text-white flex flex-col items-center  justify-center z-50 fixed"
								: " nav top-0 left-0 w-full h-fit py-4  lg:py-0 pt-24 lg:w-3/12 lg:h-full bg-black gap-6 text-white flex flex-col items-center justify-center  z-50 fixed"
						}
					>
						<div className="" onClick={() => setNav(!nav)}>
							<i class="fa-solid fa-xmark   fa-2xl text-gray-400 z-50 hover:text-white top-16 right-5 absolute "></i>
						</div>
						<NavLink to="/">
							<li className="nav-li" onClick={nav_close}>
								home
							</li>
						</NavLink>
						<NavLink to="about">
							<li className="nav-li" onClick={nav_close}>
								About
							</li>
						</NavLink>
						<div className="flex items-center justify-between  flex-col">
							<div className=" flex items-center justify-between gap-3">
								<NavLink to="portfolio">
									<li className="nav-li " onClick={nav_close}>
										<p>portfolio</p>
									</li>
								</NavLink>
								<p
									className=" cursor-pointer text-xl  hover:border-b-2 border-2 border-transparent hover:border-b-white  "
									onClick={() => setOpen(!open)}
								>
									+
								</p>
							</div>
							<div className=" ">
								{open && (
									<ul className=" w-full flex flex-col gap-2 py-1">
										<NavLink to="portfolio">
											<li
												onClick={nav_close_2}
												className="hover:border-b-2 inline-block border-2 border-transparent hover:border-b-white"
											>
												Portfolio
											</li>
										</NavLink>
										<NavLink to="portfolio_details">
											<li
												onClick={nav_close_2}
												className="hover:border-b-2 inline-block  border-2 border-transparent hover:border-b-white "
											>
												Portfolio Details
											</li>
										</NavLink>
									</ul>
								)}
							</div>
						</div>
						<NavLink to="videos">
							<li className="nav-li" onClick={nav_close}>
								videos
							</li>
						</NavLink>
						<NavLink to="contacts">
							<li className="nav-li" onClick={nav_close}>
								contact
							</li>
						</NavLink>
					</ul>
				)}
				{nav && (
					<>
						<div className="fixed bg-black opacity-60 w-full h-full top-0 left-0 z-40"></div>
					</>
				)}
				{search && (
					<form
						onSubmit=""
						className=" w-full h-auto flex justify-center items-center top-0  bg-black fixed z-50"
					>
						<div className="" onClick={() => setSearch(!search)}>
							<i class="fa-solid fa-xmark   fa-2x text-gray-400 z-50 hover:text-white top-10 right-10 absolute "></i>
						</div>
						<input
							type="text"
							className="items-center text-white capitalize border-0 outline-0 bg-transparent border-b-4 absolute top-48 w-8/12 h-16 z-50 lg:text-6xl md:text-2xl text-xl "
							placeholder=" Search"
						/>
					</form>
				)}
				{search && (
					<>
						<div className="fixed bg-black opacity-60 w-full h-full top-0 left-0 z-40"></div>
					</>
				)}
			</div>
		</div>
	);
};

export default Nav;
