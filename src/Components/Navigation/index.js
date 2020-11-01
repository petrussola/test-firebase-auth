import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session/index';

import SignOutButton from '../SignOut/index';
import * as ROUTES from '../../Constants/routes';

const Navigation = () => {
	const authUser = useContext(AuthUserContext);

	return <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>;
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
