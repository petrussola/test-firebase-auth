import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut/index';
import * as ROUTES from '../../Constants/routes';
import { AuthUserContext } from '../Session/index';

const Navigation = () => {
	return (
		<div>
			<AuthUserContext.Consumer>
				{(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
			</AuthUserContext.Consumer>
		</div>
	);
};

const NavigationAuth = () => {
	return (
		<ul>
			<li>
				<Link to={ROUTES.LANDING}>Landing</Link>
			</li>
			<li>
				<Link to={ROUTES.HOME}>Home</Link>
			</li>
			<li>
				<Link to={ROUTES.ACCOUNT}>Account</Link>
			</li>
			<li>
				<SignOutButton />
			</li>
		</ul>
	);
};

const NavigationNonAuth = () => {
	return (
		<ul>
			<li>
				<Link to={ROUTES.LANDING}>Landing</Link>
			</li>
			<li>
				<Link to={ROUTES.SIGN_IN}>Sign In</Link>
			</li>
		</ul>
	);
};

export default Navigation;
