import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import '../scss/SearchBar.scss';

function SearchBar() {
	const [value, setValue] = useState('');

	/**
	 * @param {React.ChangeEvent<HTMLInputElement>} event
	 */
	const handleChange = event => {
		event.preventDefault();
		setValue(event.currentTarget.value);
	};

	/**
	 * @param {React.SyntheticEvent<SVGSVGElement>} event
	 */
	const handleClick = event => {
		event.preventDefault();
		console.log('click registered');
	};

	return (
		<div className='search-bar'>
			<FontAwesomeIcon icon={faSearch} type='button' onClick={handleClick} />
			<input
				type='text'
				name='search'
				id='search-field'
				onChange={handleChange}
				defaultValue={value}
				placeholder='Search stock symbols:'
			/>
		</div>
	);
}

export default SearchBar;
