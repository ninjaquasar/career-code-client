import SignUpCard from "../components/authentication/SignUpCard";
import SignUpLottie from "../assets/lotties/sign_up.json";
import Lottie from "lottie-react";

const SignUpPage = () => {
	return (
		<main className="px-40">
			{/* Flexbox directed by column */}
			<div className="flex flex-col items-center">
				{/* Lottie animation on top */}
				<div>
					<Lottie
						animationData={SignUpLottie}
						className="w-sm"
					/>
				</div>
				{/* Sign Up Card below */}
				<SignUpCard />
			</div>
		</main>
	);
};

export default SignUpPage;
