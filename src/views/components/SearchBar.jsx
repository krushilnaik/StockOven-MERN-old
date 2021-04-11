import React, { useState } from 'react';

function SearchBar() {
	const [value, setValue] = useState('');

	/**
	 * @param {React.ChangeEvent<HTMLInputElement>} event
	 */
	const handleChange = event => {
		event.preventDefault();
		setValue(event.currentTarget.value);
	};

	return <input value={value} onChange={handleChange} type='text' id='stock-search' />;
}

export default SearchBar;
