import React from 'react';

export const getTextFromReactElement = (elemen) => {
	if (typeof elemen === 'string') {
		return elemen;
	}

	return React.Children.toArray(elemen.props.children)
		.map((child) => getTextFromReactElement(child))
		.join('');
};
