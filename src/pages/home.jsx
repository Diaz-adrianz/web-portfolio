import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ImageBox from '../components/imagebox';

import { getTextFromReactElement } from '../helpers/common';
import { DescAtHome } from '../values/about';

import { myExperiences } from '../values/expeerience';
import { myWorks } from '../values/works';

function Home() {
	const [exps, setExps] = useState([]);
	const [works, setWorks] = useState([]);

	// FORM MESSAGE
	const [surat, setSurat] = useState({ nama: '', email: '', pesan: '' });
	const [suratOk, setSuratOk] = useState(false);

	const formControl = (e, val) => {
		setSurat((prevSurat) => {
			const newSurat = {
				...prevSurat,
				...val,
			};

			setSuratOk(newSurat.nama.length !== 0 && newSurat.email.length !== 0 && newSurat.pesan.length !== 0);

			return newSurat;
		});
	};

	useEffect(() => {
		setWorks(myWorks.slice(0, 4));
		setExps(myExperiences.slice(0, 4));
	}, []);

	return (
		<>
			<section className="min-h-screen pb-40 flex flex-col items-start justify-center">
				<span className="text-mini-mono text-accent mb-4">Hello, my name is</span>
				<h1 className="text-big">
					Diaz Adrianz
					<br />
					<span id="tagline">A Curious Software Developer</span>
				</h1>
				<p className="text-normal max-w-xl mt-8">
					Here I work with my passion wholeheartedly and always believe every place gives me valuable “stories”
				</p>
				<a href="" className="btn mt-8">
					<i className="ri-download-2-line"></i>
					<span className="text-normal-mono">Resume</span>
				</a>
			</section>

			{/* EXPERIENCE  */}
			<section className="mb-64">
				<h1 className="text-header mb-20">Experience.</h1>
				<div className="w-100 flex overflow-auto no-scrollbar">
					{exps.map((exp, key) => {
						return <ExpCard title={exp.title} place={exp.place} date={exp.date} points={exp.points} />;
					})}
				</div>
			</section>

			{/* WORKS  */}
			<section className="mb-64 pe-10 sm:pe-32 md:pe-44 lg:pe-64">
				<h1 className="text-header mb-20">Works.</h1>

				{works.map((work, key) => {
					return <ImageBox src={work.images[0]} title={work.title} caption={work.shortdesc} tags={work.tags} />;
				})}

				<Link to={'/work'} className="link mt-8">
					There are still {myWorks.length - works.length} more
					<span className="ri-arrow-right-up-line"></span>
				</Link>
			</section>

			{/* ABOUT  */}
			<section className="mb-64 pe-10  sm:pe-32 md:pe-44 lg:pe-64">
				<h1 className="text-header mb-20">About Me.</h1>
				<div className="flex items-start gap-16 flex-col md:flex-row-reverse">
					<div className="minor relative min-w-[300px] max-w-md">
						<ImageBox src={DescAtHome.image.src} title={DescAtHome.image.title} caption={''} tags={[]} />;
						<div className="absolute top-10 -left-10 bg-yellow px-4 py-1 flex gap-2 items-center  rounded-full">
							<i className={`ri-${DescAtHome.personalities[0].icon} text-2xl`}></i>
							<span className="text-normal-mono text-black font-bold">{DescAtHome.personalities[0].text}</span>
						</div>
						<div className="absolute top-40 -right-8 bg-yellow px-4 py-1 flex gap-2 items-center  rounded-full">
							<i className={`ri-${DescAtHome.personalities[1].icon} text-2xl`}></i>
							<span className="text-normal-mono text-black font-bold">{DescAtHome.personalities[1].text}</span>
						</div>
						<div className="absolute bottom-10 -left-4 bg-yellow px-4 py-1 flex gap-2 items-center  rounded-full">
							<i className={`ri-${DescAtHome.personalities[2].icon} text-2xl`}></i>
							<span className="text-normal-mono text-black font-bold">{DescAtHome.personalities[2].text}</span>
						</div>
					</div>
					<div className="major">
						<p>{DescAtHome.desc}</p>
						<Link to={'/work'} className="link mt-8">
							More detail and Other Achievements, Skills
							<span className="ri-arrow-right-up-line"></span>
						</Link>
					</div>
				</div>
			</section>

			{/* CONTACT  */}
			<section className="mb-64 pe-10  sm:pe-32 md:pe-44 lg:pe-64">
				<h1 className="text-header text-white mb-20">Lets Talk About Action Now</h1>
				<p className="text-normal max-w-2xl mb-8">
					Currently i open to any opportunity in part time work. Maybe you have question or thought, i’ll try my best to
					get back to you.
				</p>
				<div className="flex md:flex-row justify-between gap-16 flex-col">
					<div className="minor">
						<div className="flex flex-col gap-8">
							<div className="flex items-center gap-8">
								<div className="border border-yellow rounded-full flex w-20 h-20">
									<i className="ri-mail-line text-4xl text-yellow m-auto"></i>
								</div>
								<p className="text-subheader">diazz.developer@gmail.com</p>
							</div>
							<div className="flex items-center gap-8">
								<div className="border border-yellow rounded-full flex w-20 h-20">
									<i className="ri-phone-line text-4xl text-yellow m-auto"></i>
								</div>
								<p className="text-subheader">
									+62 01234142543 <span className="text-secondary">(fake)</span>
								</p>
							</div>
							<div className="flex items-center gap-8">
								<div className="border border-yellow rounded-full flex w-20 h-20">
									<i className="ri-map-pin-2-line text-4xl text-yellow m-auto"></i>
								</div>
								<p className="text-subheader">Bandung, West Java, Indonesia</p>
							</div>
						</div>
					</div>
					<div className="major">
						<form className="flex flex-col items-end gap-6 min-w-[300px] max-w-md">
							<div className="relative w-full">
								<input
									className="pt-4  border border-silver rounded-lg pb-2 px-4 text-normal peer w-full text-black bg-transparent outline-none"
									type="text"
									name="nama"
									value={surat.nama}
									onChange={(e) => formControl(e, { nama: e.target.value })}
									id=""
									required
								/>
								<span className="peer-focus:-translate-y-7 peer-valid:-translate-y-7 transition-all text-normal-mono pointer-events-none focus bg-bg px-2 absolute left-4 top-4 text-silver">
									Your name
								</span>
							</div>
							<div className="relative w-full">
								<input
									className="pt-4  border border-silver rounded-lg pb-2 px-4 text-normal peer w-full text-black bg-transparent outline-none"
									type="email"
									value={surat.email}
									onChange={(e) => formControl(e, { email: e.target.value })}
									name="email"
									id=""
									required
								/>
								<span className="peer-empty:text-silver peer-focus:-translate-y-7 peer-invalid:text-red peer-valid:-translate-y-7 transition-all text-normal-mono pointer-events-none focus bg-bg px-2 absolute left-4 top-4 text-silver">
									Your email
								</span>
							</div>
							<div className="relative w-full">
								<textarea
									className="pt-4  h-32 resize-none border border-silver rounded-lg pb-2 px-4 text-normal peer w-full text-black bg-transparent outline-none"
									type="text"
									name="pesan"
									value={surat.pesan}
									onChange={(e) => formControl(e, { pesan: e.target.value })}
									id=""
									maxLength={230}
									required
								/>
								<span className="peer-focus:-translate-y-7 peer-valid:-translate-y-7 transition-all text-normal-mono pointer-events-none focus bg-bg px-2 absolute left-4 top-4 text-silver">
									What do you think?
								</span>
							</div>
							<div className={`btn ${suratOk ? '' : 'disable'}`}>
								<span>Send</span>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}

const ExpCard = (props) => {
	let maxwords = 200;

	return (
		<div className="min-w-full sm:min-w-[400px] md:min-w-[600px] lg:min-w-[650px] pe-12">
			<h1 className="text-subheader mb-2">
				{props.title + ' '}
				<a href={props.place.link} className="link text-xl">
					@{props.place.name}
				</a>
			</h1>
			<span className="text-mini-mono text-silver">{props.date.start + ' - ' + props.date.end}</span>
			<ul className="mt-8">
				{props.points.map((p) => {
					if (maxwords < 0) return '';

					if (getTextFromReactElement(p).length < maxwords) {
						maxwords -= getTextFromReactElement(p).length;

						return <li>{p}</li>;
					} else {
						maxwords -= getTextFromReactElement(p).length;

						return (
							<li>
								<p className="text-normal">...</p>
							</li>
						);
					}
				})}
			</ul>

			<a href="" className="link mt-8">
				See all
				<span className="ri-arrow-right-up-line"></span>
			</a>
		</div>
	);
};

export default Home;
