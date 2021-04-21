import React from 'react';

import '../scss/SignInForm.scss';

function SignInForm() {
	return (
		<div className='sign-in'>
			{/* This is just for show. */}
			<div className='controls'>
				<div className='dial'></div>
				<div className='dial'></div>
			</div>

			{/* The actual form */}
			<form></form>
		</div>
	);
}

export default SignInForm;
