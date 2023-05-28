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
		<div className="p-8 fixed z-50 bg-bg w-full overflow-hidden flex justify-between top-0 left-0 right-0">
			<img src="./images/icon.png" className="w-12 h-12" alt="" />
			<div className="flex items-center gap-8">
				<Link onClick={(e) => scrollTopBody()} to="/" className={`link-header ${currentPath == '' ? 'on' : ''}`}>
					Home
				</Link>
				<Link
					onClick={(e) => scrollTopBody()}
					to="/experience"
					className={`link-header ${currentPath == 'experience' ? 'on' : ''}`}
				>
					Experience
				</Link>
				<Link
					onClick={(e) => scrollTopBody()}
					to="/works"
					className={`link-header ${currentPath == 'works' ? 'on' : ''}`}
				>
					Works
				</Link>
				<Link
					onClick={(e) => scrollTopBody()}
					to="/about"
					className={`link-header ${currentPath == 'about' ? 'on' : ''}`}
				>
					About
				</Link>
				<Link onClick={(e) => goToContact()} to="./#contact" className="link-header">
					Contact
				</Link>
			</div>
		</div>
	);
}

export default Header;
