import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gotoSection } from '../helpers/common';

function Header() {
	const location = useLocation();
	const currentPath = location.pathname.substring(1);

	const scrollTopBody = () => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0;
	};

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
				className={`${openNav || window.innerWidth > 640 ? 'fade block' : 'fadeout '} ${
					navVisible || window.innerWidth > 640 ? 'block' : 'hidden'
				} fixed backdrop-blur-md sm:hidden bg-blacktint top-0 left-0 right-0 bottom-0`}
			></div>
			<div
				className={`${openNav || window.innerWidth > 640 ? 'fade flex' : 'fadeout'} ${
					navVisible || window.innerWidth > 640 ? 'flex' : 'hidden'
				} fixed left-1/2 flex-col top-1/2 -translate-y-1/2 -translate-x-1/2 sm:opacity-100 sm:flex-row sm:flex sm:left-0 sm:top-0 sm:translate-x-0 sm:translate-y-0 sm:relative flex items-center gap-16 sm:gap-8`}
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
			</div>
		</div>
	);
}

export default Header;
