import { showImageView } from '../helpers/common';

const ImageBox = (props) => {
	return (
		<div
			onDoubleClick={(e) => showImageView(true, { src: props.src, title: props.title })}
			className="mb-8 group relative w-100 h-80 md:h-96  rounded-2xl overflow-hidden"
		>
			<img src={props.src} alt="" className="fade w-full h-full object-cover transition-all" />
			<div className="group-hover:opacity-100 opacity-0 transition-opacity absolute w-full h-full bg-blacktint top-0 backdrop-blur-lg left-0 "></div>
			<div className="absolute top-8 left-8 max-w-lg">
				<h1 className="group-hover:opacity-100 group-hover:top-0 transition-all -top-8 opacity-0 relative text-subheader text-white">
					{props.title}
				</h1>
				<p className="group-hover:opacity-100 group-hover:top-0 transition-all -top-16 opacity-0 relative text-normal mt-8 mb-16">
					{props.caption}
				</p>
				<div className="group-hover:opacity-100 group-hover:top-0 transition-all top-8 opacity-0 relative flex-wrap flex gap-2">
					{props.tags.map((tag, i) => {
						return (
							<p key={i} className="text-mini-mono bg-secondary text-silver rounded-full px-4 py-1">
								{tag}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ImageBox;
