import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ImageBox from '../components/imagebox';

import { getTextFromReactElement } from '../helpers/common';
import { DescAtHome } from '../values/about';

import { myExperiences } from '../values/expeerience';
import { myReviews } from '../values/reviews';
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
			<section className="min-h-screen pe-10 sm:pe-32 md:pe-44 lg:pe-64 pb-8 sm:pb-20 flex flex-col items-start justify-center">
				<span
					className="text-normal-mono text-accent mb-4"
					data-aos-once="true"
					data-aos="fade-up"
					data-aos-duration="700"
				>
					Hello, my name is
				</span>
				<h1 className="text-big" data-aos-once="true" data-aos="flip-up" data-aos-duration="700">
					Diaz Adrianz
					<br />
					<span id="tagline">A Curious Software Developer</span>
				</h1>
				<p className="text-normal max-w-xl mt-8" data-aos-once="true" data-aos="fade-down" data-aos-duration="700">
					Currently, i am a vocational student at SMKN 4 Bandung in field software engineer. Even so. i open for new
					opportunity.
				</p>
				<a href="" className="btn mt-8" data-aos-once="true" data-aos="zoom-out" data-aos-duration="700">
					<i className="ri-download-2-line"></i>
					<span className="text-normal-mono">Resume</span>
				</a>
			</section>

			{/* EXPERIENCE  */}
			<section className="mb-64">
				<h1 className="text-header mb-20" data-aos-once="true" data-aos="fade-right" data-aos-duration="700">
					Experience.
				</h1>
				<div className="w-100 flex overflow-auto no-scrollbar">
					{exps.map((exp, key) => {
						return (
							<div data-aos-once="true" data-aos="fade-left" data-aos-duration="700" data-aos-delay={key * 150}>
								<ExpCard title={exp.title} place={exp.place} date={exp.date} points={exp.points} />;
							</div>
						);
					})}
				</div>
			</section>

			{/* WORKS  */}
			<section className="mb-64 pe-10 sm:pe-32 md:pe-44 lg:pe-64">
				<h1 className="text-header mb-20" data-aos-once="true" data-aos="fade-right" data-aos-duration="700">
					Works.
				</h1>

				{works.map((work, key) => {
					return (
						<div data-aos-once="true" data-aos="fade-up" data-aos-duration="700">
							<ImageBox
								src={work.images[0].src}
								title={work.images[0].title}
								caption={work.images[0].caption}
								tags={work.tags}
							/>
						</div>
					);
				})}

				<Link to={'/work'} data-aos-once="true" data-aos="fade-right" data-aos-duration="700" className="link mt-8">
					There are still {myWorks.length - works.length} more
					<span
						className="ri-arrow-right-up-line"
						data-aos="fade-right"
						data-aos-duration="700"
						data-aos-delay="150"
					></span>
				</Link>
			</section>

			{/* SERVICES  */}
			<section className="mb-64 pe-10 sm:pe-32 md:pe-44 lg:pe-64">
				<h1 className="text-header mb-2" data-aos-once="true" data-aos="fade-right" data-aos-duration="700">
					What can I do for you?.
				</h1>
				<p
					className="text-normal max-w-2xl mb-20"
					data-aos-once="true"
					data-aos="fade-right"
					data-aos-duration="700"
					data-aos-delay="150"
				>
					I am open to any like these works!{' '}
					<a href="/about#skills" className="link">
						<span className="text-mini-mono">See tools I use</span>
					</a>
				</p>
				<div className="grid w-full gap-4 grid-cols-1 sm:grid-cols-3">
					<div data-aos-once="true" data-aos="fade-up" data-aos-duration="700">
						<div className="bg-secondary hover:-translate-y-2 transition-transform rounded-2xl p-8 flex flex-col items-center gap-4">
							<i
								className={`text-8xl ri-window-line`}
								// style={{ color: skil.iconTint }}
							></i>
							<p className="text-subheader text-silver">Web Development</p>
						</div>
					</div>
					<div data-aos-once="true" data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">
						<div className="bg-secondary hover:-translate-y-2 transition-transform rounded-2xl p-8 flex flex-col items-center gap-4">
							<i
								className={`text-8xl ri-window-line`}
								// style={{ color: skil.iconTint }}
							></i>
							<p className="text-subheader text-silver">Backend Development</p>
						</div>
					</div>
					<div data-aos-once="true" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
						<div className="bg-secondary hover:-translate-y-2 transition-transform rounded-2xl p-8 flex flex-col items-center gap-4">
							<i
								className={`text-8xl ri-window-line`}
								// style={{ color: skil.iconTint }}
							></i>
							<p className="text-subheader text-silver">Mobile Development</p>
						</div>
					</div>
				</div>
			</section>

			{/* ABOUT  */}
			<section className="mb-64 pe-10  sm:pe-32 md:pe-44 lg:pe-64">
				<h1 className="text-header mb-20" data-aos-once="true" data-aos="fade-right" data-aos-duration="700">
					About Me.
				</h1>
				<div className="flex items-center lg:items-start gap-4 lg:gap-16 flex-col lg:flex-row-reverse">
					<div className="minor relative min-w-[260px] sm:min-w-[300px] max-w-md">
						<ImageBox
							data-aos="zoom-out"
							data-aos-duration="700"
							src={DescAtHome.image.src}
							title={DescAtHome.image.title}
							caption={''}
							tags={[]}
						/>
						;
						<div
							data-aos="fade-right"
							data-aos-duration="700"
							className="absolute top-10 -left-10 bg-yellow px-4 py-1 flex gap-2 items-center  rounded-full"
						>
							<i className={`ri-${DescAtHome.personalities[0].icon} text-2xl`}></i>
							<span className="text-normal-mono text-black font-bold">{DescAtHome.personalities[0].text}</span>
						</div>
						<div
							data-aos="fade-left"
							data-aos-duration="700"
							data-aos-delay="150"
							className="absolute top-40 -right-8 bg-yellow px-4 py-1 flex gap-2 items-center  rounded-full"
						>
							<i className={`ri-${DescAtHome.personalities[1].icon} text-2xl`}></i>
							<span className="text-normal-mono text-black font-bold">{DescAtHome.personalities[1].text}</span>
						</div>
						<div
							data-aos="fade-right"
							data-aos-duration="700"
							data-aos-delay="300"
							className="absolute bottom-10 -left-4 bg-yellow px-4 py-1 flex gap-2 items-center  rounded-full"
						>
							<i className={`ri-${DescAtHome.personalities[2].icon} text-2xl`}></i>
							<span className="text-normal-mono text-black font-bold">{DescAtHome.personalities[2].text}</span>
						</div>
					</div>
					<div className="major">
						<p data-aos-once="true" data-aos="fade-up" data-aos-duration="700">
							{DescAtHome.desc}
						</p>
						<Link data-aos-once="true" data-aos="fade-down" data-aos-duration="700" to={'/work'} className="link mt-8">
							More detail and Other Achievements, Skills
							<span
								data-aos="fade-right"
								data-aos-duration="700"
								data-aos-delay="150"
								className="ri-arrow-right-up-line"
							></span>
						</Link>
					</div>
				</div>
			</section>

			{/* REVIEWS */}
			<section className="mb-64 pe-10 sm:pe-32 md:pe-44 lg:pe-64">
				<h1 className="text-header mb-2" data-aos-once="true" data-aos="fade-right" data-aos-duration="700">
					What've They Said.
				</h1>
				<p
					className="text-normal max-w-2xl mb-20"
					data-aos-once="true"
					data-aos="fade-right"
					data-aos-duration="700"
					data-aos-delay="150"
				>
					Most of them review positively. Next yours review here!
				</p>
				<div className="w-full flex flex-wrap gap-4">
					{myReviews.map((rev, i) => {
						return (
							<div
								key={i}
								data-aos="fade-left"
								data-aos-duration="700"
								data-aos-delay={i * 150}
								className="bg-secondary w-80 p-6 rounded-2xl"
							>
								<h1 className="text-6xl ri-double-quotes-r text-bg"></h1>
								<div className="mt-4 mb-8">{rev.text}</div>
								<div className="flex gap-4 items-center	">
									<img src={rev.image} className="w-12 h-12 rounded-full" alt="" />
									<div className="">
										<h4 className="text-normal ">{rev.name}</h4>
										<p className="-mt-1 text-mini-mono text-silver">
											{rev.role}{' '}
											<a href={rev.place.link} className="link">
												@{rev.place.name}
											</a>
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			{/* CONTACT  */}
			<section id="contact" className="mb-64 pe-10  sm:pe-32 md:pe-44 lg:pe-64">
				<h1 className="text-header text-white mb-2" data-aos-once="true" data-aos="fade-right" data-aos-duration="700">
					Lets Talk About Action Now
				</h1>
				<p
					className="text-normal max-w-2xl mb-20"
					data-aos-once="true"
					data-aos="fade-right"
					data-aos-duration="700"
					data-aos-delay="150"
				>
					Currently i open to any opportunity in part time work. Maybe you have question or thought, i’ll try my best to
					get back to you.
				</p>
				<div className="flex lg:flex-row justify-between gap-16 flex-col">
					<div className="minor">
						<div className="flex flex-col gap-8">
							<div
								data-aos-once="true"
								data-aos="fade-right"
								data-aos-duration="700"
								className="flex items-center gap-8"
							>
								<div className="border border-yellow rounded-full flex w-20 h-20">
									<i className="ri-mail-line text-4xl text-yellow m-auto"></i>
								</div>
								<p className="text-normal sm:text-subheader">diazz.developer@gmail.com</p>
							</div>
							<div
								data-aos="fade-right"
								data-aos-duration="700"
								data-aos-delay="150"
								className="flex items-center gap-8"
							>
								<div className="border border-yellow rounded-full flex w-20 h-20">
									<i className="ri-phone-line text-4xl text-yellow m-auto"></i>
								</div>
								<p className="text-normal sm:text-subheader">
									+62 01234142543 <span className="text-secondary">(fake)</span>
								</p>
							</div>
							<div
								data-aos="fade-right"
								data-aos-duration="700"
								data-aos-delay="300"
								className="flex items-center gap-8"
							>
								<div className="border border-yellow rounded-full flex w-20 h-20">
									<i className="ri-map-pin-2-line text-4xl text-yellow m-auto"></i>
								</div>
								<p className="text-normal sm:text-subheader">Bandung, West Java, Indonesia</p>
							</div>
						</div>
					</div>
					<div className="major">
						<form className="flex flex-col items-end gap-6 min-w-[300px] max-w-md">
							<div className="relative w-full">
								<input
									data-aos="flip-up"
									data-aos-duration="700"
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
									data-aos="flip-up"
									data-aos-duration="700"
									data-aos-delay="150"
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
									data-aos="flip-up"
									data-aos-duration="700"
									data-aos-delay="300"
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
							<div
								data-aos-once="true"
								data-aos="zoom-in"
								data-aos-duration="700"
								className={`btn ${suratOk ? '' : 'disable'}`}
							>
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
				{props.points.map((p, key) => {
					if (maxwords < 0) return <span key={key}></span>;

					if (getTextFromReactElement(p).length < maxwords) {
						maxwords -= getTextFromReactElement(p).length;

						return <li key={key}>{p}</li>;
					} else {
						maxwords -= getTextFromReactElement(p).length;

						return (
							<li key={key}>
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
