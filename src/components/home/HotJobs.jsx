import { useEffect, useState } from "react";
import JobCard from "../shared/JobCard";

const HotJobs = () => {
	const [jobsData, setJobsData] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5100/jobs/hot")
			.then((res) => res.json())
			.then((data) => setJobsData(data))
			.catch((error) => console.log(error));
	}, []);
	return (
		<section className="max-w-8xl mx-auto mt-24">
			<h2 className="text-4xl font-bold text-center mb-2">♨️ Hot Jobs</h2>
			<p className="text-lg text-center text-neutral-700">
				Find the desired job for you that ignites your happiness. Over 30+ Hot Jobs.
			</p>
			<div
				role="grid"
				className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
			>
				{jobsData.map((job) => (
					<JobCard
						key={job._id}
						data={job}
					/>
				))}
			</div>
		</section>
	);
};

export default HotJobs;
