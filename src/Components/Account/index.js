import React from 'react';
import { PasswordForgetForm } from '../PasswordForget/index';
import PasswordChangeForm from '../PasswordChange/index';

const AccountPage = () => {
	return (
		<div>
			<h1>Account Page</h1>
			<PasswordForgetForm />
			<PasswordChangeForm />
		</div>
	);
};

export default AccountPage;
