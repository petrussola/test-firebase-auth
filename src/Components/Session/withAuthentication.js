import React, { useState, useEffect, useContext } from 'react';
import { AuthUserContext } from '../Session/index';
import { FirebaseContext } from '../Firebase/index';

const withAuthentication = (Component) => {
	function WithAuthentication(props) {
		const [authUser, setAuthUser] = useState(null);
		const firebase = useContext(FirebaseContext);

		useEffect(() => {
			firebase.auth.onAuthStateChanged((authUser) => {
				authUser ? setAuthUser(authUser) : setAuthUser(null);
			});
		}, []);
		return (
			<AuthUserContext.Provider value={authUser}>
				<Component {...props} />
			</AuthUserContext.Provider>
		);
	}
	return WithAuthentication;
};

export default withAuthentication;
