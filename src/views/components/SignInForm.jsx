import { faPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import '../scss/SignInForm.scss';

function SignInForm() {
	const [page, setPage] = useState('Sign in');

	/**
	 * @param {React.SyntheticEvent<HTMLButtonElement>} event
	 */
	const logIn = event => {
		event.preventDefault();

		// attempt to log the user in
	};

	return (
		<div className='sign-in'>
			<div className='controls'>
				<div
					className='dial'
					onClick={() => {
						setPage('Create user');
					}}
				>
					<FontAwesomeIcon icon={faSignInAlt} />
				</div>
				<div
					className='dial'
					onClick={() => {
						setPage('Create user');
					}}
				>
					<FontAwesomeIcon icon={faPlus} />
				</div>
			</div>

			<div className='form-wrapper'>
				<form>
					<h1>{page}</h1>
					<input type='text' name='username' id='username' placeholder='Username:' />
					<input type='password' name='password' id='password' placeholder='Password:' />
					<button type='submit' onClick={logIn}>
						Log In
					</button>
				</form>
			</div>
		</div>
	);
}

export default SignInForm;
