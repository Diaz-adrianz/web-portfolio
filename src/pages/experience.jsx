import { useEffect, useState } from 'react';
import GalleryBox from '../components/gallerybox';
import { myExperiences } from '../values/expeerience';

function Experience() {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(myExperiences);
	}, []);

	return (
		<div className="pe-10 sm:pe-32 md:pe-44 lg:pe-64">
			<section className="min-h-screen pb-28 flex flex-col  justify-center">
				<h1 className="text-big">Experience</h1>
				<p className="text-normal max-w-xl mt-8">
					Here I work with my passion wholeheartedly and always believe every place gives me valuable “stories”
				</p>
			</section>
			{data.map((dat, i) => {
				return (
					<section key={i} className="mb-64">
						<div
							className={`flex flex-col ${
								i % 2 == 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
							} gap-4  lg:gap-16 items-start justify-between`}
						>
							<div className="major min-w-[260px] sm:min-w-[300px] max-w-md">
								<GalleryBox images={dat.images} />
							</div>
							<div className="minor">
								<h1 className="text-subheader mb-2">
									{dat.title + ' '}
									<a href={dat.place.link} className="link text-xl">
										@{dat.place.name}
									</a>
								</h1>
								<span className="text-mini-mono text-silver">
									{dat.date.start} - {dat.date.end}
								</span>
								<ul className="mt-8">
									{dat.points.map((poin, key) => {
										return <li key={key}>{poin}</li>;
									})}
								</ul>

								{dat.credentials.map((cred, key) => {
									return (
										<a href={cred} key={key} className="link mt-8">
											Credential
											<span className="ri-arrow-right-up-line"></span>
										</a>
									);
								})}
							</div>
						</div>
					</section>
				);
			})}
		</div>
	);
}

export default Experience;
