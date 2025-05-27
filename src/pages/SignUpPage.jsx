import SignUpCard from "../components/authentication/SignUpCard";
import SignUpLottie from "../assets/lotties/sign_up.json";
import Lottie from "lottie-react";

const SignUpPage = () => {
	return (
		<main className="px-40 py-16">
			<div
				role="grid"
				className="flex justify-around"
			>
				<SignUpCard />
				<div
					role="img"
					className="w-2/5"
				>
					<Lottie
						animationData={SignUpLottie}
						className="w-lg"
					/>
				</div>
			</div>
		</main>
	);
};

export default SignUpPage;
