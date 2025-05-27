import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
	// Get login function from our custom hook for auth
	const { loginWithEmailAndPassword } = useAuth();
	const navigate = useNavigate();
	// Handle function that runs on submitting the form
	const handleLogin = (event) => {
		// Prevent page from reloading
		event.preventDefault();
		// Get user submitted data
		const form = event.target;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		// Login the user to Firebase
		loginWithEmailAndPassword(data.email, data.password)
			// Action on success
			.then((userCredential) => {
				console.log("Success - Login User");
				navigate("/");
			})
			// Action on error
			.catch((error) => {
				console.log(`Error - Login User ${error}`);
			});
	};
	return (
		<form
			className="max-w-4/5 mx-auto space-y-4"
			onSubmit={handleLogin}
		>
			{/* Email field */}
			<label className="flex flex-col gap-y-1">
				<span className="text-xl font-medium">Email</span>
				<input
					type="email"
					name="email"
					className="p-2 text-lg bg-neutral-50 border border-neutral-300 rounded-lg  focus:outline-none focus:border-prime/50 placeholder:text-neutral-400 caret-prime"
					placeholder="name@example.com"
				/>
			</label>
			{/* Password field */}
			<label className="flex flex-col gap-y-1">
				<span className="text-xl font-medium">Password</span>
				<input
					type="password"
					name="password"
					className="p-2 text-lg bg-neutral-50 border border-neutral-300 rounded-lg  focus:outline-none focus:border-prime/50 placeholder:text-neutral-400 caret-prime"
					placeholder="••••••••"
				/>
			</label>
			{/* Submit button */}
			<div className="text-center">
				<button
					type="submit"
					className="w-40 py-2 text-2xl font-medium bg-prime text-light hover:bg-blue-500 rounded-xl cursor-pointer"
				>
					Login
				</button>
			</div>
		</form>
	);
};

export default LoginForm;
