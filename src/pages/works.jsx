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
				<h1 className="text-big">Works</h1>
				<p className="text-normal max-w-xl mt-8">
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
							<div className="major min-w-[260px] sm:min-w-[300px] max-w-md">
								<GalleryBox images={dat.images} />
							</div>
							<div className="minor">
								<p className="text-mini-mono text-accent mb-2">{dat.type}</p>
								<h1 className="text-subheader mb-8">{dat.title}</h1>
								<p>{dat.desc}</p>
								<div className="flex my-8 gap-2 flex-wrap">
									{dat.tags.map((tag, key) => {
										return (
											<p key={key} className="bg-secondary text-silver rounded-full px-4 py-1">
												{tag}
											</p>
										);
									})}
								</div>
								<div className="flex gap-4 flex-wrap">
									{dat.links.map((link, key) => {
										return (
											<a key={key} href={link.link} className="link">
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
