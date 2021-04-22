import { faPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

import OvenDial from './OvenDial';

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
			<OvenDial icon={faSignInAlt} onClick={() => setPage('Sign In')} />
			<OvenDial icon={faPlus} onClick={() => setPage('Create User')} />

			<h1>{page}</h1>

			<OvenDial />
			<OvenDial />
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
