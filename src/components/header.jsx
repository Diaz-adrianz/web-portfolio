import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gotoSection, scrollTopBody } from '../helpers/common';

function Header() {
	const location = useLocation();
	const currentPath = location.pathname.substring(1);

	const [openNav, setOpenNav] = useState(false);
	const [navVisible, setNavVisible] = useState(false);

	return (
		<div className="p-8 fixed z-50 bg-bg w-full  flex justify-between top-0 left-0 right-0">
			<img src="./images/icon.png" data-aos="zoom-out" className="w-12 h-12" alt="" />
			<button
				onClick={(e) => {
					setOpenNav(!openNav);
					setTimeout(() => {
						setNavVisible(!navVisible);
					}, 200);
				}}
				className="link-header sm:hidden"
			>
				<i className="ri-menu-3-fill text-5xl"></i>
			</button>
			<div
				onClick={(e) => {
					setOpenNav(!openNav);
					setTimeout(() => {
						setNavVisible(!navVisible);
					}, 200);
				}}
				className={`${openNav || window.innerWidth > 640 ? 'fade flex' : 'fadeout'} ${
					navVisible || window.innerWidth > 640 ? 'flex' : 'hidden'
				} fixed top-0 left-0 justify-end pb-8 sm:pb-0 right-0 bottom-0 bg-blacktint backdrop-blur-md sm:backdrop-blur-none sm:bg-transparent flex-col sm:opacity-100 sm:flex-row sm:flex sm:relative flex items-center gap-16 sm:gap-8`}
			>
				<Link onClick={(e) => scrollTopBody()} to="/" className={`link-header ${currentPath == '' ? 'on' : ''}`}>
					<p data-aos="fade-down">
						<span className="text-3xl sm:text-xl">Home</span>
					</p>
				</Link>
				<Link
					onClick={(e) => scrollTopBody()}
					to="/experience"
					className={`link-header ${currentPath == 'experience' ? 'on' : ''}`}
				>
					<p data-aos="fade-down " data-aos-delay="150">
						<span className="text-3xl sm:text-xl">Experience</span>
					</p>
				</Link>
				<Link
					onClick={(e) => scrollTopBody()}
					to="/works"
					className={`link-header ${currentPath == 'works' ? 'on' : ''}`}
				>
					<p data-aos="fade-down" data-aos-delay="300">
						<span className="text-3xl sm:text-xl">Works</span>
					</p>
				</Link>
				<Link
					onClick={(e) => scrollTopBody()}
					to="/about"
					className={`link-header ${currentPath == 'about' ? 'on' : ''}`}
				>
					<p data-aos="fade-down" data-aos-delay="450">
						<span className="text-3xl sm:text-xl">About</span>
					</p>
				</Link>
				<Link onClick={(e) => gotoSection('contact')} to="./#contact" className="link-header">
					<p data-aos="fade-down" data-aos-delay="600">
						<span className="text-3xl sm:text-xl">Contact</span>
					</p>
				</Link>
				<div className=" sm:hidden flex items-center mt-4 justify-center gap-4">
					<a target="_blank" href="https://www.instagram.com/zaid.dart/" className="link-header">
						<i className="text-3xl ri-instagram-line"></i>
					</a>
					<a target="_blank" href="https://github.com/Diaz-adrianz" className="link-header">
						<i className="text-3xl ri-github-fill"></i>
					</a>
					<a target="_blank" href="https://www.linkedin.com/in/diaz-adriansyah-1a7a9624a/" className="link-header">
						<i className="text-3xl ri-linkedin-box-line"></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Header;
