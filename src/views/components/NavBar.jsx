import React from 'react';

import SearchBar from './SearchBar';

import '../scss/NavBar.scss';

function NavBar() {
	return (
		<nav>
			<div className='left'>
				<img src='' alt='' id='logo' />
				<span id='brand-name'>StockOven</span>
			</div>

			<SearchBar />
		</nav>
	);
}

export default NavBar;
