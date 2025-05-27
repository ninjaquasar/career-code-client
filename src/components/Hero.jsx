import Lottie from "lottie-react";
import HeroAnimation from "../assets/lotties/hero.json";

const Hero = () => {
	return (
		<section className="max-w-8xl mx-auto flex items-center justify-between">
			{/* Content (left-aligned) */}
			<div className="max-w-3/5">
				<h1 className="text-5xl font-bold mb-4">Craft Your Path to Success</h1>
				<p className="text-neutral-800 mb-8">
					A comprehensive job portal platform enabling seamless interaction between
					job seekers and eployers. Create and manage job postings, Find your desired
					job, Apply and manage job applications. So start crafting your career now!
				</p>
				<button
					type="button"
					className="px-5 py-3 text-xl font-medium text-light bg-prime rounded-xl  hover:bg-blue-500 cursor-pointer"
				>
					Get Started
				</button>
			</div>
			{/* Lottie Animation (right-aligned) */}
			<div className="max-w-1/3">
				<Lottie
					animationData={HeroAnimation}
					loop={true}
				></Lottie>
			</div>
		</section>
	);
};

export default Hero;
