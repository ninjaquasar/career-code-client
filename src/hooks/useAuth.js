import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase.config";

const useAuth = () => {
	const signUpWithEmailAndPassword = (email = "", password = "") => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	return { signUpWithEmailAndPassword };
};

export default useAuth;
