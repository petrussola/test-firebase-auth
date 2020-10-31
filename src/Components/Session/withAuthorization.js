import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase/index';
import * as ROUTES from '../../Constants/routes';

const withAuthorization = (condition) => (Component) => {
	function WithAuthorization(props) {
		useEffect(() => {
			props.firebase.auth.onAuthStateChanged((authUser) => {
				if (!condition(authUser)) {
					props.history.push(ROUTES.SIGN_IN);
				}
			});
		}, []);
		return (
			<AuthUserContext.Consumer>
				{(authUser) => (condition(authUser) ? <Component {...props} /> : null)}
			</AuthUserContext.Consumer>
		);
	}
	return withRouter(withFirebase(WithAuthorization));
};

export default withAuthorization;
