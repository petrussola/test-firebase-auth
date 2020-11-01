import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../Firebase/index';

const useAuth = () => {
	const [authUser, setAuthUser] = useState();
    const firebase = useContext(FirebaseContext);
    
	useEffect(() => {
		firebase.auth.onAuthStateChanged((authUser) => {
			authUser ? setAuthUser(authUser) : setAuthUser(null);
		});
	}, []);
	return authUser;
};

export default useAuth;
