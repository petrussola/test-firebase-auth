import React from 'react';

const Login = () => {
	const submitHandler = (e) => {
		e.preventDefault();
		console.log('logging in');
	};
	return (
		<div>
			<form onSubmit={submitHandler}>
				<label htmlFor='email'>Email</label>
				<input type='email' id='email' />
				<label htmlFor='password'>Password</label>
				<input type='password' id='password' />
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

export default Login;
