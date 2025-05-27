import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase.config";

const useAuth = () => {
	const signUpWithEmailAndPassword = (email = "", password = "") => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const loginWithEmailAndPassword = (email = "", password = "") => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	return { signUpWithEmailAndPassword, loginWithEmailAndPassword };
};

export default useAuth;
