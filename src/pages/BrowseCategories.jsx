import { useLoaderData } from "react-router";
import CategoryCard from "../components/shared/CategoryCard";

const BrowseCategories = () => {
	const categories = useLoaderData();
	return (
		<main className="pt-8 pb-24">
			<section className="max-w-8xl mx-auto">
				<h2 className="text-4xl font-bold text-center mb-3">🏷️ Browse Categories</h2>
				<p className="text-lg text-center text-neutral-700">
					Over 15+ organized job categories.
				</p>
				<div
					role="grid"
					className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
				>
					{categories.map((category) => (
						<CategoryCard
							key={category._id}
							showDescription
							icon={category.icon}
							description={category.description}
						>
							{category.name}
						</CategoryCard>
					))}
				</div>
			</section>
		</main>
	);
};

export default BrowseCategories;
