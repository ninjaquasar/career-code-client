const CategoryCard = ({
	children = "",
	showDescription = false,
	icon = "",
	description = "",
}) => {
	return showDescription ? (
		<div className="bg-gradient-to-br from-neutral-100 to-prime/15 p-6 border border-neutral-300 rounded-2xl flex flex-col items-center gap-y-2 hover:to-prime/25 hover:border-prime/40 transition-colors">
			<div
				role="img"
				className="text-4xl"
			>
				{icon}
			</div>
			<h5 className="text-xl font-semibold">{children}</h5>
			<p className="text-sm text-center text-neutral-600 font-medium">{description}</p>
		</div>
	) : (
		<div className="bg-gradient-to-br from-neutral-100 to-prime/15 p-6 border border-neutral-300 rounded-2xl flex items-center gap-x-4 hover:to-prime/25 hover:border-prime/40 transition-colors">
			<div
				role="img"
				className="text-3xl"
			>
				{icon}
			</div>
			<h5 className="text-xl font-semibold">{children}</h5>
		</div>
	);
};

export default CategoryCard;
