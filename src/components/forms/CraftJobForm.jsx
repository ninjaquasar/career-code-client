const CraftJobForm = () => {
	const categories = [
		"Executive",
		"Business",
		"Management",
		"Engineering",
		"Finance",
		"Development",
		"Design",
		"Teaching",
		"Marketing",
		"Sales",
		"Advertisement",
	];
	const jobTypes = [
		"Intern",
		"Remote",
		"On-Site",
		"Hybrid",
		"Part-Time",
		"Full-Time",
		"Contractual",
	];
	const requirements = [
		"HTML",
		"CSS",
		"Tailwind CSS",
		"Figma",
		"JavaScript",
		"React.js",
		"Node.js",
		"Express.js",
		"MongoDB",
		"MERN",
		"C++",
		"Python",
		"Django",
		"SQL",
		"SEO",
		"Google Analytics",
		"Google Docs",
		"Google Slides",
		"Google Sheets",
		"Tableau",
		"Zoom",
		"MS Office",
		"Powerpoint",
		"AI",
		"Firebase",
		"Kotlin",
		"Flutter",
		"Docker",
		"Kubernetes",
		"AWS",
		"WordPress",
		"CMS",
		"Excel",
		"QuickBooks",
		"Grammarly",
		"JIRA",
		"Trello",
		"Slack",
		"Agile Methods",
	];
	const currencies = ["USD", "GBP", "BDT", "EUR", "JPY"];
	return (
		<form className="max-w-4/5 mx-auto space-y-4">
			{/* Title field */}
			<label className="flex flex-col gap-y-1">
				<span className="text-xl font-medium">Title</span>
				<input
					type="text"
					name="title"
					className="input w-full text-lg bg-neutral-50 border border-neutral-300 focus:border-prime/40 placeholder:text-neutral-400"
					placeholder="Web Developer"
					required={true}
				/>
			</label>
			{/* Company Name field */}
			<label className="flex flex-col gap-y-1">
				<span className="text-xl font-medium">Company Name</span>
				<input
					type="text"
					name="company_name"
					className="input w-full text-lg bg-neutral-50 border border-neutral-300 focus:border-prime/40 placeholder:text-neutral-400"
					placeholder="Career Craft"
					required={true}
				/>
			</label>
			{/* Company Logo field */}
			<label className="flex flex-col gap-y-1">
				<span className="text-xl font-medium">Company Logo</span>
				<input
					type="url"
					name="company_logo"
					className="input w-full text-lg bg-neutral-50 border border-neutral-300 focus:border-prime/40 placeholder:text-neutral-400"
					placeholder="https://careercraft.jobs/assets/logo.png"
					required={true}
				/>
			</label>
			{/* Category field */}
			<label className="flex flex-col gap-y-1">
				<span className="text-xl font-medium">Category</span>
				<select
					name="category"
					defaultValue="select-default"
					className="select w-48 text-lg bg-neutral-50 border border-neutral-300 focus:border-prime/40 placeholder:text-neutral-400 cursor-default"
					required={true}
				>
					<option
						disabled
						value="select-default"
					>
						Select
					</option>
					{categories.map((category) => (
						<option
							key={category}
							value={category.toLowerCase()}
						>
							{category}
						</option>
					))}
				</select>
			</label>
			{/* Application Deadline field */}
			<label className="flex flex-col gap-y-1">
				<span className="text-xl font-medium">Application Deadline</span>
				<input
					type="date"
					name="application_deadline"
					className="input w-48 text-lg bg-neutral-50 border border-neutral-300 focus:border-prime/40 placeholder:text-neutral-400"
					required={true}
				/>
			</label>
			{/* Job Type field */}
			<label className="flex flex-col gap-y-1">
				<span className="text-xl font-medium">Job Type</span>
				<select
					name="job_type"
					defaultValue="select-default"
					className="select w-48 text-lg bg-neutral-50 border border-neutral-300 focus:border-prime/40 placeholder:text-neutral-400"
					required={true}
				>
					<option
						disabled
						value="select-default"
					>
						Select
					</option>
					{jobTypes.map((jobType) => (
						<option
							key={jobType}
							value={jobType.toLowerCase()}
						>
							{jobType}
						</option>
					))}
				</select>
			</label>
			{/* Location field */}
			<label className="flex flex-col gap-y-1">
				<span className="text-xl font-medium">Location</span>
				<input
					type="text"
					name="location"
					className="input w-full text-lg bg-neutral-50 border border-neutral-300 focus:border-prime/40 placeholder:text-neutral-400"
					placeholder="District, City"
					required={true}
				/>
			</label>
			{/* Description field */}
			<label className="flex flex-col gap-y-1">
				<span className="text-xl font-medium">Description</span>
				<textarea
					rows={6}
					minLength={50}
					maxLength={200}
					name="description"
					className="textarea resize-none w-full text-lg bg-neutral-50 border border-neutral-300 focus:border-prime/40 placeholder:text-neutral-400"
					placeholder="Details about the work"
					required={true}
				/>
			</label>
			{/* Requirements field */}
			<label className="flex flex-col gap-y-2">
				<span className="text-xl font-medium">Requirements</span>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
					{requirements.map((requirement) => (
						<label
							key={requirement}
							className="flex items-center gap-x-2 scheme-light"
						>
							<input
								type="checkbox"
								className="checkbox checkbox-sm rounded bg-[#e9e9e9] checked:bg-[#bbbbbb]"
							/>
							{requirement}
						</label>
					))}
				</div>
			</label>
			{/* Responsibilities field */}
			<label className="flex flex-col gap-y-2">
				<span className="text-xl font-medium">Responsibilities</span>
				<ul className="list-decimal pl-6 space-y-1 text-lg">
					<li>
						<input
							type="text"
							name="responsibility_1"
							className="input input-sm w-full text-[1rem] bg-neutral-50 border border-neutral-300 focus:border-prime/40 placeholder:text-neutral-400"
							placeholder="Responsibility 1"
							required={true}
						/>
					</li>
					<li>
						<input
							type="text"
							name="responsibility_2"
							className="input input-sm w-full text-[1rem] bg-neutral-50 border border-neutral-300 focus:border-prime/40 placeholder:text-neutral-400"
							placeholder="Responsibility 2"
							required={true}
						/>
					</li>
					<li>
						<input
							type="text"
							name="responsibility_3"
							className="input input-sm w-full text-[1rem] bg-neutral-50 border border-neutral-300 focus:border-prime/40 placeholder:text-neutral-400"
							placeholder="Responsibility 3"
							required={true}
						/>
					</li>
				</ul>
			</label>
			{/* Salary Range field */}
			<label className="flex flex-col gap-y-2">
				<span className="text-xl font-medium">Salary Range</span>
				<div className="grid grid-cols-3 gap-x-4">
					<input
						type="number"
						min={0}
						max={1000000}
						name="salary_min"
						className="input scheme-light text-lg bg-neutral-50 border border-neutral-300 focus:border-prime/40 placeholder:text-neutral-400"
						placeholder="Minimum"
						required={true}
					/>
					<input
						type="number"
						min={0}
						max={1000000}
						name="salary_max"
						className="input scheme-light text-lg bg-neutral-50 border border-neutral-300 focus:border-prime/40 placeholder:text-neutral-400"
						placeholder="Maximum"
						required={true}
					/>
					<select
						name="salary_cur"
						defaultValue="select-default"
						className="select text-lg bg-neutral-50 border border-neutral-300 focus:border-prime/40 placeholder:text-neutral-400"
						required={true}
					>
						<option
							disabled
							value="select-default"
						>
							Currency
						</option>
						{currencies.map((currency) => (
							<option
								key={currency}
								value={currency.toLowerCase()}
							>
								{currency}
							</option>
						))}
					</select>
				</div>
			</label>
			{/* Submit button */}
			<div className="text-center mt-8">
				<button
					type="submit"
					className="w-32 py-2 text-2xl font-medium bg-prime text-light hover:bg-blue-500 rounded-lg cursor-pointer"
				>
					Craft
				</button>
			</div>
		</form>
	);
};

export default CraftJobForm;
