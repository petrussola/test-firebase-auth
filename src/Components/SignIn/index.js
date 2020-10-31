import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { SignUpLink } from '../SignUp/index';
import { PasswordForgetLink } from '../PasswordForget/index';
import { withFirebase } from '../Firebase/index';

import * as ROUTES from '../../Constants/routes';

const SignInPage = () => {
	return (
		<div>
			<h1>SignIn</h1>
			<SignInForm />
			<PasswordForgetLink />
			<SignUpLink />
		</div>
	);
};

const initialState = {
	email: '',
	password: '',
	error: null,
};

const SignInFormBase = (props) => {
	const [user, setUser] = useState(initialState);

	const { email, password, error } = user;
	const onSubmit = (event) => {
		props.firebase
			.doSignInWithEmailAndPassword(email, password)
			.then(() => {
				setUser(initialState);
				props.history.push(ROUTES.HOME);
			})
			.catch((error) => {
				setUser({ ...user, password: '', error });
			});
		event.preventDefault();
	};

	const onChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const isInvalid = password === '' || email === '';

	return (
		<form onSubmit={onSubmit}>
			<input
				name='email'
				value={email}
				onChange={onChange}
				type='text'
				placeholder='Email Address'
			/>
			<input
				name='password'
				value={password}
				onChange={onChange}
				type='password'
				placeholder='Password'
			/>
			<button disabled={isInvalid} type='submit'>
				Sign In
			</button>

			{error && <p>{error.message}</p>}
		</form>
	);
};

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInPage;

export { SignInForm };
