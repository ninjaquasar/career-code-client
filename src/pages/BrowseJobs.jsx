import { useLoaderData } from "react-router";
import JobCard from "../components/shared/JobCard";

const BrowseJobs = () => {
	const jobs = useLoaderData();
	return (
		<main className="pt-8 pb-24">
			<section className="max-w-8xl mx-auto">
				<h2 className="text-4xl font-bold text-center mb-3">💼 Browse Jobs</h2>
				<p className="text-lg text-center text-neutral-700">
					Over 200+ curated open job opportunities.
				</p>
				<div
					role="grid"
					className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8"
				>
					{jobs.map((job) => (
						<JobCard
							key={job._id}
							data={job}
						/>
					))}
				</div>
			</section>
		</main>
	);
};

export default BrowseJobs;
