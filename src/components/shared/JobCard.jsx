import { Link } from "react-router";

const JobCard = ({ data }) => {
	const {
		_id,
		company_logo,
		company,
		jobType,
		title,
		category,
		location,
		description,
		responsibilities,
		salaryRange,
		requirements,
	} = data;
	return (
		<div className="bg-gradient-to-br from-neutral-50 to-neutral-200 p-6 border border-neutral-300 rounded-3xl flex flex-col gap-y-4">
			<div className="flex items-center gap-x-4">
				<img
					src={company_logo}
					alt="Company Logo"
					className="w-12"
				/>
				<div>
					<h5 className="text-xl font-bold">{company}</h5>
					<p className="text-neutral-600 font-medium text-sm">{jobType}</p>
				</div>
			</div>
			<h5 className="text-xl font-bold">{title}</h5>
			<div className="flex justify-between text-sm text-neutral-700 font-medium">
				<span>{category}</span>
				<span>{location}</span>
			</div>
			<div className="space-y-1">
				<p className="text-neutral-700 text-justify line-clamp-3">{description}</p>
				<ul className="text-neutral-700 list-disc pl-4">
					{responsibilities.map((responsibility) => (
						<li key={responsibility}>{responsibility}</li>
					))}
				</ul>
			</div>
			<p className="font-medium">
				{salaryRange.min} - {salaryRange.max} {salaryRange.currency}
			</p>
			<div className="flex flex-wrap gap-2 text-sm">
				{requirements.map((requirement) => (
					<span
						key={requirement}
						className="px-2 py-1 bg-neutral-100 border border-neutral-300 hover:border-neutral-400 rounded-md cursor-default"
					>
						{requirement}
					</span>
				))}
			</div>
			<Link
				to={`/jobs/details/${_id}`}
				target="_blank"
				className="self-end mt-auto"
			>
				<button
					type="button"
					className="px-3 py-2 text-lg font-medium text-light bg-prime rounded-lg hover:bg-blue-500 cursor-pointer"
				>
					Apply Now
				</button>
			</Link>
		</div>
	);
};

export default JobCard;
