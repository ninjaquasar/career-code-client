import BrowseCategories from "../components/home/BrowseCategories";
import Hero from "../components/home/Hero";
import HotJobs from "../components/home/HotJobs";
import Stats from "../components/home/Stats";

const Home = () => {
	return (
		<main className="pb-24">
			<Hero />
			<Stats />
			<BrowseCategories />
			<HotJobs />
		</main>
	);
};

export default Home;
