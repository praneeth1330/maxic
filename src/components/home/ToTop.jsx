import React, { useState, useEffect } from "react";

function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 800) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			className={`scroll-to-top ${isVisible ? "show" : ""}  `}
			onClick={scrollToTop}
		>
			<i class="fa-regular fa-circle-up "></i>
		</button>
	);
}

export default ScrollToTopButton;
