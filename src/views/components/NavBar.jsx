import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import SearchBar from './SearchBar';

import '../scss/NavBar.scss';

/**
 * TODO: only display search bar when logged in
 */
function NavBar() {
	let history = useHistory();

	/**
	 * @param {React.SyntheticEvent<HTMLButtonElement>} event
	 */
	const logOut = event => {
		event.preventDefault();

		// log user out

		// redirect to sign in page
		history.push('/sign_in');
	};

	return (
		<nav>
			<div className='left'>
				<img src='' alt='' id='logo' />
				<Link to='/'>StockOven</Link>
			</div>

			<div className='right'>
				<SearchBar />
				<button className='user-settings' onClick={logOut}></button>
			</div>
		</nav>
	);
}

export default NavBar;
