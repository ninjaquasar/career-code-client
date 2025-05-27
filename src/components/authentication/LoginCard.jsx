import LoginForm from "./LoginForm";

const LoginCard = () => {
	return (
		<div className="w-2/5 border border-neutral-200 bg-neutral-100 rounded-3xl p-8">
			<h2 className="text-4xl font-bold text-center text-prime mb-10">Login</h2>
			<LoginForm />
		</div>
	);
};

export default LoginCard;
