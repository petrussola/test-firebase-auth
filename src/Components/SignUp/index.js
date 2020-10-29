import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase/index';
import * as ROUTES from '../../Constants/routes';

const SignUpPage = () => (
	<div>
		<h1>SignUp</h1>
		<SignUpForm />
	</div>
);

const initialState = {
	username: '',
	email: '',
	passwordOne: '',
	passwordTwo: '',
	error: null,
};

const SignUpFormBase = (props) => {
	const [user, setUser] = useState(initialState);

	const onSubmit = (event) => {
		const { username, email, passwordOne } = user;

		props.firebase
			.doCreateUserWithEmailAndPassword(email, passwordOne)
			.then((authUser) => {
				debugger;
				setUser(initialState);
				props.history.push(ROUTES.HOME);
			})
			.catch((error) => {
				debugger;
				setUser({ error });
			});

		event.preventDefault();
	};

	const onChange = (event) => {
		setUser({
			...user,
			[event.target.name]: event.target.value,
		});
	};

	const isInvalid =
		user.passwordOne !== user.passwordTwo ||
		user.passwordOne === '' ||
		user.email === '' ||
		user.username === '';

	return (
		<form onSubmit={onSubmit}>
			<input
				name='username'
				value={user.username}
				onChange={onChange}
				type='text'
				placeholder='Full Name'
			/>
			<input
				name='email'
				value={user.email}
				onChange={onChange}
				type='text'
				placeholder='Email Address'
			/>
			<input
				name='passwordOne'
				value={user.passwordOne}
				onChange={onChange}
				type='password'
				placeholder='Password'
			/>
			<input
				name='passwordTwo'
				value={user.passwordTwo}
				onChange={onChange}
				type='password'
				placeholder='Confirm Password'
			/>
			<button type='submit' disabled={isInvalid}>
				Sign Up
			</button>

			{user.error && <p>{user.error.message}</p>}
		</form>
	);
};

const SignUpLink = () => (
	<p>
		Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
	</p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };
