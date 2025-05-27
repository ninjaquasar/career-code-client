import SignUpForm from "./SignUpForm";

const SignUpCard = () => {
	return (
		<div className="w-xl border border-neutral-200 bg-neutral-100 rounded-3xl p-8">
			<h2 className="text-4xl font-bold text-center text-prime mb-10">Sign Up</h2>
			<SignUpForm />
		</div>
	);
};

export default SignUpCard;
