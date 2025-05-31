import Lottie from "lottie-react";
import CraftJobLottie from "../assets/lotties/craft-job.json";
import CraftJobCard from "../components/cards/CraftJobCard";

const CraftJob = () => {
	return (
		<main className="pb-24">
			{/* Flexbox directed by column */}
			<div className="max-w-8xl mx-auto flex flex-col items-center">
				{/* Lottie animation on top */}
				<div>
					<Lottie
						animationData={CraftJobLottie}
						className="w-sm"
					/>
				</div>
				{/* Craft Job Card below */}
				<CraftJobCard />
			</div>
		</main>
	);
};

export default CraftJob;
