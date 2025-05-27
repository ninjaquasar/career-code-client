import LoginCard from "../components/authentication/LoginCard";
import LoginLottie from "../assets/lotties/login.json";
import Lottie from "lottie-react";

const LoginPage = () => {
	return (
		<main className="px-40">
			<div
				role="grid"
				className="flex flex-col items-center"
			>
				<div>
					<Lottie
						animationData={LoginLottie}
						className="w-sm"
					/>
				</div>
				<LoginCard />
			</div>
		</main>
	);
};

export default LoginPage;
