import { useEffect, useState } from 'react';

import ImageBox from './imagebox';

const GalleryBox = (props) => {
	const [images, setImages] = useState([]);
	const [imageOn, setImageOn] = useState({ src: '', title: '', caption: '' });
	const [isFade, setIsFade] = useState(true);

	useEffect(() => {
		setImages(props.images);
		setImageOn(props.images[0]);
	}, []);

	return (
		<div className="w-full relative">
			<div className={isFade ? 'fade' : ''}>
				<ImageBox src={imageOn.src} title={imageOn.title} caption={imageOn.caption} tags={[]} />
			</div>

			<div className="absolute bottom-2 bg-blacktint rounded-lg py-2 px-4 flex gap-2 left-1/2 -translate-x-1/2">
				{images.map((img, key) => {
					return (
						<img
							src={img.src}
							alt=""
							key={key}
							onClick={(e) => {
								setIsFade(false);
								setTimeout(() => {
									setIsFade(true);
									setImageOn(img);
								}, 100);
							}}
							className={`w-10 h-10 rounded-lg ${img.src == imageOn.src ? 'border border-accent' : ''}`}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default GalleryBox;
