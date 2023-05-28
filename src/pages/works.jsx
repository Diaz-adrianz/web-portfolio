import { useEffect, useState } from 'react';
import GalleryBox from '../components/gallerybox';
import { myWorks } from '../values/works';

function Works() {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(myWorks);
	}, []);

	return (
		<div className="sm:pe-32 md:pe-44 lg:pe-64 pe-10">
			<section className="min-h-screen flex flex-col pb-28 justify-center">
				<h1 className="text-big" data-aos="flip-up" data-aos-duration="700">
					Works
				</h1>
				<p className="text-normal max-w-xl mt-8" data-aos="fade-down" data-aos-duration="700">
					There many projects i’ve built. From client, school assignment even to fill my bored time.
				</p>
			</section>
			{data.map((dat, i) => {
				return (
					<section className="mb-64 " key={i}>
						<div
							className={`flex flex-col ${
								i % 2 == 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
							} gap-4 lg:gap-16 items-start justify-between`}
						>
							<div
								data-aos={i % 2 == 0 ? 'fade-right' : 'fade-left'}
								data-aos-duration="700"
								className="major min-w-[260px] sm:min-w-[300px] lg:sm:min-w-[450px] max-w-md"
							>
								<GalleryBox images={dat.images} />
							</div>
							<div className="minor">
								<p data-aos="flip-up" data-aos-duration="700" className="text-mini-mono text-accent mb-2">
									{dat.type}
								</p>
								<h1 data-aos="flip-up" data-aos-duration="700" className="text-subheader mb-8">
									{dat.title}
								</h1>
								<p data-aos="fade-up" data-aos-duration="700">
									{dat.desc}
								</p>
								<div className="flex my-8 gap-2 flex-wrap">
									{dat.tags.map((tag, key) => {
										return (
											<p
												data-aos="fade-up"
												data-aos-duration="700"
												data-aos-delay={key * 150}
												key={key}
												className="bg-secondary text-silver rounded-full px-4 py-1"
											>
												{tag}
											</p>
										);
									})}
								</div>
								<div className="flex gap-4 flex-wrap">
									{dat.links.map((link, key) => {
										return (
											<a
												data-aos="fade-up"
												data-aos-duration="700"
												data-aos-delay={key * 150}
												key={key}
												href={link.link}
												className="link"
											>
												<i className={`text-5xl ri-${link.icon}`}></i>
											</a>
										);
									})}
								</div>
							</div>
						</div>
					</section>
				);
			})}
		</div>
	);
}

export default Works;
