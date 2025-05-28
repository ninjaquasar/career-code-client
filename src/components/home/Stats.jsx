const Stats = () => {
	return (
		<section className="max-w-8xl mx-auto flex">
			<div className="stat place-items-center">
				<h6 className="stat-title text-lg text-neutral-500 font-medium">
					Hired Candidates
				</h6>
				<h3 className="stat-value">210</h3>
				<p className="stat-desc mt-2 text-neutral-600 font-medium">
					We always provide success in career to our great users
				</p>
			</div>
			<div className="stat place-items-center">
				<h6 className="stat-title text-lg text-neutral-500 font-medium">
					Happy Clients
				</h6>
				<h3 className="stat-value">80</h3>
				<p className="stat-desc mt-2 text-neutral-600 font-medium">
					We always provide the perfect employees for their business
				</p>
			</div>
			<div className="stat place-items-center">
				<h6 className="stat-title text-lg text-neutral-500 font-medium">
					Open Job Recipes
				</h6>
				<h3 className="stat-value">200</h3>
				<p className="stat-desc mt-2 text-neutral-600 font-medium">
					We always provide the desired jobs to our users
				</p>
			</div>
		</section>
	);
};

export default Stats;
