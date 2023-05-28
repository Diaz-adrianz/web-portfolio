function Footer() {
	return (
		<footer className="w-screen text-center my-8">
			<h1 className="text-normal">Designed & Built by Diaz @2022</h1>
			<div className=" md:hidden flex items-center mt-4 justify-center gap-4">
				<a href="" className="link-header">
					<i className="text-3xl ri-instagram-line"></i>
				</a>
				<a href="" className="link-header">
					<i className="text-3xl ri-github-fill"></i>
				</a>
				<a href="" className="link-header">
					<i className="text-3xl ri-linkedin-box-line"></i>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
