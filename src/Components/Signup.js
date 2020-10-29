import React from 'react';

const Signup = ({ fb }) => {
	const submitHandler = (e) => {
		e.preventDefault();
		console.log('signing up');
		fb.auth()
	};
	return (
		<div>
			{' '}
			<form onSubmit={submitHandler}>
				<label htmlFor='email'>Email</label>
				<input type='email' id='email' />
				<label htmlFor='password'>Password</label>
				<input type='password' id='password' />
				<button type='submit'>Signup</button>
			</form>
		</div>
	);
};

export default Signup;
