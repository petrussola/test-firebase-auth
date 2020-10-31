import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session/index';
import { PasswordForgetForm } from '../PasswordForget/index';
import PasswordChangeForm from '../PasswordChange/index';

const AccountPage = () => {
	return (
		<AuthUserContext.Consumer>
			{(authUser) => (
				<div>
					<h1>Account Page</h1>
					<PasswordForgetForm />
					<PasswordChangeForm />
				</div>
			)}
		</AuthUserContext.Consumer>
	);
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
