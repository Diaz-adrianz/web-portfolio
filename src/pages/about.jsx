import { aboutMe } from '../values/about';
import GalleryBox from '../components/gallerybox';
import ImageBox from '../components/imagebox';

function About() {
	return (
		<>
			<section className="min-h-screen pe-10 sm:pe-32 md:pe-44 lg:pe-64 pb-64 flex flex-col  justify-center">
				<h1 className="text-big">About Me.</h1>
				<p className="text-normal max-w-xl mt-8">
					Let me introduce myself. How about my life is going, i hope you enjoy and interested.
				</p>
			</section>
			<section className="mb-64 pe-10 sm:pe-32 md:pe-44 lg:pe-64">
				<div className="flex flex-col items-start gap-16 lg:flex-row justify-start">
					<div className="minor min-w-[300px] max-w-md">
						<GalleryBox images={aboutMe.images} />
					</div>
					<div className="major">
						<div className="mb-4">{aboutMe.title}</div>
						<div className="flex flex-wrap gap-2 mb-8 items-center">
							{aboutMe.roles.map((role, i) => {
								return (
									<p key={i} className="bg-secondary  text-mini-mono text-silver rounded-full px-4 py-1">
										{role}
									</p>
								);
							})}
							<a className=" bg-accent cursor-pointer hover:bg-accenttint text-black rounded-full px-4 py-1">
								<span className="text-mini-mono text-black">Resume</span>
							</a>
						</div>
						<div>{aboutMe.longDesc}</div>
					</div>
				</div>
			</section>

			{/* ACHIEVEMENTS  */}
			<section className="mb-64">
				<h1 className="text-header mb-20">Achievements.</h1>
				{loopAchievments(aboutMe.achievements)}
			</section>

			{/* SKILLS  */}
			<section className="mb-64 pe-10 sm:pe-32 md:pe-44 lg:pe-64">
				<h1 className="text-header mb-20">Skills.</h1>
				<div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
					{aboutMe.skills.map((skil, i) => {
						return (
							<div className="bg-secondary hover:-translate-y-2 transition-transform rounded-2xl p-8 flex flex-col items-center gap-4">
								<i
									className={`text-8xl devicon-${skil.icon} text-[${skil.iconTint}]`}
									style={{ color: skil.iconTint }}
								></i>
								<p className="text-subheader text-silver">{skil.title}</p>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
}

const loopAchievments = (items) => {
	const rows = [];
	for (let i = 0; i < items.length; i += 3) {
		const rowItems = items.slice(i, i + 3);
		rows.push(
			<div className="w-100 flex gap-4 overflow-auto no-scrollbar" key={i}>
				{rowItems.map((item, index) => (
					<div key={index} className="min-w-[300px] md:min-w-[450px]">
						<ImageBox src={item.src} title={item.title} caption={item.caption} tags={[]} />
					</div>
				))}
			</div>
		);
	}

	return rows;
};

export default About;
