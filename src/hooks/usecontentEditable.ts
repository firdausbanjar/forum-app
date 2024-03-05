import React, { useState } from 'react';

const useContentEditable = (defaultValue: string = ''): [
	string,
	(event: React.FormEvent<HTMLDivElement>) => void,
] => {
	const [value, setValue] = useState(defaultValue);

	const onValueChange = (event: React.FormEvent<HTMLDivElement>) => {
		setValue(event.currentTarget.innerHTML);
	};

	return [value, onValueChange];
};

export default useContentEditable;
