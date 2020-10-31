import React, { useState, useEffect } from 'react';
import { AuthUserContext } from '../Session/index';
import { withFirebase } from '../Firebase/index';

const withAuthentication = (Component) => {
	function WithAuthentication(props) {
		const [authUser, setAuthUser] = useState(null);

		useEffect(() => {
			props.firebase.auth.onAuthStateChanged((authUser) => {
				authUser ? setAuthUser(authUser) : setAuthUser(null);
			});
		}, []);
		return (
			<AuthUserContext.Provider value={authUser}>
				<Component {...props} />
			</AuthUserContext.Provider>
		);
	}
	return withFirebase(WithAuthentication);
};

export default withAuthentication;
