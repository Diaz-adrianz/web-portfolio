function SocialMediaSideBar() {
	return (
		<div className="hidden md:flex  flex-col fixed left-8 items-center bottom-0 h-3/5 gap-4">
			<a
				target="_blank"
				href="https://www.instagram.com/zaid.dart/"
				className="link-header"
				data-aos="fade-right"
				data-aos-delay="700"
			>
				<i className="text-3xl ri-instagram-line"></i>
			</a>
			<a
				target="_blank"
				href="https://github.com/Diaz-adrianz"
				className="link-header"
				data-aos="fade-right"
				data-aos-delay="300"
			>
				<i className="text-3xl ri-github-fill"></i>
			</a>
			<a
				target="_blank"
				href="https://www.linkedin.com/in/diaz-adriansyah-1a7a9624a/"
				className="link-header"
				data-aos="fade-right"
			>
				<i className="text-3xl ri-linkedin-box-line"></i>
			</a>

			<div className="w-1 bg-silver grow rounded" data-aos="fade-up" data-delay=""></div>
		</div>
	);
}

export default SocialMediaSideBar;
