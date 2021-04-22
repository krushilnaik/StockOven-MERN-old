import React from 'react';

import SearchBar from './SearchBar';

import '../scss/NavBar.scss';
import { Link } from 'react-router-dom';

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
				<span id='brand-name'>StockOven</span>
			</div>

			<SearchBar />
			<Link to='/sign_in'>Sign in</Link>
		</nav>
	);
}

export default NavBar;
