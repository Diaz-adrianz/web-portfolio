import React from 'react';

export const getTextFromReactElement = (elemen) => {
	if (typeof elemen === 'string') {
		return elemen;
	}

	return React.Children.toArray(elemen.props.children)
		.map((child) => getTextFromReactElement(child))
		.join('');
};

export const gotoSection = (id) => {
	console.log(id);
	const contactSection = document.getElementById(id).offsetTop - 100;

	document.body.scrollTop = contactSection;
	document.documentElement.scrollTop = contactSection;
};

export const scrollTopBody = () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0;
};

export const showImageView = (isShow, data) => {
	const iv = document.getElementById('imageview'),
		ivSrc = document.getElementById('imageview-src'),
		ivTitle = document.getElementById('imageview-title');

	iv.classList.remove('fade', 'fadeout', 'flex', 'hidden');

	if (isShow && data) {
		iv.classList.add('fade', 'flex');
		ivSrc.src = data.src;
		ivTitle.textContent = data.title;
		document.body.classList.add('overflow-hidden');
	} else {
		iv.classList.add('fadeout');

		setTimeout(() => {
			iv.classList.add('hidden');
			document.body.classList.remove('overflow-hidden');
		}, 250);
	}
};
