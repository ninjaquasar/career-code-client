import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";
import { auth } from "../../config/firebase.config";

const useAuth = () => {
	const signUpWithEmailAndPassword = (email = "", password = "") => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const loginWithEmailAndPassword = (email = "", password = "") => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const loginWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		return signInWithPopup(auth, provider);
	};
	return { signUpWithEmailAndPassword, loginWithEmailAndPassword, loginWithGoogle };
};

export default useAuth;
