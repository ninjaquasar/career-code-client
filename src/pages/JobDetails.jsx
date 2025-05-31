import JobDetailsCard from "../components/cards/JobDetailsCard";
import { useLoaderData } from "react-router";

const JobDetails = () => {
	const jobData = useLoaderData();
	return (
		<main className="pt-12 pb-24">
			<section className="max-w-8xl mx-auto">
				<JobDetailsCard data={jobData} />
			</section>
		</main>
	);
};

export default JobDetails;
