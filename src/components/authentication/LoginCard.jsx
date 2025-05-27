import { Link } from "react-router";
import LoginForm from "./LoginForm";

const LoginCard = () => {
	return (
		<div className="w-2/5 border border-neutral-200 bg-neutral-100 rounded-3xl p-8">
			{/* Heading text */}
			<h2 className="text-4xl font-bold text-center text-prime mb-10">Login</h2>
			{/* Form for logging in */}
			<LoginForm />
			{/* Link to redirect the user to Sign-Up page */}
			<p className="text-neutral-700 mt-8 text-center">
				New experience here? Then{" "}
				<Link
					to="/signup"
					className="text-prime font-medium hover:underline hover:underline-offset-2"
				>
					Sign Up
				</Link>
				.
			</p>
		</div>
	);
};

export default LoginCard;
