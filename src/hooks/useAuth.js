import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase.config";

const useAuth = () => {
	const exampleUser = {
		displayName: "Career Craft",
		photoURL: "https://i.ibb.co/id/name.jpg",
		email: "name@example.com",
		password: "AbC$123",
	};
	return { exampleUser };
};

export default useAuth;
