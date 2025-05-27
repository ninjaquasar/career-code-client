import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const SignUpForm = () => {
	// Get sign-up function from our custom hook for auth
	const { signUpWithEmailAndPassword } = useAuth();
	const navigate = useNavigate();
	// Handle function that runs on submitting the form
	const handleSignUp = (event) => {
		// Prevent page from reloading
		event.preventDefault();
		// Get user submitted data
		const form = event.target;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		// Sign up the user to Firebase
		signUpWithEmailAndPassword(data.email, data.password)
			// Action on success
			.then((userCredential) => {
				console.log("Success - Sign Up User");
				navigate("/login");
			})
			// Action on error
			.catch((error) => {
				console.log(`Error - Sign Up User ${error}`);
			});
	};
	return (
		<form
			className="max-w-4/5 mx-auto space-y-4"
			onSubmit={handleSignUp}
		>
			{/* Name field */}
			<label className="flex flex-col gap-y-1">
				<span className="text-xl font-medium">Name</span>
				<input
					type="text"
					name="name"
					className="p-2 text-lg bg-neutral-50 border border-neutral-300 rounded-lg  focus:outline-none focus:border-prime/50 placeholder:text-neutral-400 caret-prime"
					placeholder="Career Craft"
				/>
			</label>
			{/* Picture field */}
			<label className="flex flex-col gap-y-1">
				<span className="text-xl font-medium">Picture (URL)</span>
				<input
					type="url"
					name="photo_url"
					className="p-2 text-lg bg-neutral-50 border border-neutral-300 rounded-lg  focus:outline-none focus:border-prime/50 placeholder:text-neutral-400 caret-prime"
					placeholder="https://i.ibb.co/id/name.jpg"
				/>
			</label>
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
					Sign Up
				</button>
			</div>
		</form>
	);
};

export default SignUpForm;
