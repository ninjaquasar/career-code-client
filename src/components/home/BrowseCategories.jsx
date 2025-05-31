import CategoryCard from "../shared/CategoryCard";

const BrowseCategories = () => {
	const categoriesData = [
		{
			emoji: "💡",
			name: "Web & Software",
		},
		{
			emoji: "📊",
			name: "Management",
		},
		{
			emoji: "📞",
			name: "Customer Help",
		},
		{
			emoji: "👨🏻‍💼",
			name: "Human Resource",
		},
		{
			emoji: "🏦",
			name: "Finance",
		},
		{
			emoji: "📢",
			name: "Marketing",
		},
		{
			emoji: "📝",
			name: "Content Writing",
		},
		{
			emoji: "🔮",
			name: "Editing",
		},
	];
	return (
		<section className="max-w-8xl mx-auto mt-24">
			<h2 className="text-4xl font-bold text-center mb-2">Browse Categories</h2>
			<p className="text-lg text-center text-neutral-700">
				Find the job that's perfect for you, categorized beautifully for you. Over 15+
				categories.
			</p>
			<div className="mt-12 grid grid-cols-4 gap-6">
				{categoriesData.map((category) => (
					<CategoryCard
						key={category.name}
						emoji={category.emoji}
					>
						{category.name}
					</CategoryCard>
				))}
			</div>
		</section>
	);
};

export default BrowseCategories;
