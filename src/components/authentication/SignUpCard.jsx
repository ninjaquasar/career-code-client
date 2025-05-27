import { Link } from "react-router";
import SignUpForm from "./SignUpForm";
import GoogleLogin from "./GoogleLogin";

const SignUpCard = () => {
	return (
		<div className="w-xl border border-neutral-200 bg-neutral-100 rounded-3xl p-8">
			{/* Heading text */}
			<h2 className="text-4xl font-bold text-center text-prime mb-10">Sign Up</h2>
			{/* Form for signing up */}
			<SignUpForm />
			{/* Google Login */}
			<GoogleLogin />
			{/* Link to redirect the user to Login page */}
			<p className="text-neutral-700 mt-8 text-center">
				Already have experience here? Then{" "}
				<Link
					to="/login"
					className="text-prime font-medium hover:underline hover:underline-offset-2"
				>
					Login
				</Link>
				.
			</p>
		</div>
	);
};

export default SignUpCard;
