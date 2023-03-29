import React from "react";
import Footer from "./footer/Footer";

const Contacts = () => {
	return (
		<div className="w-full flex justify-center items-center flex-col">
			<div className="w-11/12 flex justify-center items-center flex-col py-12">
				<div className="w-8/12 py-12">
					<p className=" font-libra text-2xl lg:text-4xl  text-center ">
						Contact us for any further questions, possible projects & business
						partnerships
					</p>
				</div>
				<div className="grid grid-cols-1 lg:flex  gap-y-6  py-6 justify-between lg:w-8/12">
					<div className="flex flex-col gap-3 lg:gap-6">
						<p className="text-lg lg:text-2xl font-libra">CONTACT DIRECTLY</p>
						<div className=" font-dm text-gray-400">
							<p>demo@example.com</p>
							<p>040125488</p>
						</div>
					</div>
					<div className="flex flex-col gap-3 lg:gap-6">
						<p className="text-lg lg:text-2xl font-libra">CONTACT DIRECTLY</p>
						<div className=" font-dm text-gray-400">
							<p>demo@example.com</p>
							<p>040125488</p>
						</div>
					</div>
					<div className="flex flex-col gap-3 lg:gap-6">
						<p className="text-lg lg:text-2xl font-libra">CONTACT DIRECTLY</p>
						<div className=" font-dm text-gray-400">
							<p>demo@example.com</p>
							<p>040125488</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center w-8/12 gap-6 py-12">
					<p className="font-libra lg:text-3xl  text-2xl">Get In Touch</p>
					<form
						action=""
						className=" gap-6 border-2 border-gray-100 p-3 grid grid-cols-1 lg:grid-cols-3 w-full items-center justify-center"
					>
						<input
							type="text"
							placeholder="yourname"
							className="capitalize h-10 border-2 border-gray-100 outline-0 px-3"
						/>
						<input
							type="text"
							placeholder="yourname"
							className="capitalize h-10 border-2 border-gray-100 outline-0 px-3"
						/>
						<input
							type=""
							placeholder="yourname"
							className="capitalize h-10 border-2 border-gray-100 outline-0 px-3"
						/>
						<textarea
							name=""
							id=""
							cols="30"
							rows="10"
							className=" capitalize px-3  col-span-3 border-2 border-gray-100 outline-0"
							placeholder="discription"
						></textarea>

						<button type="submit" className="border-2 p-1">
							submit
						</button>
					</form>
				</div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7776.597296283161!2d77.5724766735574!3d12.952731813472946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15eee9e9dfff%3A0xea56b6ad7b85db1a!2sVishweshwarapura%2C%20Shankarapura%2C%20Bengaluru%2C%20Karnataka%20560004!5e0!3m2!1sen!2sin!4v1677907980167!5m2!1sen!2sin"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					className=" w-full lg:h-96 h-56"
				></iframe>
			</div>
			<Footer />
		</div>
	);
};

export default Contacts;
