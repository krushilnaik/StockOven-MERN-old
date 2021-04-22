import { faPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import '../scss/SignInForm.scss';

function SignInForm() {
	const [page, setPage] = useState('Sign in');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	/**
	 * @param {React.SyntheticEvent<HTMLButtonElement>} event
	 */
	const logIn = event => {
		event.preventDefault();

		// attempt to log the user in
	};

	/**
	 * @param {React.ChangeEvent<HTMLInputElement>} event
	 */
	const handleChange = event => {
		event.preventDefault();
		event.currentTarget.id === 'username'
			? setUsername(event.currentTarget.value)
			: setPassword(event.currentTarget.value);
	};

	const ControlPanel = () => (
		<div className='controls'>
			<div
				className='dial'
				onClick={() => {
					setPage('Sign in');
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

			<h1>{page}</h1>

			<div className='dial'></div>
			<div className='dial'></div>
		</div>
	);

	return (
		<div className='sign-in'>
			<ControlPanel />

			<div className='form-wrapper'>
				<form>
					<input
						type='text'
						defaultValue={username}
						name='username'
						id='username'
						onChange={handleChange}
						placeholder='Username:'
					/>
					<input
						type='password'
						defaultValue={password}
						name='password'
						id='password'
						onChange={handleChange}
						placeholder='Password:'
					/>
					<button type='submit' onClick={logIn}>
						Log In
					</button>
				</form>
			</div>
		</div>
	);
}

export default SignInForm;
