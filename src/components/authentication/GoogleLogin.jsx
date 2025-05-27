import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
	const { loginWithGoogle } = useAuth();
	const navigate = useNavigate();
	const handleLogin = () => {
		loginWithGoogle()
			.then((userCredential) => {
				console.log("Success - Login User with Google");
				navigate("/");
			})
			.catch((error) => {
				console.log(`Error - Login User with Google ${error}`);
			});
	};
	return (
		<div className="max-w-4/5 mx-auto text-center mt-6 space-y-6">
			<hr className="border-neutral-300" />
			<button
				type="button"
				className="w-full py-2 text-lg font-medium text-neutral-700 bg-neutral-50 border border-neutral-300 rounded-full hover:bg-neutral-100 cursor-pointer"
				onClick={handleLogin}
			>
				Continue with Google
			</button>
		</div>
	);
};

export default GoogleLogin;
