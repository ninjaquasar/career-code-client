const JobDetailsCard = ({ data }) => {
	const {
		company_logo,
		company,
		title,
		jobType,
		location,
		category,
		description,
		responsibilities,
		salaryRange,
		applicationDeadline,
		requirements,
		hr_name,
		hr_email,
	} = data;
	return (
		<div className="max-w-4xl mx-auto p-8 bg-neutral-50 border border-neutral-200 rounded-4xl space-y-6">
			<div className="space-y-2">
				<h3 className="text-3xl font-bold">{title}</h3>
				<div className="flex items-center gap-x-2">
					<img
						src={company_logo}
						alt="Company Logo"
						className="size-8 hover:brightness-115"
					/>
					<h4 className="text-2xl font-medium">{company}</h4>
				</div>
			</div>
			<div className="border border-neutral-200" />
			<div className="flex gap-x-20 font-medium text-neutral-600">
				<p>{category}</p>
				<p>{jobType}</p>
				<p>{location}</p>
			</div>
			<div className="border border-neutral-200" />
			<div className="max-w-5/6 space-y-1">
				<h6 className="text-lg font-medium">Description:</h6>
				<p className="text-lg text-justify">{description}</p>
			</div>
			<div className="border border-neutral-200" />
			<div className="space-y-3">
				<h6 className="text-lg font-medium">Requirements:</h6>
				<div className="flex flex-wrap gap-2 text-neutral-800">
					{requirements.map((requirement) => (
						<span
							key={requirement}
							className="px-2 py-1 bg-neutral-100 border border-neutral-300 hover:border-neutral-400/75 rounded-md cursor-default"
						>
							{requirement}
						</span>
					))}
				</div>
			</div>
			<div className="space-y-3">
				<h6 className="text-lg font-medium">Responsibilities:</h6>
				<ul className="list-disc pl-4 space-y-1">
					{responsibilities.map((responsibility) => (
						<li key={responsibility}>{responsibility}</li>
					))}
				</ul>
			</div>
			<div className="border border-neutral-200" />
			<div className="flex items-center gap-x-32 text-neutral-700 text-lg font-medium">
				<h6>
					{salaryRange.min} - {salaryRange.max} ({salaryRange.currency})
				</h6>
				<h6>{applicationDeadline}</h6>
			</div>
			<div className="border border-neutral-200" />
			<div className="space-y-2">
				<h6 className="text-lg font-medium">Contact with Client:</h6>
				<ul className="list-disc pl-4 space-y-1">
					<li>
						<span className="font-medium mr-2">Name:</span>
						{hr_name}
					</li>
					<li>
						<span className="font-medium mr-2">Email:</span>
						{hr_email}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default JobDetailsCard;
