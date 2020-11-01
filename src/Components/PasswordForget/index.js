import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../Constants/routes';
import { FirebaseContext } from '../Firebase/index';

const PasswordForgetPage = () => {
	return (
		<div>
			<h1>Password Reset</h1>
			<PasswordForgetForm />
		</div>
	);
};

const initialState = {
	email: '',
	error: null,
};

const PasswordForgetForm = (props) => {
	const [user, setUser] = useState(initialState);
	const firebase = useContext(FirebaseContext);

	const onSubmit = (event) => {
		const { email } = user;

		firebase
			.doPasswordReset(email)
			.then(() => {
				setUser(initialState);
			})
			.catch((error) => {
				setUser({ error });
			});
		event.preventDefault();
	};

	const onChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const isInvalid = user.email === '';

	return (
		<form onSubmit={onSubmit}>
			<input
				name='email'
				value={user.email}
				onChange={onChange}
				type='text'
				placeholder='Email address'
			/>
			<button disabled={isInvalid} type='submit'>
				Reset My Password
			</button>
			{user.error && <p>{user.error.message}</p>}
		</form>
	);
};

const PasswordForgetLink = () => (
	<p>
		<Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
	</p>
);
export default PasswordForgetPage;

export { PasswordForgetForm, PasswordForgetLink };
