import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
	Navigation,
	LandingPage,
	SignUpPage,
	SignInPage,
	PasswordForgetPage,
	HomePage,
	AccountPage,
	AdminPage,
} from '../Exporter';

import * as ROUTES from '../../Constants/routes';
import { withFirebase } from '../Firebase/index';

const App = (props) => {
	const [authUser, setAuthUser] = useState(null);

	useEffect(() => {
		props.firebase.auth.onAuthStateChanged((authUser) => {
			authUser ? setAuthUser(authUser) : setAuthUser(null);
		});
	}, []);

	return (
		<Router>
			<div>
				<Navigation authUser={authUser} />

				<hr />

				<Route exact path={ROUTES.LANDING} component={LandingPage} />
				<Route path={ROUTES.SIGN_UP} component={SignUpPage} />
				<Route path={ROUTES.SIGN_IN} component={SignInPage} />
				<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
				<Route path={ROUTES.HOME} component={HomePage} />
				<Route path={ROUTES.ACCOUNT} component={AccountPage} />
				<Route path={ROUTES.ADMIN} component={AdminPage} />
			</div>
		</Router>
	);
};

export default withFirebase(App);
