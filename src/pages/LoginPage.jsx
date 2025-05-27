import LoginCard from "../components/authentication/LoginCard";
import LoginLottie from "../assets/lotties/login.json";
import Lottie from "lottie-react";

const LoginPage = () => {
	return (
		<main className="px-40">
			{/* Flexbox directed by column */}
			<div className="flex flex-col items-center">
				{/* Lottie animation on top */}
				<div>
					<Lottie
						animationData={LoginLottie}
						className="w-sm"
					/>
				</div>
				{/* Login Card below */}
				<LoginCard />
			</div>
		</main>
	);
};

export default LoginPage;
