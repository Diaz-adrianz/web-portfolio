import { Link, useLocation } from 'react-router-dom';

function Header() {
	const location = useLocation();
	const currentPath = location.pathname.substring(1);

	const scrollTopBody = () => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0;
	};

	const goToContact = () => {
		const contactSection = document.getElementById('contact').offsetTop - 100;

		document.body.scrollTop = contactSection;
		document.documentElement.scrollTop = contactSection;
	};
	return (
		<div className="p-8 fixed z-50 bg-bg w-full  flex justify-between top-0 left-0 right-0">
			<img src="./images/icon.png" data-aos="zoom-out" className="w-12 h-12" alt="" />
			<div className="flex items-center gap-8">
				<Link onClick={(e) => scrollTopBody()} to="/" className={`link-header ${currentPath == '' ? 'on' : ''}`}>
					<p data-aos="fade-down">Home</p>
				</Link>
				<Link
					onClick={(e) => scrollTopBody()}
					to="/experience"
					className={`link-header ${currentPath == 'experience' ? 'on' : ''}`}
				>
					<p data-aos="fade-down" data-aos-delay="150">
						Experience
					</p>
				</Link>
				<Link
					onClick={(e) => scrollTopBody()}
					to="/works"
					className={`link-header ${currentPath == 'works' ? 'on' : ''}`}
				>
					<p data-aos="fade-down" data-aos-delay="300">
						Works
					</p>
				</Link>
				<Link
					onClick={(e) => scrollTopBody()}
					to="/about"
					className={`link-header ${currentPath == 'about' ? 'on' : ''}`}
				>
					<p data-aos="fade-down" data-aos-delay="450">
						About
					</p>
				</Link>
				<Link onClick={(e) => goToContact()} to="./#contact" className="link-header">
					<p data-aos="fade-down" data-aos-delay="600">
						Contact
					</p>
				</Link>
			</div>
		</div>
	);
}

export default Header;
