import React, { useState } from 'react';
import { withFirebase } from '../Firebase/index';

const initialState = {
	passwordOne: '',
	passwordTwo: '',
	error: null,
};

const PasswordChangeForm = (props) => {
	const [user, setUser] = useState(initialState);

	const onSubmit = (event) => {
		const { passwordOne } = user;

		props.firebase
			.doPasswordUpdate(passwordOne)
			.then(() => {
				setUser(initialState);
			})
			.catch((error) => {
				setUser({ ...user, error });
			});
	};

	const onChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const isInvalid =
		user.passwordOne !== user.passwordTwo || user.passwordOne === '';

	return (
		<form onSubmit={onSubmit}>
			<input
				name='passwordOne'
				value={user.passwordOne}
				onChange={onChange}
				type='password'
				placeholder='New Password'
			/>
			<input
				name='passwordTwo'
				value={user.passwordTwo}
				onChange={onChange}
				type='password'
				placeholder='Confirm New Password'
			/>
			<button disabled={isInvalid} type='submit'>
				Reset My Password
			</button>
			{user.error && <p>{user.error.message}</p>}
		</form>
	);
};

export default withFirebase(PasswordChangeForm);
