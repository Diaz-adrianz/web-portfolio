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
