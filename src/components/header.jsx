import { Link, useLocation } from 'react-router-dom';

function Header() {
	const location = useLocation();
	const currentPath = location.pathname.substring(1);

	return (
		<div className="m-8 flex justify-between">
			<img src="./images/icon.png" className="w-12 h-12" alt="" />
			<div className="relative flex items-center gap-8">
				<Link to="/" className={`link-header ${currentPath == '' ? 'on' : ''}`}>
					Home
				</Link>
				<Link to="/experience" className={`link-header ${currentPath == 'experience' ? 'on' : ''}`}>
					Experience
				</Link>
				<Link to="/works" className={`link-header ${currentPath == 'works' ? 'on' : ''}`}>
					Works
				</Link>
				<Link to="/about" className={`link-header ${currentPath == 'about' ? 'on' : ''}`}>
					About
				</Link>
				<Link to="#contact" className="link-header">
					Contact
				</Link>
			</div>
		</div>
	);
}

export default Header;
