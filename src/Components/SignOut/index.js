import React, { useContext } from 'react';
import { FirebaseContext } from '../Firebase/index';

const SignOutButton = () => {
	const firebase = useContext(FirebaseContext);
	return (
		<button type='button' onClick={firebase.doSignOut}>
			Sign Out
		</button>
	);
};

export default SignOutButton;
