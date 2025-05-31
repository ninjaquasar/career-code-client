import HotCategories from "../components/home/HotCategories";
import Hero from "../components/home/Hero";
import HotJobs from "../components/home/HotJobs";
import Stats from "../components/home/Stats";

const Home = () => {
	return (
		<main className="pb-24">
			<Hero />
			<Stats />
			<HotCategories />
			<HotJobs />
		</main>
	);
};

export default Home;
