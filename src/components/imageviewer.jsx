import { showImageView } from '../helpers/common';

function ImageView(props) {
	return (
		<div
			id="imageview"
			className="fadeout hidden px-10 pb-32 pt-16 overflow-hidden fixed z-50 top-0 left-0 right-0 bottom-0 bg-blacktint backdrop-blur-md flex-col justify-center items-center"
		>
			<img
				id="imageview-src"
				src="./images/icon.png"
				className="w-full max-h-screen object-cover max-w-3xl rounded-2xl mb-4"
				alt=""
			/>
			<p id="imageview-title" className="text-subheader">
				Localhost
			</p>
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2">
				<button
					onClick={(e) => showImageView(false, false)}
					className="link-header p-2 border border-silver rounded-full"
				>
					<i className="ri-close-line text-6xl"></i>
				</button>
			</div>
		</div>
	);
}

export default ImageView;
